
import Videoplayer from "./../components/videoplayer";

export default function Home() {
  
  return (
    <>
      <main className="mt-10 sm:mt-14 md:mt-20 lg:mt-24 xl:mt-28 grid lg:gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  2xl:grid-cols-3 last-of-type:mb-8  ">
        <Videoplayer />
        
      </main>
    </>
  );
}
