import React from 'react';
import {UserCircleIcon} from "@heroicons/react/24/solid";

const ChatLine = ({id, sender, message, time, isRight, isSelected, handleSelect, handleUnselect}) => {

  const handleClick = () => {
    if (isSelected) {
      handleUnselect()
    } else {
      handleSelect()
    }
  }

  const isShowUser = false

  return (
    <div className=" cursor-pointer text-sm md:text-sm py-1.5  ">
      {/*user*/}
      {isShowUser &&
        <div className={"flex items-center px-1 " + (isRight ? " justify-end mr-2 " : " ")}>
          <UserCircleIcon className={(isRight ? " text-amber-500 " : " text-amber-600 ") + "h-8"}/>
          <p className="hover:underline text-blue-800 hover:text-blue-600">
            {sender}
          </p>
        </div>
      }
      {/*message*/}
      <div onClick={handleClick} className={(isSelected ? " bg-gray-200 " : " ") + " w-auto "}>
        <div className={"   md:min-w-[35%] pt-3.5 max-w-max w-[50%]"
          + (isRight ? " ml-auto bg-amber-300 rounded-l-full pl-5 pr-2 " : " bg-amber-400 rounded-r-full pl-2 pr-5 ")
          + (isSelected ? "bg-opacity-75 " : "")}>
          <p
            className={" whitespace-pre-line break-words /*hover:shadow-xl transition transform ease-out*/ "}>
            {message}
          </p>
          <div className={"flex pb-0.5 " +
            (isRight ? " justify-end " : " justify-start ")}>
            <p className="text-xs font-light text-gray-600">
              {time}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatLine;