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
  password: yup.string().min(6, 'Password should be of minimum 6 characters length').required(),
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
          <Btn type="submit">Register</Btn>
        </FormContainer>
      </Formik>
    </>
    // <Form onSubmit={handleSubmit} autoComplete="off">
    //   <Label>
    //     Username
    //     <input type="text" name="name" />
    //   </Label>
    //   <Label>
    //     Email
    //     <input type="email" name="email" />
    //   </Label>
    //   <Label>
    //     Password
    //     <input type="password" name="password" />
    //   </Label>
    //   <button type="submit">Register</button>
    // </Form>
  );
};