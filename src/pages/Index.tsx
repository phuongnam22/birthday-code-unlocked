import React, { useState } from 'react';
import CodeUnlock from '@/components/CodeUnlock';
import BirthdayCarousel from '@/components/BirthdayCarousel';
import birthdayBg from '@/assets/birthday-bg.jpg';

const Index = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleUnlock = () => {
    setIsUnlocked(true);
  };

  const handleBack = () => {
    setIsUnlocked(false);
  };

  return (
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: `url(${birthdayBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm">
        {!isUnlocked ? (
          <CodeUnlock onUnlock={handleUnlock} />
        ) : (
          <BirthdayCarousel onBack={handleBack} />
        )}
      </div>
    </div>
  );
};

export default Index;
