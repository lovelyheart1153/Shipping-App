import { Urbanist } from "next/font/google";
import TrackSearch from "./TrackSearch";

const urbanist = Urbanist({
  subsets: ["latin"],
});

const Hero = () => {
  return (
    <section className="bg-[url(/graph-paper.svg)] h-[50vh] text-neutral-100 bg-neutral-800">
      <div className="container mx-auto h-full flex flex-col justify-center items-center p-2 sm:p-4">
        <h1
          className={`${urbanist.className} font-black text-4xl md:text-6xl mb-6 text-center`}
        >
          Welcome to McDan Shipping.
        </h1>
        <p className="max-w-[700px] text-center mb-6 text-neutral-400">
          The frst & only Freight Forwarding Company to obtain the Air Carrier
          License in handling chartered cargo ﬂights in Ghana & currently is the
          GSA for several airlines.
        </p>
        <p className="text-2xl text-sky-400">Track your shippment</p>
        <TrackSearch />
      </div>
    </section>
  );
};

export default Hero;
