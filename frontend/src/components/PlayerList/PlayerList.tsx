// components/PlayerList.tsx

import React from "react";
import Image from "next/image";

interface PlayerListProps {
  players2: {
    name: string;
    imageUrl: string;
    number: string;
    position: {
      top: string;
      left: string;
    };
    role: string;
    rating: number;
  }[];
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

const PlayerList: React.FC<PlayerListProps> = ({ players2 }) => {
  return (
    <div className="flex flex-col">
      {players2.map((player, index) => (
        <div key={index}>
          <div key={index} className=" relative border border-black my-4">
            <div className={`absolute rounded-lg p-1  ${getColorClass(player.rating)}`} style={{ top: "-14%", left: "85%" }}>
              {player.rating}
            </div>
            <div className="text-black text-sm">No. {player.number}</div>
            <div className="relative">
              <Image src={player.imageUrl} alt={player.name} width={96} height={96} />
              <div className="bg-black text-white absolute" style={{ top: "74%", left: "80%" }}>
                {player.role}
              </div>
            </div>
            <div className="flex justify-center bg-black text-white">
              <span>{player.name}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlayerList;
