import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Unlock, RotateCcw } from 'lucide-react';

interface CodeUnlockProps {
  onUnlock: () => void;
}

const CodeUnlock: React.FC<CodeUnlockProps> = ({ onUnlock }) => {
  const { toast } = useToast();

  // Secret code order
  const secretCode = [
  "toan.han",
  "anh.nguyen22",
  // "quan.dang1",
  // "nam.ton",
  // "nhi.nguyen16",
  // "hung.nguyen32",
  // "thao.huynh4",
  // "linh.nguyen35",
  // "quyen.hoang1",
  // "phuong.hoang1",
  // "anh.pham24",
  // "huyen.truong",
  // "khoi.le",
  // "anh.nguyen80"
];

  // Team members
  const teamMembers = ["toan.han", "quan.dang1", "quyen.hoang1", "phuong.hoang1", "thao.huynh4", "khoi.le", "trung.le9", "anh.nguyen80", "anh.nguyen22", "hung.nguyen32", "linh.nguyen35", "nhi.nguyen16", "anh.pham24", "nam.ton", "huyen.truong"]
    ;

  const [selectedOrder, setSelectedOrder] = useState<string[]>([]);
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleChipClick = (name: string) => {
    if (selectedOrder.includes(name)) {
      // Remove from selection
      setSelectedOrder(selectedOrder.filter(member => member !== name));
    } else {
      const newOrder = [...selectedOrder, name];
      setSelectedOrder(newOrder);

      // Check if we have the right number of selections
      if (newOrder.length === secretCode.length) {
        // Check if the order is correct
        const isCorrect = newOrder.every((name, index) => name === secretCode[index]);

        if (isCorrect) {
          setIsUnlocked(true);
          toast({
            title: "🎉 Úm ba la!",
            description: "Tuyệt đỉnh! Anh hẳn là một manager có tâm!",
          });
        } else {
          toast({
            title: "❌ Oops, chưa đúng rồi!",
            description: "Anh có trí nhớ tốt không nhỉ?",
            variant: "destructive",
          });
          setSelectedOrder([]);
        }
      }
    }
  };

  const resetSelection = () => {
    setSelectedOrder([]);
    setIsUnlocked(false);
  };

  const getChipVariant = (name: string) => {
    if (selectedOrder.includes(name)) {
      return "chip-selected";
    }
    return "chip";
  };

  const getSelectionNumber = (name: string) => {
    const index = selectedOrder.indexOf(name);
    return index >= 0 ? index + 1 : null;
  };

  return (
    <div className="min-h-screen bg-gradient-soft flex flex-col items-center justify-center p-6">
      <div className="text-center mb-12">
        {/* <h1 className="text-6xl font-bold mb-4 animate-float bg-gradient-celebration bg-clip-text text-transparent">
          🎂 Birthday Code Challenge 🎂
        </h1> */}
        <p className="text-xl text-muted-foreground mb-8">
          Trí nhớ tốt mở ra điều lành...
        </p>
        {/* <div className="text-lg text-primary font-semibold">
          Hint:... 🤔
        </div> */}
      </div>

      <div className="bg-card rounded-3xl p-8 shadow-celebration max-w-4xl w-full">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
          {teamMembers.map((member) => {
            const selectionNumber = getSelectionNumber(member);
            return (
              <Button
                key={member}
                variant={getChipVariant(member)}
                size="lg"
                onClick={() => handleChipClick(member)}
                className="relative h-16 text-lg font-semibold rounded-2xl"
              >
                {member}
                {selectionNumber && (
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-6 h-6 text-sm flex items-center justify-center animate-bounce-gentle">
                    {selectionNumber}
                  </span>
                )}
              </Button>
            );
          })}
        </div>

        <div className="text-center space-y-4">
          <div className="text-sm text-muted-foreground">
            Selected: {selectedOrder.length} / {secretCode.length}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="outline"
              size="lg"
              onClick={resetSelection}
              className="rounded-2xl"
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              Reset
            </Button>

            <Button
              variant="celebration"
              size="lg"
              onClick={onUnlock}
              disabled={!isUnlocked}
              className="rounded-2xl animate-celebration"
            >
              <Unlock className="w-5 h-5 mr-2" />
              Unlock Birthday Wishes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeUnlock;