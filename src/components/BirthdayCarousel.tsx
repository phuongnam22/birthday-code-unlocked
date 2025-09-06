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
      "name": "Quan.dang1",
      "message": "Chúc anh Toàn tuổi mới đạt được nhiều cột mốc mới trong cuộc sống. Hy vọng anh luôn giữ sức khoẻ để biến những mơ ước, hoài bão của anh thành sự thật và be more relaxed with things that don't share your perspective ạ.",
      "emoji": "🎉"
    },
    {
      "name": "Quyen.hoang1",
      "message": "Chúc anh Toàn tuổi mới mọi điều phơi phới, tràn đầy hứng khởi. Tình duyên ập tới, bớt chơi vơi. Đêm về thảnh thơi, công danh sớm rạng ngời.\n\nLỡ làm bài thơ hơi khó, em xin chúc thêm bằng văn xuôi. Chúc anh Toàn có 1 năm 30 tuổi đáng nhớ, có sức khoẻ thật tốt và 1 tinh thần vững mạnh để chèo lái và bảo vệ team mình vượt qua cuồng phong bão táp tại MoMo.\nTuy nhiều lúc anh Toàn hơi nghiêm túc, nhưng em chúc anh dù có những khoảnh khắc như thế vẫn khiến mn cười khà khà, và ghi lòng tạc dạ lời dặn của anh. Nói chung là chúc anh tất cả. 🎉✨",
      "emoji": "🎉"
    },
    {
      "name": "Huyen.truong",
      "message": "em chào anh Toànn,\nEm là Khánh Huyền này, em thật lòng chúc anh tuổi mới nhiều sức khoẻ, cười nhiều hơn, bớt chuyện khiến anh cọc hơn cả ở công ty với đời sống bình thường, chúc anh làm được những thứ anh có dự định muốn làm, nhiều trải nghiệm đáng nhớ và gặp được nhiều người tốt hơn nữa nữa ở tuổi mới, \nEm thấy anh rất là dedicated với team nữa, nên em cũng mong ở tuổi mới thì team mình cũng sẽ làm được những thứ anh kì vọng làm với mn specifically,\nP/S: mong là 6 tháng sắp tới em được làm việc và support anh nhiều hơn, nghe anh chia sẻ nhiều hơn, chửi hay là gì cũng được ạ",
      "emoji": "🎉"
    },
    {
      "name": "Hung.nguyen32",
      "message": "Chúc Toàn tuổi mới nhiều sức khoẻ, tinh thần vững vàng để tiếp tục dẫn dắt anh em, và bùng nổ với nhiều dự án mới.",
      "emoji": "🎉"
    },
    {
      "name": "Anh.nguyen80",
      "message": "Nhân dịp sinh nhật này, em chúc anh Toàn sẽ càng gặt hái nhiều thành công và niềm vui trong tuổi mới. Và  Em càng mong anh sẽ đạt được những điều anh mong muốn thuận buồm xuôi gió trong chặng đường tiếp theo này !!! ",
      "emoji": "🎉"
    },
    {
      "name": "Linh.nguyen35",
      "message": "Happy birthday anh Toàn!\nChúc anh Toàn tuổi mới thật nhiều sức khỏe, thành công. Anh Toàn luôn là nguồn cảm hứng lớn cho tụi em về tinh thần học hỏi, tinh thần dấn thân và sự quyết liệt để tạo ra giá trị.\nChúc anh tuổi mới thật rực rỡ – thêm nhiều cột mốc đáng tự hào và hành trình phát triển không giới hạn ạ!",
      "emoji": "🎉"
    },
    {
      "name": "Anh.pham24",
      "message": "Chúc mừng sinh nhật anh Toàn ạ. Chúc anh có nhiều thời gian để làm những điều mình thật sự quan tâm và cả những điều chưa từng thử bao giờ. Nhớ ngủ đủ giấc nữa anh nhé.",
      "emoji": "🎉"
    },
    {
      "name": "Helen",
      "message": "Chúc mừng sinh nhật anh Toàn 🌸🌸🌸\nChúc anh tuổi mới luôn đủ vững vàng để dẫn dắt, đủ bản lĩnh để chinh phục những cột mốc mới, và đủ nhẹ nhàng để trải nghiệm và không quên những điều làm mình hạnh phúc💗\nMong rằng tuổi mới sẽ mang đến cho anh thêm thật nhiều trải nghiệm hay và những cột mốc đáng nhớ trên hành trình riêng của mình ạaa\n08/05/2025 - Em Nhi",
      "emoji": "🎉"
    },
    {
      "name": "Thao.huynh4",
      "message": "Chúc anh Toàn sinh nhật thật vui vẻ nhé. Chúc anh tuổi mới thật “đỉnh của chóp”: công việc suôn sẻ, tình yêu êm đẹp, sức khoẻ dồi dào",
      "emoji": "🎉"
    },
    {
      "name": "Phuong.hoang1",
      "message": "Happy Birthday Toàn! Chúc Toàn tuổi mới rực rỡ, luôn tràn đầy năng lượng. Chúc Toàn ngày càng thành công trong sự nghiệp, dẫn dắt Survest vững mạnh, chinh phục nhiều thử thách và mục tiêu mới 🎂🎉🎉🎉",
      "emoji": "🎉"
    },
    {
      "name": "Anh.nguyen22",
      "message": "Chúc anh Toàn tuổi mới sẽ chạm được tới ước mơ của mình, dù là 3D printing, AgriTech hay gốm sứ Minh Long nhé =)). Dù bọn em chưa mua được một chiếc máy in 3D xịn, nhưng xin gửi tặng anh một vài món quà nhỏ được sinh ra từ chiếc máy in ấy. Chúc anh sạc điện thoại và đồng hồ thật vui vẻ!",
      "emoji": "🎉"
    },
    {
      "name": "Nam.ton",
      "message": "Chúc mừng sinh nhật anh! Em chúc anh có thật nhiều năng lượng, thật nhiều quyết tâm và có những người đồng hành giá trị để tiếp tục chinh phục những mục tiêu mới. Thêm nữa, chúc anh không còn bị mất ngủ và có nhiều thời gian để khám phá những điều anh yêu thích.\nCảm ơn anh vì sự tận tâm dẫn dắt anh dành cho team từ những ngày đầu tiên ạ <3\n",
      "emoji": "🎉"
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
    <div className="min-h-screen bg-gradient-soft flex flex-col p-6 w-screen">
      <div className="flex items-center justify-between w-full px-4 mx-auto">
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

      <div className="flex-1 flex items-center justify-center w-full px-4 pt-8 mx-auto">
        <div className="flex items-center gap-4 px-4 w-full justify-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevCard}
            className="w-8 h-8 p-0"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </Button>

          <div
            className="w-full max-w-[500px] h-[600px] bg-white rounded-2xl shadow-celebration flex flex-col justify-center items-center text-center p-6 cursor-pointer transition-opacity duration-500 mx-auto"
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
              <div className="transition-opacity duration-500 opacity-100 flex flex-col flex-1 w-full justify-center">
                {/* <div className="text-2xl mb-4 animate-celebration">🎂</div> */}
                <div className="flex flex-col justify-center ">
                <h4 className="flex flex-col justify-center text-xl font-bold text-primary mb-4">
                  Từ {birthdayMessages[currentIndex].name}
                </h4>

                <div className="flex-1 overflow-y-auto px-1">
                  
                    <p className="text-md text-card-foreground leading-relaxed whitespace-pre-line text-justify">
                      {birthdayMessages[currentIndex].message}
                    </p>
                  
                </div>
              </div>
              </div>
            )}
          </div>


          <Button
            variant="ghost"
            size="icon"
            onClick={prevCard}
            className="w-12 h-12 p-0"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </Button>
        </div>
      </div>

      <div className="text-center mt-4">
        
        <div className="flex justify-center gap-2 mt-2">
          {birthdayMessages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setOpenedCards(new Set());
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-primary scale-125' : 'bg-white'
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BirthdayCarousel;
