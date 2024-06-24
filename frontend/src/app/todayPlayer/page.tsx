// pages/pitch.tsx

import PlayerDashBoard from "@/components/PlayerDashBoard/PlayerDashBoard";
import TodayPlayerCon from "@/components/TodayPlayerCon/TodayPlayerCon";
import React from "react";

const PitchPage = () => {
  const players = [
    { name: "강건", imageUrl: "/images/강건.jpg", number: "99" },
    { name: "고영표", imageUrl: "/images/고영표.jpg", number: "1" },
    { name: "김건웅", imageUrl: "/images/김건웅.jpg", number: "49" },
    { name: "김민", imageUrl: "/images/김민.jpg", number: "11" },
    { name: "김민성", imageUrl: "/images/김민성.jpg", number: "94" },
    { name: "김영현", imageUrl: "/images/김영현.jpg", number: "48" },
    { name: "문용익", imageUrl: "/images/문용익.jpg", number: "13" },
    { name: "박세진", imageUrl: "/images/박세진.jpg", number: "33" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 ml-40">오늘 경기 선수들</h1>
      <div className="flex flex-wrap justify-start min-h-screen bg-gray-100 p-8">
        <TodayPlayerCon players={players} />
      </div>
    </div>
  );
};

export default PitchPage;
