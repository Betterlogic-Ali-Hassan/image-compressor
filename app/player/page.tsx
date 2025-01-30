"use client";
import React, { useEffect } from "react";
import Player from "@/components/player/Player";

const Page = () => {
  useEffect(() => {
    const playerElement = document.getElementById("player");
    if (playerElement) {
      window.scrollTo({
        top: playerElement.offsetTop - 30,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <div id='player'>
      <Player />
    </div>
  );
};

export default Page;
