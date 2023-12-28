"use client";

interface SectionProps {
    color: string;
    children: React.ReactNode;
  }
  
  export const Section: React.FC<SectionProps> = ({ color, children }) => (
    <div className={`${color} p-8`}>
      {children}
    </div>
  );
  