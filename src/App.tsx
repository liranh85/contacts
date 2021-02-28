import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import './App.css';
import CustomModal from 'src/components/shared/CustomModal/CustomModal';
import api, { Contact } from 'src/services/api/api';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [contactList, setContactList] = useState<Contact[]>([])

  useEffect(
    () => {
      api.getContacts()
        .then(contacts => setContactList(contacts))
        .catch(error => {
          console.warn('Could not get contacts', error);
        });
    },
    []
  )

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="app">
      {
        contactList.map(({ name, role, isAvailable }, i) => (
          <div className="contact">
            <p>Name: {name}</p>
            <p>Role: {role}</p>
            <p>{isAvailable ? 'Available' : 'Unavailable'}</p>
          </div>
        ))
      }
      <Button color="primary" onClick={handleOpenModal}>Add new contact</Button>
      <CustomModal
        isOpen={isOpen}
        onClose={handleCloseModal}
        title="New Contact"
      >
        <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita tempora delectus adipisci, provident porro maiores error eaque sunt enim. Sint sunt saepe hic unde sit possimus nobis eligendi cupiditate dolores?</div>
      </CustomModal>
    </div>
  );
}

export default App;
