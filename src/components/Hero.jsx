import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/monkeydev.jpg";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
  // Destructuring text and loop from useTypewriter
  const [text] = useTypewriter({
    words: ["Developer", "Monkey"],
    loop: true,
  });

  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0.7)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Tunyatap Vichaidid
            </motion.h1>
            <motion.span
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              I'm a <span>{text}</span>
              <Cursor />
            </motion.span>
            <motion.p
              variants={container(2)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur non accusantium in quis vitae fuga veniam maxime,
              repudiandae sit optio cumque corrupti odio rerum animi, dolorum
              sequi. Maxime repellat laboriosam praesentium officia sapiente
              rerum animi numquam omnis recusandae quod saepe nulla facilis
              ipsum sed nostrum dignissimos, ea quia id deserunt aut distinctio
              quas fugit necessitatibus officiis? Excepturi similique numquam
              id?
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
              src={profilePic}
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
