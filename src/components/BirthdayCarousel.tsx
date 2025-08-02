import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';

interface BirthdayMessage {
  name: string;
  message: string;
  emoji: string;
}

interface BirthdayCarouselProps {
  onBack: () => void;
}

const BirthdayCarousel: React.FC<BirthdayCarouselProps> = ({ onBack }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const birthdayMessages: BirthdayMessage[] = [
    {
      name: "Nam",
      message: "Happy Birthday! Your leadership and vision inspire us all. Here's to another year of amazing achievements! 🎉",
      emoji: "🎯"
    },
    {
      name: "Linh",
      message: "Wishing you a wonderful birthday filled with joy and success. Thank you for being such an incredible mentor! 🌟",
      emoji: "💫"
    },
    {
      name: "Phat",
      message: "Happy Birthday to the best manager ever! Your guidance makes every challenge feel conquerable. Enjoy your special day! 🚀",
      emoji: "🎊"
    },
    {
      name: "Alex",
      message: "Many happy returns! Your positive energy lights up the office. Hope your birthday is as amazing as you are! ✨",
      emoji: "🎈"
    },
    {
      name: "Sarah",
      message: "Happy Birthday! Thank you for always believing in us and pushing us to be our best. You're truly appreciated! 🎂",
      emoji: "🌸"
    },
    {
      name: "Mike",
      message: "Wishing you the happiest of birthdays! Your wisdom and support mean everything to our team. Celebrate big! 🎁",
      emoji: "⭐"
    },
    {
      name: "Emma",
      message: "Happy Birthday to our wonderful leader! May this new year bring you endless happiness and success! 🎀",
      emoji: "🌺"
    }
  ];

  const handleCardClick = (index: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % birthdayMessages.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + birthdayMessages.length) % birthdayMessages.length);
  };

  return (
    <div className="min-h-screen bg-gradient-soft flex flex-col p-6">
      <div className="flex items-center justify-between mb-8">
        <Button
          variant="outline"
          size="lg"
          onClick={onBack}
          className="rounded-2xl"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Code
        </Button>
        
        <h1 className="text-4xl font-bold bg-gradient-celebration bg-clip-text text-transparent animate-float">
          🎊 Birthday Wishes 🎊
        </h1>
        
        <div className="text-lg text-muted-foreground">
          {currentIndex + 1} / {birthdayMessages.length}
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-full max-w-6xl">
          <div className="flex items-center justify-center gap-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevCard}
              className="rounded-full w-12 h-12 shadow-celebration"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <div className="flex gap-6 overflow-hidden justify-center items-center min-h-[400px]">
              {birthdayMessages.map((msg, index) => {
                const offset = index - currentIndex;
                const isActive = index === currentIndex;
                const isFlipped = flippedCards.has(index);
                
                return (
                  <Card
                    key={index}
                    className={`
                      relative transition-all duration-500 cursor-pointer
                      ${isActive ? 'scale-100 z-10' : 'scale-75 opacity-50'}
                      ${Math.abs(offset) > 1 ? 'hidden' : 'block'}
                      ${isFlipped ? 'animate-flip' : ''}
                      w-80 h-96 shadow-celebration hover:shadow-glow
                    `}
                    style={{
                      transform: `translateX(${offset * 100}px) ${isActive ? 'scale(1)' : 'scale(0.75)'}`,
                    }}
                    onClick={() => handleCardClick(index)}
                  >
                    <CardContent className="p-0 h-full relative overflow-hidden rounded-lg">
                      {!isFlipped ? (
                        // Front side
                        <div className="h-full bg-gradient-birthday flex flex-col items-center justify-center p-8 text-center">
                          <div className="text-6xl mb-6 animate-bounce-gentle">
                            {msg.emoji}
                          </div>
                          <h3 className="text-3xl font-bold text-accent-foreground mb-4">
                            {msg.name}
                          </h3>
                          <p className="text-lg text-accent-foreground/80 font-medium">
                            Click to reveal birthday message! 🎁
                          </p>
                        </div>
                      ) : (
                        // Back side with message
                        <div className="h-full bg-white flex flex-col justify-center p-8 text-center">
                          <div className="text-4xl mb-4 animate-celebration">
                            🎂
                          </div>
                          <h3 className="text-2xl font-bold text-primary mb-6">
                            From {msg.name}
                          </h3>
                          <p className="text-lg text-foreground leading-relaxed">
                            {msg.message}
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextCard}
              className="rounded-full w-12 h-12 shadow-celebration"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <p className="text-muted-foreground text-lg">
          Click on any card to reveal the birthday message! 🎉
        </p>
        <div className="flex justify-center gap-2 mt-4">
          {birthdayMessages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-primary scale-125' : 'bg-muted'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BirthdayCarousel;