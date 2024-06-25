import React from "react";
import Image from "next/image";

interface PlayerListProps {
  players: {
    name: string;
    imageUrl: string;
    number: string;
    position: {
      top: string;
      left: string;
    };
    role: string;
  }[];
}

const TodayPlayerCon: React.FC<PlayerListProps> = ({ players }) => {
  return (
    <div>
      <div className="relative">
        <Image src="/images/Field.jpg" alt="야구장임" width={1500} height={1500} />
        {players.map((player, index) => (
          <div key={index}>
            <div key={index} className="absolute border border-black" style={{ top: player.position.top, left: player.position.left }}>
              <div className="text-black text-sm">No. {player.number}</div>
              <div className="relative">
                <Image src={player.imageUrl} alt={player.name} width={96} height={96} />
                <div className="flex justify-end border">
                  <div className="bg-orange-500 absolute" style={{ top: "74%", left: "80%" }}>
                    {player.role}
                  </div>
                </div>
              </div>
              <div className="flex justify-center bg-orange-500">
                <span>{player.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodayPlayerCon;
