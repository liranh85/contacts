import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import './App.css';
import CustomModal from 'src/components/shared/CustomModal/CustomModal';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="app">
      <Button color="primary" onClick={handleOpenModal}>Open Modal</Button>
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
