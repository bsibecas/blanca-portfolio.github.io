// ImageTitleText.js

import React from 'react';

const ImageTitleText = ({ imageUrl, title, text }) => {
  return (
    <div className="flex flex-col items-center">
      <img src={imageUrl} alt={title} className="w-32 h-32 object-cover rounded-full" />
      <h3 className="text-base font-semibold mt-2 text-center max-w-36 break-words">{title}</h3>
      <p className="text-xs text-center mt-1 max-w-60 break-words">{text}</p>
    </div>
  );
};

export default ImageTitleText;
