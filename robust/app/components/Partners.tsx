"use client"; // Sikre klientbasert rendering for hooks og framer-motion

import Image from 'next/image';

const PartnerLogos = [
  { name: 'Richard Mille', src: '/logos/richard-mille.png' }, // Erstatt med faktiske filbaner for logoer
  { name: 'Sky', src: '/logos/sky.png' },
  { name: 'Google', src: '/logos/google.png' },
  // ... Legg til alle andre partnere her
];

const Partners = () => {
  return (
    <section className="py-12 text-gray-800">
      <div className="container mx-auto ">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Vi samarbeider med smarte bedrifter som setter brukeropplevelsen i sentrum for det de gjør.
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {PartnerLogos.map((partner) => (
            <div key={partner.name} className="partner-logo">
              <Image
                src={partner.src}
                alt={`${partner.name} Logo`}
                width={100}
                height={60}
                objectFit="contain" // Juster ved behov for å passe logoen riktig
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
