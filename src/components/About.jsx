import aboutImg from "../assets/about.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About
        <span className="text-red-500"> Me </span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="about" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex items-center justify-center lg:justify-start ">
            <p className="my-2 max-w-xl py-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              ab, iusto cupiditate eum exercitationem ad magni in iure dicta,
              molestias voluptate? Saepe vitae, distinctio corrupti voluptatum
              perspiciatis minima? Ipsum earum repellendus consequatur, nihil
              architecto atque illum dolorum odit numquam asperiores! Corrupti,
              accusamus reprehenderit aliquam a repellat non ducimus, itaque
              laboriosam accusantium dolore aut omnis quos eveniet tempora
              voluptas! Odit voluptatibus culpa molestias dolore fugiat
              provident neque distinctio eveniet doloribus illo, tempore rerum
              iure est ad quis! Quam dolorum quaerat quae reprehenderit fugit
              corporis id delectus atque eaque error maxime quod nostrum
              quibusdam fugiat, explicabo quidem? Obcaecati laborum unde
              voluptatum tempora mollitia a esse delectus temporibus{" "}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
