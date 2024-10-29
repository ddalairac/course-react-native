import { useForm } from 'react-hook-form';
import './FormPage.css';

type tFormInputs = {
  name: string;
  email: string;
  password: string;
};

export const FormPage = () => {
  const { register, handleSubmit } = useForm<tFormInputs>({
    defaultValues: {
      name: 'Diego',
      email: 'ddalairac@gmail.com',
      password: '1234',
    },
  });

  const onSubmit = (form: tFormInputs) => {
    console.log({ form });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Form</h3>
      <fieldset>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          placeholder='My Full Name'
          {...register('name', { required: true })}
        />
      </fieldset>
      <fieldset>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          placeholder='myuser@domain.com'
          {...register('email', { required: true })}
        />
      </fieldset>
      <fieldset>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          placeholder='123456'
          {...register('password', { required: true })}
        />
      </fieldset>
      <button type='submit'>Submit</button>
    </form>
  );
};
