import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type InteractiveBookProps = {
  images: string[]; // Array of image paths representing the pages
};

const InteractiveBook: React.FC<InteractiveBookProps> = ({ images }) => {
  const [pageNumber, setPageNumber] = useState(0);

  const togglePage = () => {
    setPageNumber((prevPageNumber) => (prevPageNumber + 1) % images.length);
  };

  return (
    <div className="flex flex-col md:flex-row-reverse items-center justify-center my-12">
      <div className="w-full md:w-1/2 p-4">
        <h3 className="text-xl sm:text-3xl font-semibold mb-2 title">Robusts Vedtekster</h3>
        <p className="text-gray-600 mb-4">
          Utforsk de offisielle dokumentene som definerer Robusts struktur og retningslinjer.
        </p>
      </div>
      <div className="w-full md:w-1/2">
        <motion.div
          className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer"
          onClick={togglePage}
          whileHover={{ scale: 1.03 }}
          layoutId="interactiveBookPage"
        >
          <Image
            src={images[pageNumber]}
            alt={`Side ${pageNumber + 1}`}
            width={595}
            height={842}
            layout="responsive"
            className="rounded-lg"
          />
          <div className="absolute bottom-0 right-0 p-4">
            <div className="bg-white bg-opacity-75 rounded p-2">
              <p className="text-lg">
                Side {pageNumber + 1} av {images.length}
              </p>
              {/* Corrected download link placement */}
              <a
                href={images[pageNumber]}
                download={`Vedtekter-side-${pageNumber + 1}.png`}
                className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                Last ned PDF
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveBook;