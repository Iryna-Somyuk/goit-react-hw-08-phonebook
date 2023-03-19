import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

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
        <Form className="flex flex-col">
          <label className="flex flex-col gap-1 mb-2 font-medium text-lg">
            Name
            <Field
              className="p-1 text-lg border-2 border-solid w-72 rounded"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <ErrorMessage
              className="text-rose-700 text-xs font-normal"
              name="name"
              component="span"
            />
          </label>
          <label className="flex flex-col gap-1 mb-2 font-medium text-lg">
            Email
            <Field
              className="p-1 text-lg border-2 border-solid w-72 rounded"
              type="email"
              name="email"
              pattern="/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/"
              title="Please enter a valid email"
              required
            />
            <ErrorMessage
              className="text-rose-700 text-xs font-normal"
              name="email"
              component="span"
            />
          </label>
          <label className="flex flex-col gap-1 mb-4 font-medium text-lg">
            Password
            <Field
              className="p-1 text-lg border-2 border-solid w-72 rounded"
              type="password"
              name="password"
              title="Please enter a valid password"
              required
            />
            <ErrorMessage
              className="text-rose-700 text-xs font-normal"
              name="password"
              component="span"
            />
          </label>
          <button
            className="text-gray-dark w-20 h-8 px-2 py-1 text-sm border-2 border-gray-dark rounded-lg hover:text-orange hover:border-orange curcor-pointer"
            type="submit"
          >
            Register
          </button>
        </Form>
      </Formik>
    </>
  );
};
