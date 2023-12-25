// siste-nytt.tsx
"use client";

import Image from 'next/image';
import Link from 'next/link';

const SisteNytt = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Siste Nytt</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* News Item 1 */}
        <div className="rounded-lg shadow-lg p-4">
          <Image src="/images/news1.jpg" alt="Nyhetsartikkel 1" width={350} height={200} className="rounded-lg" />
          <h2 className="text-2xl font-bold mt-4">Nyhetsartikkel 1: Seminar om Bærekraft</h2>
          <p className="mt-2">
            Oppsummering og høydepunkter fra vårt siste seminar om bærekraftig økonomi og samfunn.
          </p>
          <Link href="/siste-nytt/nyhetsartikkel1"><a className="text-blue-500 hover:text-blue-600 mt-4 inline-block">Les mer</a></Link>
        </div>

        {/* News Item 2 */}
        <div className="rounded-lg shadow-lg p-4">
          <Image src="/images/news2.jpg" alt="Nyhetsartikkel 2" width={350} height={200} className="rounded-lg" />
          <h2 className="text-2xl font-bold mt-4">Nyhetsartikkel 2: Nytt Forskningsprosjekt</h2>
          <p className="mt-2">
            Introduksjon til vårt nye forskningsprosjekt om nedvekst og økonomisk transformasjon.
          </p>
          <Link href="/siste-nytt/nyhetsartikkel2"><a className="text-blue-500 hover:text-blue-600 mt-4 inline-block">Les mer</a></Link>
        </div>

        {/* News Item 3 */}
        <div className="rounded-lg shadow-lg p-4">
          <Image src="/images/news3.jpg" alt="Nyhetsartikkel 3" width={350} height={200} className="rounded-lg" />
          <h2 className="text-2xl font-bold mt-4">Nyhetsartikkel 3: Partnerskap for Bærekraft</h2>
          <p className="mt-2">
            Foreningen Robust inngår et spennende nytt partnerskap for å fremme bærekraftige løsninger.
          </p>
          <Link href="/siste-nytt/nyhetsartikkel3"><a className="text-blue-500 hover:text-blue-600 mt-4 inline-block">Les mer</a></Link>
        </div>

        {/* More news items can be added here */}
      </div>
    </div>
  );
};

export default SisteNytt;
