// pages/pitch.tsx

import PlayerDashBoard from "@/components/PlayerDashBoard/PlayerDashBoard";
import PlayerList from "@/components/PlayerList/PlayerList";
import React from "react";

const PitchPage = () => {
  const players = [
    { name: "강건", imageUrl: "/images/강건.jpg", number: "99" },
    { name: "고영표", imageUrl: "/images/고영표.jpg", number: "1" },
    { name: "김건웅", imageUrl: "/images/김건웅.jpg", number: "49" },
    { name: "김민", imageUrl: "/images/김민.jpg", number: "11" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 ml-40">Player Profiles</h1>
      <div className="flex flex-wrap justify-start min-h-screen bg-gray-100 p-8">
        <PlayerList players={players} />
        <PlayerDashBoard></PlayerDashBoard>
      </div>
    </div>
  );
};

export default PitchPage;
