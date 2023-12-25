// InteractiveBook.tsx
"use client";
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { motion } from 'framer-motion';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const InteractiveBook = ({ file }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(0);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const nextPage = () => {
    setPageNumber((prevPageNumber) => prevPageNumber === numPages ? 1 : prevPageNumber + 1);
  };

  return (
    <div className="flex flex-row">
      <div className="w-1/2 p-4">
        <p className="text-lg">
          Side {pageNumber} av {numPages}
        </p>
        <a
          href={file}
          download
          className="text-blue-600 hover:text-blue-800 transition-colors duration-300 rounded-lg"
        >
          Last ned PDF
        </a>
      </div>
      <motion.div
        className="w-1/2 relative rounded-lg overflow-hidden"
        onClick={nextPage}
        whileHover={{ scale: 1.03 }}
        style={{
          paddingBottom: '141.4%', // 1:1.41 aspect ratio (A4 paper)
        }}
      >
        <Document
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page
            pageNumber={pageNumber}
            width={595}
            height={842}
          />
        </Document>
      </motion.div>
    </div>
  );
};

export default InteractiveBook;
