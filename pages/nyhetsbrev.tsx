import { motion } from 'framer-motion';
const Nyhetsbrev = () => {
  const yellowColor = "#F2C744"; 
  const hoverColor = "#dba63c"; 

  return (
    <>
      <motion.div
        className="flex flex-col items-left justify-center mx-16 w-full min-h-screen"
        style={{ backgroundColor: yellowColor }}
        initial={{ backgroundColor: yellowColor }}
        animate={{ backgroundColor: yellowColor }}
        transition={{ duration: 0.35 }}
      >
        <div className="w-full max-w-4xl px-4 py-16 text-left">
          <h1 className="title text-6xl font-bold mb-8">Varmt stoff fra Robust rett til innboksen din</h1>
          <form className="space-y-8">
            <div className="flex text-black flex-col sm:flex-row justify-between gap-4 mb-8">
              <input type="text" placeholder="FORNAVN" className="w-full sm:w-1/3 p-4 border-b-2 border-black bg-transparent text-black" />
              <input type="text" placeholder="ETTERNAVN" className="w-full sm:w-1/3 p-4 border-b-2 border-black bg-transparent text-black" />
              <input type="email" placeholder="E-POST" className="w-full sm:w-1/3 p-4 border-b-2 border-black bg-transparent text-black" />
            </div>
            <p className="text-sm mb-8">
              Vi vil bare bruke informasjonen din for å sende nyhetsbrev fra tid til annen, og vil aldri dele med en tredjepart. Du kan melde deg av når som helst. Finn ut mer om vår personvernpolicy.
            </p>
            <button type="submit" className="mx-auto w-48 h-14 text-lg font-semibold rounded-full border-2 border-black" style={{ backgroundColor: yellowColor, color: 'black' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = hoverColor} onMouseOut={(e) => e.currentTarget.style.backgroundColor = yellowColor}>
              MELD MEG PÅ
            </button>
          </form>
        </div>
      </motion.div>
    </>
  );
};

export default Nyhetsbrev;