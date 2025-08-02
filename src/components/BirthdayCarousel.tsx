// BirthdayCarousel.tsx
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';

interface BirthdayMessage {
  name: string;
  message: string;
  emoji: string;
}

interface BirthdayCarouselProps {
  onBack: () => void;
}

const BirthdayCarousel: React.FC<BirthdayCarouselProps> = ({ onBack }) => {
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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [openedCards, setOpenedCards] = useState<Set<number>>(new Set());

  const handleCardClick = (index: number) => {
    setOpenedCards((prev) => new Set(prev).add(index));
  };

  const nextCard = () => {
    setOpenedCards(new Set());
    setCurrentIndex((prev) => (prev + 1) % birthdayMessages.length);
  };

  const prevCard = () => {
    setOpenedCards(new Set());
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

        <div className="text-lg text-muted-foreground">
          {currentIndex + 1} / {birthdayMessages.length}
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={prevCard}
            className="rounded-full w-12 h-12"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <div
            className="w-[90vw] max-w-[420px] h-[600px] bg-white rounded-2xl shadow-celebration flex flex-col justify-center items-center text-center p-6 cursor-pointer transition-opacity duration-500"
            onClick={() => handleCardClick(currentIndex)}
          >
            {!openedCards.has(currentIndex) ? (
              <div className="transition-opacity duration-500 opacity-100">
                <div className="text-6xl mb-4 animate-bounce-gentle">
                  {birthdayMessages[currentIndex].emoji}
                </div>
                <h3 className="text-3xl font-bold text-accent-foreground">
                  {birthdayMessages[currentIndex].name}
                </h3>
              </div>
            ) : (
              <div className="transition-opacity duration-500 opacity-100">
                <div className="text-4xl mb-4 animate-celebration">
                  🎂
                </div>
                <h3 className="text-2xl font-bold text-primary mb-6">
                  From {birthdayMessages[currentIndex].name}
                </h3>
                <p className="text-lg text-card-foreground leading-relaxed">
                  {birthdayMessages[currentIndex].message}
                </p>
              </div>
            )}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={nextCard}
            className="rounded-full w-12 h-12"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      </div>

      <div className="text-center mt-4">
        <p className="text-muted-foreground text-lg">
          Click to reveal each birthday message! 🎉
        </p>
        <div className="flex justify-center gap-2 mt-2">
          {birthdayMessages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setOpenedCards(new Set());
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-primary scale-125' : 'bg-white'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BirthdayCarousel;
