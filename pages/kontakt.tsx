"use client";
import { motion } from 'framer-motion';
import Head from 'next/head';
import { useEffect, useState } from 'react';

const Kontakt = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#F2C744";
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [fylke, setFylke] = useState('');
  const [postkode, setPostkode] = useState('');
  const [by, setBy] = useState('');
  const [language, setLanguage] = useState('Norwegian');
  const [countryCode, setCountryCode] = useState('+47'); // Default country code
  const [mobileNumber, setMobileNumber] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    const enteredEmail = e.target.value;
    setEmail(enteredEmail);
    setIsEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enteredEmail));
  };

  const isFormValid =
    firstName &&
    lastName &&
    isEmailValid &&
    address &&
    fylke &&
    postkode &&
    by &&
    language;

  return (
    <>
      <Head>
        <title>Bli Medlem - Robust</title>
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex flex-col items-left justify-center mx-16 w-full min-h-screen"
        style={{ backgroundColor: '#F2C744' }}
      >
        <div className="w-full max-w-4xl px-4 py-16 text-left">
          <h1 className="title text-5xl font-bold mb-8">Bli medlem av Robust</h1>
          <p className="text-gray-600 mb-8">
            Bli en del av vårt samfunn og bidra til en bærekraftig fremtid.
          </p>
          <form className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Fornavn"
                className={`w-full sm:w-1/2 p-4 border-b-2 border-black bg-transparent text-black ${
                  firstName ? 'bg-white' : ''
                }`}
                value={firstName}
                onChange={handleFirstNameChange}
              />
              <input
                type="text"
                placeholder="Etternavn"
                className={`w-full sm:w-1/2 p-4 border-b-2 border-black bg-transparent text-black ${
                  lastName ? 'bg-white' : ''
                }`}
                value={lastName}
                onChange={handleLastNameChange}
              />
            </div>
            <input
              type="email"
              placeholder="E-post"
              className={`w-full p-4 border-b-2 border-black bg-transparent text-black ${
                email ? (isEmailValid ? 'bg-white' : '') : ''
              }`}
              value={email}
              onChange={handleEmailChange}
            />
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Adresse"
                className={`w-full sm:w-3/4 p-4 border-b-2 border-black bg-transparent text-black ${
                  address ? 'bg-white' : ''
                }`}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <input
                type="text"
                placeholder="By"
                className={`w-full sm:w-1/4 p-4 border-b-2 border-black bg-transparent text-black ${
                  by ? 'bg-white' : ''
                }`}
                value={by}
                onChange={(e) => setBy(e.target.value)}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Fylke"
                className={`w-full sm:w-1/4 p-4 border-b-2 border-black bg-transparent text-black ${
                  fylke ? 'bg-white' : ''
                }`}
                value={fylke}
                onChange={(e) => setFylke(e.target.value)}
              />
              <div className="flex items-center space-x-2 w-3/4">
                <select
                  className="w-1/4 p-4 border-b-2 border-black bg-transparent text-black"
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                >
                  <option value="+47">+47 (Norway)</option>
                  {/* Add more country codes as needed */}
                </select>
                <input
                  type="tel"
                  placeholder="Mobilnummer"
                  className={`w-3/4 p-4 border-b-2 border-black bg-transparent text-black ${
                    mobileNumber ? 'bg-white' : ''
                  }`}
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-8">
              <button
                className={`text-black text-lg font-semibold rounded-full border-2 border-black px-6 py-3 ${
                  isFormValid ? 'bg-white' : ''
                }`}
                style={{ backgroundColor: '#F2C744', color: 'black' }}
                disabled={!isFormValid}
              >
                Bli medlem
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </>
  );
};

export default Kontakt;
