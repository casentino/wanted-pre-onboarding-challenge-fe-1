import { Button, ButtonProps, ExtendButtonBase } from '@mui/material';
import { DefaultComponentProps } from '@mui/material/OverridableComponent';
import React from 'react';
import DefaultInput, { DefaultInputProps } from './DefaultInput';

export type BaseInputProps = Omit<DefaultInputProps, 'onChange' | 'value'>;

export type CompositionNames = 'Input' | 'ButtonSubmit';

export const CompositionMap = {
  Input,
  ButtonSubmit,
} as const;

type InputProps = BaseInputProps & {
  onChange?: (value: string, e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};

export function Input({ children, value, onChange, ...props }: InputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange instanceof Function) {
      onChange(e.target.value, e);
    }
  };
  return (
    <DefaultInput
      value={value || ''}
      onChange={handleChange}
      {...props}
    />
  );
}

type ButtonSubmitProps = ButtonProps & {};
export function ButtonSubmit({ children, ...props }: ButtonSubmitProps) {
  return (
    <Button
      type="submit"
      variant="contained"
      {...props}
    >
      {children}
    </Button>
  );
}

// type InputPasswordProps = BaseInputProps & {
//   id: string;
//   name: string;
//   value?: string;
//   onChange?: (value: string, e: React.ChangeEvent<HTMLInputElement>) => void;
// };

// export function InputPassword({ children, id, name, value, onChange, ...props }: InputPasswordProps) {
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (onChange instanceof Function) {
//       onChange(e.target.value, e);
//     }
//   };
//   return (
//     <DefaultInput
//       id={id}
//       name={name}
//       type="password"
//       value={value || ''}
//       onChange={handleChange}
//       {...props}
//     >
//       {children}
//     </DefaultInput>
//   );
// }
