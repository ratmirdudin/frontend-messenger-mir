import React from 'react';

const ScreenMinHeightChatCard = ({children}) => {
  return (
    <div className="flex flex-col w-[100%] border shadow-md bg-gray-300 _my-min-height ">
      {children}
    </div>
  );
};

export default ScreenMinHeightChatCard;