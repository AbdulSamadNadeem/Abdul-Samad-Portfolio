import React from "react";
import {
  FaReact,
  FaPython,
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiFigma,
  SiGithub,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiDjango,
  SiPostgresql,
} from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";

const logos1 = [
  { id: 1, component: <FaReact /> },
  { id: 2, component: <FaPython /> },
  { id: 3, component: <SiTailwindcss /> },
  { id: 5, component: <SiNextdotjs /> },
  { id: 7, component: <SiJavascript /> },
  { id: 10, component: <SiTailwindcss /> },
  { id: 11, component: <FaCss3Alt /> },
  { id: 12, component: <SiFigma /> },
  { id: 13, component: <SiGithub /> },
  { id: 14, component: <FaHtml5 /> },
  { id: 15, component: <FaNodeJs /> },
  { id: 16, component: <SiExpress /> },
  { id: 17, component: <SiMongodb /> },
  { id: 18, component: <SiFirebase /> },
  { id: 19, component: <FaGitAlt /> },
  { id: 20, component: <SiDjango /> },
  { id: 21, component: <SiPostgresql /> },
  { id: 22, component: <SiSocketdotio /> },
];
const Logomarquee = () => {
  React.useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
      @keyframes marquee-move {
        to {
          transform: translateX(calc(-100cqw - var(--item-gap)));
        }
      }
    `;
    document.head.appendChild(styleSheet);
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);
  const Marquee = ({ logos, direction = "forwards" }) => {
    const numItems = logos.length;
    const speed = "20s";
    const itemWidth = "100px";
    const itemGap = "25px";
    return (
      <div
        className="max-w-full overflow-hidden"
        style={{
          "--speed": speed,
          "--numItems": numItems,
          "--item-width": itemWidth,
          "--item-gap": itemGap,
          "--direction": direction,
          maskImage:
            "linear-gradient(to right, transparent, black 2rem, black calc(100% - 2rem), transparent)",
        }}
      >
        <div
          className="w-max flex"
          style={{
            "--track-width": `calc(var(--item-width) * ${numItems})`,
            "--track-gap": `calc(var(--item-gap) * ${numItems})`,
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex justify-center items-center bg-white/10 border border-black rounded-2xl text-white"
              style={{
                width: "var(--item-width)",
                aspectRatio: "1 / 1.2",
                marginRight: "var(--item-gap)",
                animation: `marquee-move var(--speed) linear infinite ${direction}`,
              }}
            >
              <div className="w-full h-full flex justify-center items-center text-[2rem] sm:text-[2.5rem] md:text-[3rem]">{logo.component}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  return (
    <div className="items-center overflow-hidden">
      <div className="w-full max-w-6xl flex flex-col gap-y-6">
        <Marquee logos={logos1} />
      </div>
    </div>
  );
};
export default Logomarquee;
