"use client";
import Image from 'next/image';

const PartnerLogos = [
  { name: 'Richard Mille', src: '/logo_nhh.png'}, // Corrected path
  { name: 'Sky', src: '/logo_nhh.png'}, // Corrected path
  { name: 'Google', src: '/logo_nhh.png'}, // Corrected path
  // ... other partners
];

const Partners = () => {
  return (
    <section className="py-12 text-gray-800">
      <div className="container mx-auto">
        <h2 className="title text-3xl font-semibold text-center mb-8">
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
                objectFit="contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
