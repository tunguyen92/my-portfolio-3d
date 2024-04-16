import { metal } from "~/assets/images";

const LOADING = [
  {
    text: "L",
    delay: "animation-delay-0",
  },
  {
    text: "O",
    delay: "animation-delay-100",
  },
  {
    text: "A",
    delay: "animation-delay-200",
  },
  {
    text: "D",
    delay: "animation-delay-300",
  },
  {
    text: "I",
    delay: "animation-delay-[400ms]",
  },
  {
    text: "N",
    delay: "animation-delay-500",
  },
  {
    text: "G",
    delay: "animation-delay-[600ms]",
  },
];

const Loader = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#fbfbfb]">
      <div className="content">
        <div className="flex justify-center text-xl font-bold mb-4">
          {LOADING.map((item, index) => (
            <span
              key={index}
              className={`animate-loading  ${index > 0 && item.delay}`}
            >
              {item.text}
            </span>
          ))}
        </div>

        <img src={metal} alt="loading" />
      </div>
    </div>
  );
};

export default Loader;
