import { useEffect, useState } from "react";
import Videoplayer from "./../components/videoplayer";

export default function Home() {
  // const [mounted, setMounted] = useState(false);
  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  // if (!mounted)
  return (
    <>
      <main className=" lg:mt-12 grid lg:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1  2xl:grid-cols-3  ">
        <Videoplayer />
        <Videoplayer />
        <Videoplayer />
        <Videoplayer />
        <Videoplayer />
        <Videoplayer />
        <Videoplayer />
        <Videoplayer />
      </main>
    </>
  );
}
