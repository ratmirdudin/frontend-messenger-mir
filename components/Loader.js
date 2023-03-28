import React from 'react';
import {Discuss} from "react-loader-spinner";

const Loader = () => {
  return (
    <Discuss
      visible={true}
      height="100"
      width="100"
      ariaLabel="загрузка..."
      colors={["#e0b70c", "#FBCD13"]}
    />
  );
};

export default Loader;