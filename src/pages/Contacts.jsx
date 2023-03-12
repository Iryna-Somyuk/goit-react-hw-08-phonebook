import { Helmet } from 'react-helmet';
import { PhonebookForm } from '../components/PhonebookForm/PhonebookForm';
import { ContactsList } from '../components/ContactsList/ContactsList';
import { Filter } from '../components/Filter/Filter';
import { Section } from '../components/SectionTitle/SectionTitle';
import { Сontainer } from '../components/App.styled';
import { fetchContacts } from 'redux/operations';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectIsLoading, selectError } from 'redux/selector';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (<>
    <Helmet>
    <title>Your contacts</title>
  </Helmet>
    <Сontainer>
      <Section title="Phonebook">
        <PhonebookForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        {isLoading && !error && <b>Request in progress...</b>}
        {!isLoading && <ContactsList />}
      </Section>
    </Сontainer>
    </>
  );
};
export default Contacts;