import React from 'react';

interface FeatureListProps {
  children: React.ReactNode;
}

export const FeatureList: React.FC<FeatureListProps> = ({ children }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-8">
    {children}
  </div>
);
