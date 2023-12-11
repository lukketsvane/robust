"use client";
import React from 'react';

const teamMembers = [
    {
        name: "Hege Aalby",
        position: "Co-founder & Managing Director",
        imageUrl: "https://unsplash.com/photos/oh0DITWoHi4/download?force=true&w=640"
    },
    {
        name: "Matt Rice",
        position: "Co-founder & Creative Director",
        imageUrl: "https://unsplash.com/photos/3TLl_97HNJo/download?force=true&w=640"
    },
    {
        name: "Bridget Dawodu",
        position: "Product Manager",
        imageUrl: "https://unsplash.com/photos/0E_vhMVqL9g/download?force=true&w=640"
    },
    {
        name: "Najilba Noh",
        position: "Junior UX Designer",
        imageUrl: "https://unsplash.com/photos/GXzHGgzraHc/download?force=true&w=640"
    }
];

const TeamSection = () => {
    return (
        <section className="team-section py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl mb-6 font-bold font-heading team-heading">Meet our team</h2>
                <div className="flex flex-wrap justify-start -mx-2 mb-4">
                    {teamMembers.map(member => (
                        <div key={member.name} className="w-full sm:w-1/2 md:w-1/4 px-2 mb-4">
                            <div className="team-member p-2">
                                <img className="w-full h-auto mx-auto mb-4" src={member.imageUrl} alt={member.name} />
                                <h3 className="text-lg font-bold team-text">{member.name}</h3>
                                <p className="team-text">{member.position}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
