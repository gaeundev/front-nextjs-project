import * as yup from 'yup';

export type formType = {
  id: string;
  passWd: string;
};

export const formSchema = yup.object().shape({
  id: yup.string().required(''),
  passWd: yup.string().required(''),
});
