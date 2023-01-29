import styled from '@emotion/styled';
import { TextField } from '@mui/material';

export const MantraInput = styled(TextField)`
  max-height: 40px;
  
  & fieldset.MuiOutlinedInput-notchedOutline {
    border: 2px solid var(--gray-heavier);
    height: 41px;
  }

  & .MuiInputBase-root {
    height: 40px;
  }

  & .MuiInputBase-input {
    padding: 9px 0;
  }

  & .MuiFormLabel-root {
    top: -9px;
  }

  & .MuiInputLabel-root.Mui-focused {
    top: 0;
  }
`;
