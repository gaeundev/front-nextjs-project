import { useForm, UseFormReturn, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

type FormProps<TFormValues> = {
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  schema: any;
};

const Form = <TFormValues extends Record<string, any> = Record<string, any>>({
  onSubmit,
  children,
  schema,
}: FormProps<TFormValues>) => {
  const methods = useForm<TFormValues>({ resolver: yupResolver(schema) });
  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>{children(methods)}</form>
  );
};

export default Form;
