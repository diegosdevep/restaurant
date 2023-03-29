import * as Yup from 'yup';

export function initialValues() {
  return {
    title: '',
    description: '',
    rating: 3,
  };
}

export function validationSchema() {
  return Yup.object({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    rating: Yup.number().required('Rating is required'),
  });
}
