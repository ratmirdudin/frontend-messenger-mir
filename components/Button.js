import React from 'react';

const Button = ({title, handleClick, outline = false}) => {
  const selectStyle = outline ? "border-2" : "bg-sky-200"
  const commonStyle = `cursor-pointer py-0.5 px-2 rounded-full select-none font-mono`
  return (
    <span className={selectStyle + ' ' + commonStyle} onClick={handleClick}>
      {title}
    </span>
  );
};

export default Button;