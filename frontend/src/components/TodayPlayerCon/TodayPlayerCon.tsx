import React from "react";
import Image from "next/image";

interface PlayerListProps {
  players: {
    name: string;
    imageUrl: string;
    number?: string;
  }[];
}

const TodayPlayerCon: React.FC<PlayerListProps> = ({ players }) => {
  return (
    <div className="flex flex-wrap">
      <div className="grid grid-cols-2 gap-6 ml-40">
        {players.slice(0, 10).map((player, index) => (
          <div key={index} className="flex flex-col items-center border border-gray-200 rounded-lg p-6 shadow-md">
            <div className="relative w-24 h-24 mb-4">
              <Image src={player.imageUrl} alt={`${player.name}'s picture`} layout="fill" className="rounded-full" />
            </div>
            <div className="flex items-center">
              <span className="text-orange-500">No. {player.number}</span>
              <span className="font-bold text-gray-600 ml-2">{player.name}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="relative">
        <Image src="/images/야구장.jpg" alt="야구장임" width={700} height={700} />
        <div className="absolute top-[50%] left-[25%]">
          <Image src="/images/pitcher/강건.jpg" alt="중견수" width={96} height={96} />
        </div>
        <div className="absolute top-[75%] left-[75%]">
          <Image src="/images/pitcher/고영표.jpg" alt="포수" width={96} height={96} />
        </div>
      </div>
    </div>
  );
};

export default TodayPlayerCon;
