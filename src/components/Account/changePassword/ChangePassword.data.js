import * as Yup from 'yup';

export function initialValues() {
  return {
    password: '',
    newPassword: '',
    confirmNewPassword: '',
  };
}

export function validationSchema() {
  return Yup.object({
    password: Yup.string().required('Field is required'),
    newPassword: Yup.string().required('Field is required'),
    confirmNewPassword: Yup.string()
      .required('Field is required')
      .oneOf([Yup.ref('newPassword')], 'New passwords must be the same'),
  });
}
