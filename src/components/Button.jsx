import React from 'react';

function Button({ btnVal, padLine }) {
  return (
    <p className={`py-3 px-${padLine} bg-red-600 rounded-md text-white cursor-pointer hover:bg-red-700 hover:font-bold className="inline-block w-fit md:block"`}>
      {btnVal}
    </p>
  );
}

export default Button;
