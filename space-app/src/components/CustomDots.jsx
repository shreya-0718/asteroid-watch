import React from 'react'

const CustomDots = ({ onClick, ...rest }) => {
  const { active } = rest;
  return (
    <button
      className={`w-3 h-3 mx-1 rounded-full transition-all ${
        active ? 'bg-violet scale-120' : 'bg-white opacity-25'
      }`}
      onClick={onClick}
    />
  );
};

export default CustomDots
