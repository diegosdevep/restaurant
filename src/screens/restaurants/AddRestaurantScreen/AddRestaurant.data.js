import * as Yup from 'yup';

export function initialValues() {
  return {
    name: '',
    address: '',
    phone: '',
    email: '',
    description: '',
    location: null,
    images: [],
  };
}

export function validationSchema() {
  return Yup.object({
    name: Yup.string().required('Field is required'),
    address: Yup.string().required('Field is required'),
    phone: Yup.string().required('Field is required'),
    email: Yup.string()
      .email('It is not a valid email')
      .required('Field is required'),
    description: Yup.string().required('Field is required'),
    location: Yup.object().required('Field is required'),
    images: Yup.array()
      .min(1, 'Field is required')
      .required('Image is required'),
  });
}
