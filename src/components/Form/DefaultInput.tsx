import { FormControl, FormHelperText, TextField, TextFieldProps } from '@mui/material';
import React from 'react';

export type DefaultInputProps = Omit<TextFieldProps, 'error' | 'helperText'> & {
  error?: boolean;
  errorMessage?: string;
};

function DefaultInput({ children, error, errorMessage, ...props }: DefaultInputProps) {
  return (
    <FormControl error={error}>
      <TextField
        fullWidth
        variant="outlined"
        {...props}
      />
      {error !== undefined && <FormHelperText>{errorMessage}</FormHelperText>}
    </FormControl>
  );
}
export default React.memo(DefaultInput);
