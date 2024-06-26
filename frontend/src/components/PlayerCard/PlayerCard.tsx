// components/PlayerCard.tsx

import React from "react";
import Image from "next/image";

interface PlayerCardProps {
  name: string;
  imageUrl: string;
  number: string;
  position: {
    top: string;
    left: string;
  };
  role: string;
  rating: number;
}

const getColorClass = (rating: number) => {
  if (rating < 3.0) {
    return "bg-red-500";
  } else if (rating < 5.0) {
    return "bg-orange-500";
  } else if (rating < 8.0) {
    return "bg-green-500";
  } else {
    return "bg-blue-500";
  }
};

const PlayerCard: React.FC<PlayerCardProps> = ({ name, imageUrl, number, position, role, rating }) => {
  return (
    <div className="relative border border-black my-4">
      <div className={`absolute rounded-lg p-1 ${getColorClass(rating)}`} style={{ top: "-14%", left: "85%" }}>
        {rating}
      </div>
      <div className="text-black text-sm">No. {number}</div>
      <div className="relative">
        <Image src={imageUrl} alt={name} width={96} height={96} />
        <div className="bg-black text-white absolute" style={{ top: "74%", left: "80%" }}>
          {role}
        </div>
      </div>
      <div className="flex justify-center bg-black text-white">
        <span>{name}</span>
      </div>
    </div>
  );
};

export default PlayerCard;
