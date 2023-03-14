import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ContactItem, ContactInfo, DeleteBtn } from './Contact.styled';
import { deleteContact } from 'redux/operations';
import { Modal } from 'components/Modal/Modal';
import { EditForm } from 'components/EditingContacts/EditingContacts';

export const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  const [contactId, setContactId] = useState('');
  const [btnName, setBtnName] = useState('');

  const handleDeleteContact = () => dispatch(deleteContact(id));

  useEffect(() => {
    if (contactId) {
        document.body.style.overflow = 'hidden';
    }
}, [contactId]);

const closeModal = () => {
    setContactId('');
    setBtnName('');
    document.body.style.overflow = 'unset';
};
const clickBtnHandler = ({ currentTarget: { name } }) => {
  setBtnName(name);
  setContactId(id);
};

  return (
    <>
    <ContactItem>
      <ContactInfo>
        {name}: {number}
      </ContactInfo>
      <DeleteBtn type="button" name="edit" onClick={clickBtnHandler}>Edit</DeleteBtn>
      <DeleteBtn onClick={handleDeleteContact}>Delete</DeleteBtn>
    </ContactItem>
    {contactId && btnName === 'edit' && (
      <Modal onClose={closeModal}>
          <EditForm id={contactId} onClose={closeModal} />
      </Modal>
  )}
 </> );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
