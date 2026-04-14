import React from 'react';
import { RiLeafFill } from 'react-icons/ri'; 

const Logo = () => {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <div className="p-1.5 bg-green-600 rounded-lg">
        <RiLeafFill className="text-white text-xl" />
      </div>
      <span className="text-xl font-bold tracking-tight text-black dark:text-white">
        Agri<span className="text-green-600">Flow</span>
      </span>
    </div>
  );
};

export default Logo;