import React from 'react';
import { FormikConfig, FormikHelpers, FormikValues, useFormik } from 'formik';
import * as yup from 'yup';

interface FormMainProps extends React.PropsWithChildren {
  formInitialValues: FormikValues;
  onFormSubmit: (values: FormikValues, formikHelpers: FormikHelpers<FormikValues>) => void | Promise<any>;
  validationSchema: yup.BaseSchema;
  formikProps: Omit<FormikConfig<FormikValues>, 'initialValues' | 'onSubmit'>;
}

function sortComponents(children: React.ReactNode) {
  let submit: React.ReactNode = null;
  const nodes = React.Children.toArray(children);
  const lastIndex = nodes.length - 1;
  return nodes.reduce<React.ReactNode[]>((prev, curr, idx) => {
    if (!React.isValidElement(curr)) return prev;

    if (typeof curr.type === 'function' && curr.type.name === 'ButtonSubmit') {
      submit = curr;
    }
    const element = lastIndex === idx ? [curr, submit] : curr;
    return prev.concat(element);
  }, []);
}

function FormMain({ children, formInitialValues, validationSchema, onFormSubmit, formikProps }: FormMainProps) {
  const formik = useFormik({
    initialValues: formInitialValues,
    validationSchema,
    onSubmit: onFormSubmit,
    ...formikProps,
  });
  return <form onSubmit={formik.submitForm}>{sortComponents(children)}</form>;
}
export default React.forwardRef(FormMain);
