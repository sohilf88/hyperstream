"use client";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import Header from "./header";

function Videoplayer() {
  const status = ReactPlayer.canPlay(
    "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6e.m3u8"
  );
  console.log(status);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted)
    return (
      <section className="">
        {/* <div className="pt-[52.5%] relative">
          <ReactPlayer
            className="top-0 absolute left-0"
            controls={true}
            // playing
            muted
            forceHls
            width={320}
            // url="https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6e.m3u8"
            url="https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8"
          />
        </div> */}
        <div className="player-wrapper shadow-2xl hover:scale-[1.01] rounded-sm bg-gray-700 transition duration-100 ">
          <ReactPlayer
            className="react-player"
            playing
            muted
            url="https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8"
            width="100%"
            height="100%"
            controls={true}
          />
        </div>
      </section>
    );
}

export default Videoplayer;
