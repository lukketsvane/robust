"use client";
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const teamMembers = [
  {
    name: "Anna Nordahl Carlsen",
    position: "medlem",
    imageUrl: "https://unsplash.com/photos/GXzHGgzraHc/download?force=true&w=640",
    description: "Anna er grunnlegger og administrerende direktør med en lidenskap for design.",
    profileImageUrl: "/profile_pictures/anna_carlsen.png"
  },
  {
    name: "Marie Storli",
    position: "medlem",
    imageUrl: "https://unsplash.com/photos/GXzHGgzraHc/download?force=true&w=640",
    description: "Marie er teamets dynamo, alltid klar med innovative løsninger.",
    profileImageUrl: "/profile_pictures/maria_storli.png"
  },
  {
    name: "Sigrid Loevlie",
    position: "medlem",
    imageUrl: "https://unsplash.com/photos/GXzHGgzraHc/download?force=true&w=640",
    description: "Sigrids analytiske tilnærming sikrer alltid de beste resultater.",
    profileImageUrl: "/profile_pictures/sigrid_leovlie.png"
  },
  {
    name: "Iver Finne",
    position: "medlem",
    imageUrl: "https://unsplash.com/photos/GXzHGgzraHc/download?force=true&w=640",
    description: "Iver er eksperten på brukeropplevelse, med et skarpt øye for detaljer.",
    profileImageUrl: "/profile_pictures/iver_finne.png"
  }
];

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState<string | null>(null);

  const handleMemberClick = (name: string) => {
    setSelectedMember(selectedMember === name ? null : name);
  };

  const infoVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto' }
  };
  
  
  return (
    <section className="min-h-screen team-section bg-transparent overflow-hidden">
      <div className="">
        <h2 className="title text-4xl pl-4 mb-2 font-boldtext-4xl font-bold leading-tight text-left pb-4">Møt Robust teamet</h2>
        <div className="relative" style={{ width: '100vw' }}> 
          <div className="flex overflow-x-auto gap-2 pb-8" style={{ paddingLeft: '0rem' }}>
            {teamMembers.map(member => (
              <motion.div key={member.name} className="team-card flex-shrink-0 pl-4" layout style={{ width: '250px' }}>
                <div className="h-[280px] overflow-hidden mb-2">
                  <Image
                    src={selectedMember === member.name ? member.profileImageUrl : member.imageUrl}
                    alt={member.name}
                    width={400}
                    height={400}
                    layout="responsive"
                  />
                </div>
                <div className="info-container py-0 mt-[-64px]">
                  <h3 className="title text-lg font-bold">{member.name}</h3>
                  <p className="text-sm">{member.position}</p>
                  <motion.div
                    className="plus-icon cursor-pointer text-2xl"
                    whileHover={{ scale: 1.1 }}
                    onClick={() => handleMemberClick(member.name)}
                  >
                    {selectedMember === member.name ? '−' : '+'}
                  </motion.div>
                </div>
                <AnimatePresence>
                  {selectedMember === member.name && (
                    <motion.div
                      variants={infoVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      transition={{ duration: 0.2 }}
                      className="team-info text-sm overflow-auto"
                      style={{ maxHeight: '100px' }}
                    >
                      <p>{member.description}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
  }
  export default TeamSection;
  