// components/PlayerList.tsx

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
    <div className="ml-40">
      {players.map((player, index) => (
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
  );
};

export default TodayPlayerCon;
