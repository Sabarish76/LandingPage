import { FaArrowRight } from "react-icons/fa";

const About = () => {
  return (
    <div className="my-10 relative grid grid-cols-1 md:grid-cols-3 md:items-center">
      <div className="col-span-1 md:text-right md:ml-40">
        <p className="font-bold text-red-400 text-2xl ">Why Choose Us</p>
        <p className="font-bold text-3xl">
          Explore our wide range of practice areas
        </p>
      </div>
      <div className="border-l border-gray-800 h-36 w-0 mx-auto hidden md:block"></div>
      <div className="col-span-1 mt-5 md:mt-0 md:mr-40 md:ml-0">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque omnis
          iure pariatur, repudiandae deleniti mollitia earum maiores commodi
          quia. Veniam.
        </p>
        <br></br>
        <button className="font-bold flex items-center gap-2 ">
          Explore More
          <FaArrowRight className="mt-1" />
        </button>
      </div>
    </div>
  );
};

export default About;
