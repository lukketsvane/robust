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
  const [country, setCountry] = useState('Norway');
  const [county, setCounty] = useState('');
  const [address, setAddress] = useState('');
  const [countryCode, setCountryCode] = useState('+47'); // Default country code
  const [mobileNumber, setMobileNumber] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

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
    country &&
    county &&
    address &&
    isTermsAccepted;

  return (
    <>
      <Head>
        <title>Bli Medlem - Robust</title>
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex flex-col items-center justify-center mx-16 w-full min-h-screen"
        style={{ backgroundColor: '#F2C744' }}
      >
        <div className="w-full max-w-3xl px-4 py-8 text-left">
          <h1 className="text-4xl font-bold mb-4">Bli medlem av Robust</h1>
          <p className="text-gray-600 mb-4">
            Bli en del av vårt samfunn og bidra til en bærekraftig fremtid.
          </p>
          <form className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Fornavn"
                className={`w-full sm:w-1/2 p-3 border-b-2 border-black bg-transparent text-black ${
                  firstName ? 'bg-white' : ''
                }`}
                value={firstName}
                onChange={handleFirstNameChange}
              />
              <input
                type="text"
                placeholder="Etternavn"
                className={`w-full sm:w-1/2 p-3 border-b-2 border-black bg-transparent text-black ${
                  lastName ? 'bg-white' : ''
                }`}
                value={lastName}
                onChange={handleLastNameChange}
              />
            </div>
            <input
              type="email"
              placeholder="E-post"
              className={`w-full p-3 border-b-2 border-black bg-transparent text-black ${
                email ? (isEmailValid ? 'bg-white' : '') : ''
              }`}
              value={email}
              onChange={handleEmailChange}
            />
            <div className="relative">
              <label htmlFor="country" className="text-black">
                Land
              </label>
              <input
                type="text"
                id="country"
                placeholder="Land"
                className={`w-full p-3 border-b-2 border-black bg-transparent text-black ${
                  country ? 'bg-white' : ''
                }`}
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <div className="relative">
              <label htmlFor="county" className="text-black">
                Fylke
              </label>
              <input
                type="text"
                id="county"
                placeholder="Fylke"
                className={`w-full p-3 border-b-2 border-black bg-transparent text-black ${
                  county ? 'bg-white' : ''
                }`}
                value={county}
                onChange={(e) => setCounty(e.target.value)}
              />
            </div>
            <div className="relative">
              <label htmlFor="address" className="text-black">
                Adresse
              </label>
              <input
                type="text"
                id="address"
                placeholder="Adresse"
                className={`w-full p-3 border-b-2 border-black bg-transparent text-black ${
                  address ? 'bg-white' : ''
                }`}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-2">
              <select
                className="w-1/4 p-3 border-b-2 border-black bg-transparent text-black"
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
              >
                <option value="+47">+47 (Norway)</option>
                {/* Add more country codes as needed */}
              </select>
              <input
                type="tel"
                placeholder="Mobilnummer"
                className={`w-3/4 p-3 border-b-2 border-black bg-transparent text-black ${
                  mobileNumber ? 'bg-white' : ''
                }`}
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="terms"
                className="text-black"
                checked={isTermsAccepted}
                onChange={() => setIsTermsAccepted(!isTermsAccepted)}
              />
              <label htmlFor="terms" className="text-gray-600">
                Jeg godtar vilkår og betingelser
              </label>
            </div>
            <button
              type="submit"
              className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-lg font-semibold rounded-md text-white ${
                isFormValid
                  ? 'bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  : ''
              }`}
              disabled={!isFormValid}
            >
              Bli medlem
            </button>
          </form>
        </div>
      </motion.div>
    </>
  );
};

export default Kontakt;
