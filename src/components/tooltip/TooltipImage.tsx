import Image from 'next/image';
import React from 'react';

type IImage = {
  height?: number;
  width?: number;
};

function TooltipImage({ height, width }: IImage) {
  return (
    <Image
      src='./assets/images/tooltip.svg'
      width={width || 40}
      height={height || 50}
      alt='Planwell tooltip'
    />
  );
}

export default TooltipImage;
