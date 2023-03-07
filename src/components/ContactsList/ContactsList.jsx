
import { Contact } from '../Contact/Contact';
import { ListContacts } from './ContactsList.styled';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selector';

export const ContactsList = () => {
  const contacts = useSelector(selectFilteredContacts);
  return (
    <ListContacts>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact}/>
      ))}
    </ListContacts>
  );
};

