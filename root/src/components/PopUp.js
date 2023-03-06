import React, { useState } from 'react';
import PropTypes from 'prop-types';

const PopUp = ({ showModal, setShowModal, result, setGuesses, setScore }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const guess = {
      name,
      email,
      phone,
      result,
    };
    setGuesses((prevGuesses) => [guess, ...prevGuesses]);
    setScore((prevScore) => {
      if (result === 'win') {
        return prevScore + 1;
      }
      return prevScore;
    });
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

PopUp.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  result: PropTypes.string.isRequired,
  setGuesses: PropTypes.func.isRequired,
  setScore: PropTypes.func.isRequired,
};

export default PopUp;
