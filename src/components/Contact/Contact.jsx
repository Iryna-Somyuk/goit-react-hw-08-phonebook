import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
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
    <li className=' inline-flex flex-row gap-5 items-center justify-between'>
      <span className='text-sm font-medium text-black'>
        {name}: {number}
      </span>
      <div>
      <button className='p-1 justify-center items-center w-16 h-7 border-none rounded text-black text-sm bg-fuchsia-500 hover:bg-fuchsia-400' type="button" name="edit" onClick={clickBtnHandler}>Edit</button>
      <button className='p-1 ml-2 justify-center items-center w-16 h-7 border-none rounded text-black text-sm bg-fuchsia-500 hover:bg-fuchsia-400' onClick={handleDeleteContact}>Delete</button>
      </div>
    </li>
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
