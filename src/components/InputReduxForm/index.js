import { TextField } from '@material-ui/core';
export default renderField = props => {
  return (
    <TextField
      // className={classes.textField}
      error={false}
      fullWidth
      helperText={''}
      label="Password"
      name="password"
      type="password"
      variant="outlined"
    />
  );
};
