import {
  RiFacebookFill,
  RiGoogleFill,
  RiLinkedinFill,
  RiMailFill,
  RiMapPin2Fill,
  RiPhoneFill,
  RiPlantLine,
} from "react-icons/ri";
import { MenuLinks } from "../../data/data";
import { Link } from "react-router-dom";

const list = [
  {
    id: 1,
    icon: <RiMapPin2Fill />,
    desc: "Cambodia",
  },
  {
    id: 2,
    icon: <RiPhoneFill />,
    desc: "+855 123456789",
  },
  {
    id: 3,
    icon: <RiMailFill />,
    desc: "Hello@greenfarm.com",
  },
];

const Footer = () => {
  return (
    <footer className="bg-primary w-full">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-5 px-5 sm:grid-cols-2 lg:grid-cols-4 pt-8 pb-10">
          <div className="pr-5 space-y-2">
            <div className="flex items-center">
              <RiPlantLine className="w-8 h-8 text-white text-lg p-1.5" />
              <h3 className="font-semibold text-white text-xl">Green Farm</h3>
            </div>
            <p className="text-white text-sm">
              Fresh healthy naturally grown products directly from our farm
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-white text-lg">Quick Links</h3>
            <ul>
              {MenuLinks.map((data) => (
                <li key={data.id}>
                  <Link
                    to={data.link}
                    className="text-sm font-semibold text-white/80 hover:text-white cursor-pointer"
                  >
                    {data.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-white text-lg">Our Farm</h3>
            {list.map((item) => (
              <span
                key={item.id}
                className="flex gap-2 text-white/80 items-center"
              >
                {item.icon}
                <p>{item.desc}</p>
              </span>
            ))}
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-white text-lg">Follow Us</h3>
            <div className="flex gap-2.5 transition duration-300">
              <RiFacebookFill className="w-8 h-8 text-gray-50 bg-gray-300/40 rounded-full hover:text-slate-600 p-1 cursor-pointer" />
              <RiLinkedinFill className="w-8 h-8 text-gray-50 bg-gray-300/40 rounded-full hover:text-slate-600 p-1 cursor-pointer" />
              <RiGoogleFill className="w-8 h-8 text-gray-50 bg-gray-300/40 rounded-full hover:text-slate-600 p-1 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
