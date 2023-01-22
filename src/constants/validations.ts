import * as yup from 'yup';

export const emailRegex = /^[a-zA-Z0-9\-_.]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/;

const passwordValidation = yup.string().min(8, '비밀번호는 최소 8글자입니다.').required('비밀번호를 입력해주세요');

const loginValidationSchema = yup.object().shape({
  email: yup.string().matches(emailRegex, '이메일 형식이아닙니다.').required('이메일을 입력해주세요.'),
  password: passwordValidation,
});

const registerValidateionSchema = yup.object().shape({
  email: yup.string().matches(emailRegex, '이메일 형식이아닙니다.'),
  password: passwordValidation,
  passwordConfirm: yup
    .string()
    .min(8, '비밀번호는 최소 8글자입니다.')
    .test({
      name: 'passwordConfirm',
      message: '비밀번호가 일치하지 않습니다.',
      test: (value, context) => {
        if (context.parent.password && value !== context.parent) {
          return false;
        }
        return true;
      },
    }),
});

const regex = {
  emailRegex,
};

const yupValidate = {
  loginValidationSchema,
  registerValidateionSchema,
};

export { regex, yupValidate };
