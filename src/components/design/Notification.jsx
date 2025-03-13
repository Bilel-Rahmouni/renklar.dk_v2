import {
  managementTeamImages,
  cleaningTeamImages,
  customerServiceTeamImages,
} from "../../constants";
import { MdEmail } from "react-icons/md";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { MdAccountBox } from "react-icons/md";

const Notification = ({ title1, title2, title3, className }) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center mb-8 p-4 w-[80%] bg-n-4/20 border  border-n-1/10 rounded-2xl`}
    >
      <div className="flex-1 w-screen flex flex-col justify-center">
        <div className="flex flex-row items-center justify-center w-full">
          <p className="mb-1 font-semibold text-xl tablet:text-2xl text-center">
            {title1}
          </p>
        </div>
        <div className="flex justify-around items-center">
          <ul className="flex flex-col tablet:flex-row items-center justify-around  m-2 px-2">
            {managementTeamImages.map((item, index) => (
              <div
                className="size-25 mx-5 flex px-2 
               pt-5 flex-col my-8"
                key={index}
              >
                <a
                  className="flex 
                  w-22  
                  h-24  
                 rounded-sm 
                 shadow-md 
                 overflow-hidden 
                 hover:opacity-90 "
                >
                  <img
                    src={item.image}
                    className=" object-center w-full"
                    alt={"item"}
                  />
                </a>
                <div className="text-sm mt-2 my-1">{item.name}</div>
                <div className="text-sm text-center w-20 flex-wrap self-center">
                  {item.post}
                </div>
                <div className="flex justify-center items-center">
                  <a
                    className="cursor-pointer m-2 size-10 flex justify-center items-center"
                    href={item.link}
                    target="_blank"
                  >
                    <div className=" bg-n-7 mx-2 rounded-full flex items-center justify-center p-2 mr-2">
                      <BiLogoLinkedinSquare
                        color={"white"}
                        className="size-7 hover:size-8 hover:mb-1"
                      />
                    </div>
                  </a>
                  <a
                    className="cursor-pointer m-2 size-10 flex justify-center items-center"
                    // href={item.mail}
                    onClick={(e) => {
                      window.open(
                        `mailto:${item.mail}?subject=Subject&body=Body%20goes%20here`
                      );
                    }}
                    target="_blank"
                  >
                    <div className=" bg-n-7 rounded-full flex items-center justify-center p-2 mr-2">
                      <MdEmail
                        color={"white"}
                        className="size-7 hover:size-8 hover:mb-1"
                      />
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </ul>
        </div>
        <div className="flex flex-row items-center justify-center w-full">
          <p className="mb-1 font-semibold text-xl tablet:text-2xl text-center">
            {title2}
          </p>
        </div>
        <div className="flex justify-around items-center">
          <ul className="flex flex-col tablet:flex-row items-center justify-around  m-2 px-2">
            {customerServiceTeamImages.map((item, index) => (
              <div
                key={index}
                className="size-25 mx-5 flex  px-2 justify-center items-center
               pt-5 flex-col my-8"
              >
                <a
                  className="flex 
                  w-22  
                  h-24  
                 rounded-sm 
                 shadow-md 
                 overflow-hidden 
                 hover:opacity-90 "
                >
                  {item.image ? (
                    <img
                      src={item.image}
                      className=" object-center w-full"
                      alt={"item"}
                    />
                  ) : (
                    <MdAccountBox className="size-full" color={"skyblue"} />
                  )}
                </a>
                <div className="text-sm mt-2 my-1 text-center">{item.name}</div>
                <div className="text-sm mt-2 my-1 text-center">{item.post}</div>
              </div>
            ))}
          </ul>
        </div>
        <div className="flex flex-row items-center justify-center w-full">
          <p className="mb-1 font-semibold text-xl tablet:text-2xl text-center">
            {title3}
          </p>
        </div>
        <div className="flex justify-around items-center">
          <ul className="flex flex-col tablet:flex-row items-center justify-around  m-2 px-2">
            {cleaningTeamImages.map((item, index) => (
              <div
                key={index}
                className="size-25 mx-5 flex  px-2 justify-center items-center
               pt-5 flex-col my-8"
              >
                <a
                  className="flex 
                  w-22  
                  h-24  
                 rounded-sm 
                 shadow-md 
                 overflow-hidden 
                 hover:opacity-90 "
                >
                  {item.image ? (
                    <img
                      src={item.image}
                      className=" object-center w-full"
                      alt={"item"}
                    />
                  ) : (
                    <MdAccountBox className="size-full" color={"skyblue"} />
                  )}
                </a>
                <div className="text-sm mt-2 my-1 text-center">{item.name}</div>
                <div className="text-sm mt-2 my-1 text-center">{item.post}</div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notification;
