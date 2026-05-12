"use client";

const images = [
  "/carousel-bcg/Cost par input.png",
  "/carousel-bcg/Expected Cost Output.png",
  "/carousel-bcg/Supplier item Cost Comparison2 tags results.png",
  "/carousel-bcg/Supplier item Cost Comparison2 tags results-1.png",
];

const track = [...images, ...images, ...images];

export default function Carousel() {
  return (
    <>
      <style>{`
        @keyframes carousel-bcg {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-${images.length * (560 + 24)}px); }
        }
        .carousel-bcg-track {
          animation: carousel-bcg 22s linear infinite;
        }
      `}</style>

      <div className="relative w-full overflow-hidden">
        <div className="carousel-bcg-track flex gap-6">
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
