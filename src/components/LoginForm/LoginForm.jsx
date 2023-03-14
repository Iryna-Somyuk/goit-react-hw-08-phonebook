import { Formik } from 'formik';
import * as yup from 'yup';
import {
  FormContainer,
  Label,
  Input,
  ErrorMes,
  Btn,
} from '../PhonebookForm/PhonebookForm.styled';

import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().min(6, 'Password should be of minimum 6 characters length').required(),
});

const initialValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <FormContainer>
          <Label>
            Email
            <Input
              type="email"
              name="email"
              pattern="/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/"
              title="Please enter a valid email"
              required
            />
            <ErrorMes name="email" component="span" />
          </Label>
          <Label>
            Password{' '}
            <Input
              type="password"
              name="password"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Password must include at least one capital letter and one digit"
              required
            />
            <ErrorMes name="password" component="span" />
          </Label>
          <Btn type="submit">Log In</Btn>
        </FormContainer>
      </Formik>
    </>
  );
};
