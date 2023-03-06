import React, { useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';

const WalletModal = (props) => {
  const [show, setShow] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [error, setError] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (walletAddress === '') {
      setError('Please enter a valid wallet address.');
    } else {
      props.onWalletConnect(walletAddress);
      setShow(false);
      setWalletAddress('');
    }
  };

  const handleInputChange = (event) => {
    setWalletAddress(event.target.value);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Connect Wallet
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Connect Your Wallet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formWalletAddress">
              <Form.Label>Wallet Address</Form.Label>
              <Form.Control type="text" placeholder="Enter wallet address" value={walletAddress} onChange={handleInputChange} />
              {error && <Alert variant="danger">{error}</Alert>}
            </Form.Group>
            <Button variant="primary" type="submit">
              Connect
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default WalletModal;
