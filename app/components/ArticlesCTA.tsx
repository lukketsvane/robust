"use client"; 
import { motion } from 'framer-motion';

const ArticlesCTA: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-8 md:col-start-3">
            <h2 className="text-3xl font-semibold mb-4 title">Utforsk Våre Artikler</h2>
            <p className="text-gray-600">
              Dykk ned i våre innsiktsfulle artikler for å lære mer om bærekraft og teknologi.
            </p>
            {/* No link, just styled text with underline */}
            <style jsx>{`
              .text-indigo-600 {
                color: inherit; /* Inherit the parent's text color */
                text-decoration: underline; /* Add underline on hover */
                cursor: pointer; /* Show pointer cursor on hover */
              }
            `}</style>
            <p className="text-indigo-600 hover:text-indigo-700 mt-4">
              Utforsk alle artikler
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesCTA;
