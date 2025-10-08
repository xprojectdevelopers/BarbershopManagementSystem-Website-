import { Star } from "phosphor-react";

const TestimonialCard = ({ name, position, content }) => {
  return (
    <div className="break-inside-avoid border-1 border-black p-6 bg-white inline-block w-full">
      <div className="flex mb-4 text-black">
        {Array(5).fill().map((_, i) => (
          <Star key={i} weight="fill" className="w-5 md:w-6 h-6" />
        ))}
      </div>
      <p className="mb-4 text-sm md:text-base tracking-[0.4px] leading-[24px]" style={{fontFamily: "satoshi-medium"}}>{content}</p>
      <p className="text-sm md:text-base tracking-[0.4px]" style={{fontFamily: "satoshi-bold"}}>{name}</p>
      <p className="text-sm md:text-base tracking-[0.4px]" style={{fontFamily: "satoshi-medium"}}>{position}</p>
    </div>
  );
};

export default TestimonialCard;
