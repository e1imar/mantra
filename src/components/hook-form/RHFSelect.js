import PropTypes from 'prop-types';
// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { MantraInput } from '../mantra/presentational/MantraInput';

// ----------------------------------------------------------------------

RHFSelect.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node,
};

export default function RHFSelect({ name, children, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <MantraInput
          {...field}
          select
          fullWidth
          SelectProps={{ native: true }}
          error={!!error}
          helperText={error?.message}
          {...other}
        >
          {children}
        </MantraInput>
      )}
    />
  );
}
