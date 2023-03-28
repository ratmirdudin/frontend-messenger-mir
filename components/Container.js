import React from 'react';

const Container = ({children, className}) => {
  const style = className.includes('max-w-') ? className : `max-w-3xl ${className}`
  return (
    <div className={style + " h-[100%] w-[100%]"}>
      {children}
    </div>
  );
};

export default Container;