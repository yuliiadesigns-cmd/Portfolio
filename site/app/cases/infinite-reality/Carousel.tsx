"use client";

const images = [
  "/carousel/Clients.png",
  "/carousel/Clients-1.png",
  "/carousel/Clients-2.png",
];

const track = [...images, ...images, ...images];

export default function Carousel() {
  return (
    <>
      <style>{`
        @keyframes carousel {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-1752px); }
        }
        .carousel-track {
          animation: carousel 20s linear infinite;
        }
      `}</style>

      <div className="relative w-full overflow-hidden">
        <div className="carousel-track flex gap-6">
          {track.map((src, i) => (
            <div key={i} className="w-[560px] flex-shrink-0 overflow-hidden rounded-[1rem]">
              <img src={src} alt="" className="w-full object-cover" draggable={false} />
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#FFFEFA] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#FFFEFA] to-transparent" />
      </div>
    </>
  );
}
