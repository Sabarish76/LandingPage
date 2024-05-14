import image from "../assets/develop.png";
import Ca from "../assets/cabg.png";
import Cs from "../assets/csbg.png";
import avatar4 from "../assets/avatar4.jpg";
import avatar2 from "../assets/avatar2.jpg";
import avatar3 from "../assets/avatar3.jpg";
import { IoLogoAndroid } from "react-icons/io";
import { FaApple } from "react-icons/fa";

const Home = () => {
  return (
    <div className="my-10 container">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col justify-center lg:ml-36">
          <h1 className="text-center font-bold text-4xl lg:w-[90%] md:text-5xl">
            Zero Worry about Compliance
          </h1>
          <p className="my-10 text-center lg:ml-10 lg:w-[70%]">
            Instant Notifcations on Renewals and Appointment Instant
            Notifications on Updates.
          </p>
          <div className="grid grid-cols-2 justify-between">
            <button className="text-white flex justify-around items-center bg-gray-800 hover:bg-gray-900 font-medium ml-10  py-2.5 w-40">
              <p className="bg-gray-800 pl-8">Android</p>
              <IoLogoAndroid className="" />
            </button>
            <button className="text-white flex justify-around items-center bg-gray-800 hover:bg-gray-900 font-medium text-sm py-2.5  w-40">
              <p className="bg-gray-800 pl-8">IOS</p>
              <FaApple className="" />
            </button>
          </div>
        </div>
        <div className="flex justify-center relative">
          <div>
            {" "}
            <img src={image} alt="img" className="max-w-full h-auto lg:ml-48" />
          </div>
          <div className="bg-white rounded-lg shadow-2xl h-fit w-[36.5%] p-2 flex justify-around items-center absolute left-28 top-48">
            <div>
              <h1 className="font-bold">Compliance Management</h1>
              <p className="text-xs">Manage your complete Compliance</p>
              {/* <p className="border-b h-3 border-black w-[100%] "></p> */}
              <div className="">
                {" "}
                {/* <p className="text-xs mt-1">Status:Re-appointment</p>
                <p className="text-xs mt-1">5/9/2024</p> */}
              </div>
            </div>
            <div className="bg-white rounded-full shadow-3xl h-fit w-[20%] p-2 flex justify-around items-center absolute left-[153%] -top-16">
              <div>
                {/* <h1 className="font-bold">CA & CS</h1> */}
                <img src={Ca} className=" object-cover" alt="Avatar" />
                {/* <p className="text-xs text-center"></p> */}
                {/* <p className="border-b h-3 border-black w-[100%] "></p> */}
                <div className="">
                  {" "}
                  {/* <p className="text-xs mt-1">Status:Re-appointment</p>
                <p className="text-xs mt-1">5/9/2024</p> */}
                </div>
              </div>
            </div>
            <div className="bg-white rounded-full shadow-3xl h-fit w-[20%] p-2 flex justify-around items-center absolute left-[170%] -top-5">
              <div>
                {/* <h1 className="font-bold">CA & CS</h1> */}
                <img src={Cs} className=" object-cover" alt="Avatar" />
                {/* <p className="text-xs text-center"></p> */}
                {/* <p className="border-b h-3 border-black w-[100%] "></p> */}
                <div className="">
                  {" "}
                  {/* <p className="text-xs mt-1">Status:Re-appointment</p>
                <p className="text-xs mt-1">5/9/2024</p> */}
                </div>
              </div>
            </div>
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img
                src={avatar2}
                className="w-full h-full object-cover"
                alt="Avatar"
              />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-2xl h-fit w-[36.5%] p-2 flex justify-around items-center absolute left-[62%] top-64">
            <div>
              <h1 className="font-bold">Ticket Management</h1>
              <p className="text-xs">Streamline your working Process</p>
              {/* <p className="border-b h-3 border-black w-[100%] "></p> */}
              <div className="">
                {" "}
                {/* <p className="text-xs mt-1">Status:Re-appointment</p>
                <p className="text-xs mt-1">5/9/2024</p> */}
              </div>
            </div>
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img
                src={avatar3}
                className="w-full h-full object-cover"
                alt="Avatar"
              />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-2xl h-fit w-[36.5%] p-2 flex justify-around items-center absolute left-28 top-[75%]">
            <div>
              <h1 className="font-bold">Secretarial Management</h1>
              <p className="text-xs">Manage your Secretarial Activities</p>
              {/* <p className="border-b h-3 border-black w-[100%] "></p> */}
              <div className="">
                {" "}
                {/* <p className="text-xs mt-1">Status:Re-appointment</p>
                <p className="text-xs mt-1">5/9/2024</p> */}
              </div>
            </div>
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img
                src={avatar4}
                className="w-full h-full object-cover"
                alt="Avatar"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
