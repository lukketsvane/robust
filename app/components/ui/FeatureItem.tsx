"use client";
interface FeatureItemProps {
    icon: string;
    title: string;
  }
  
  export const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title }) => (
    <div className="flex items-center space-x-2">
      <img src={icon} alt={title} className="w-8 h-8" />
      <span>{title}</span>
    </div>
  );
  