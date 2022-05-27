import React, { useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useFormik, FormikConfig } from 'formik';
import { TextField } from '@mui/material';
import * as Yup from 'yup';
import AuthContext from '../../features/auth/auth-context';
import AuthForm from './auth-form';

type LoginValues = {
  username: string,
  password: string,
};

type LoginFormikConfig = FormikConfig<LoginValues>;

const initialValues: LoginValues = {
  username: '',
  password: '',
};

const validationSchema = Yup.object({
  username: Yup.string()
    .required('Username is required')
    .min(6, 'Min 6 symbols')
    .max(32, 'Max 32 symbols'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Min 6 symbols')
    .max(32, 'Max 32 symbols'),
});

const AdminLoginPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { login, loading } = useContext(AuthContext);

  const handleLogin: LoginFormikConfig['onSubmit'] = ({ username, password }) => {
    const nextPage = searchParams.get('next') ?? '/admin/dashboard';
    login({ username, password }, nextPage);
  };

  const {
    values,
    touched,
    errors,
    dirty,
    isValid,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik<LoginValues>({
    initialValues,
    onSubmit: handleLogin,
    validationSchema,
  });

  return (
    <AuthForm
      formTitle="Login"
      submitText="Prisijungti"
      btnActive={dirty && isValid}
      onSubmit={handleSubmit}
    >
      <TextField
        name="username"
        type="username"
        label="Username"
        fullWidth
        value={values.username}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.username && Boolean(errors.username)}
        helperText={touched.username && errors.username}
        disabled={loading}
      />
      <TextField
        name="password"
        type="password"
        label="Password"
        fullWidth
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.password && Boolean(errors.password)}
        helperText={touched.password && errors.password}
        disabled={loading}
      />
    </AuthForm>
  );
};

export default AdminLoginPage;
