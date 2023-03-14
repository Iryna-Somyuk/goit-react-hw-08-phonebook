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
import { register } from 'redux/auth/operations';
// import { Form, Label } from 'components/RegisterForm/RegisterForm.styled';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
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
            Name
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <ErrorMes name="name" component="span" />
          </Label>
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
            Password
            <Input
              type="password"
              name="password"
              title="Please enter a valid password"
              required
            />
            <ErrorMes name="password" component="span" />
          </Label>
          <Btn type="submit">Register</Btn>
        </FormContainer>
      </Formik>
    </>
  );
};