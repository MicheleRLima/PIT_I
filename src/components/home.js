import React, { useState } from 'react';

import './home.css';

function HomePage() {
  const [email, setEmail] = useState('');
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const validadeEmail = () => {
    const regex = /^[^-_./][a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return regex.test(email);
  };

  const submitHandle = (event) => {
    event.preventDefault();

    const emailValidation = validadeEmail();

    setIsEmailInvalid(!emailValidation);
    console.log(email, 'valido? ', emailValidation);

    if (emailValidation) {
      setEmail('');
    }
  };

  return (
    <main className='home'>
      <form className='home-form' onSubmit={submitHandle}>
        <div>
          <label htmlFor='newsletter'>Inscreva-se em nossa Newsletter</label>
          <input
            type='email'
            id='newsleter'
            name='newsletter'
            placeholder='seu-email@mail.com'
            value={email}
            onChange={emailHandler}
          />
        </div>
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
      {isEmailInvalid ? <p style={{ color: 'red' }}>E-mail inválido!</p> : ''}
    </main>
  );
}

export default HomePage;
