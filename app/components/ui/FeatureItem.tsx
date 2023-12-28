import React from 'react';

// Define the props type
interface FeatureItemProps {
    icon: string; // URL or path to the icon image
    title: string; // Title text
}

// FeatureItem component
export const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title }) => (
    <div className="flex items-center space-x-2">
      <img src={icon} alt={title} className="w-8 h-8" />
      <span>{title}</span>
    </div>
);

export default FeatureItem;
