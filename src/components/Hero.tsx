import { IoIosArrowRoundDown } from "react-icons/io";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-black">
      <div className="absolute top-18 left-0 bottom-0 right-0 z-0">
        <img
          src="/hero.jpg"
          alt="iphone 17 pro"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80"></div>
      </div>
      <div className="absolute bottom-8 left-1/2 z-10 animate-bounce">
        <IoIosArrowRoundDown className="size-10 stroke-5" />
      </div>
    </section>
  );
}
