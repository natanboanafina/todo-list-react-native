import React from 'react';
import {} from 'react-native-svg';
import Svg, { Path, SvgProps } from 'react-native-svg';

export const Check = ({ fill, stroke, ...rest }: SvgProps) => {
  return (
    <>
      <Svg width={32} height={32} viewBox="0 0 24 24" fill={fill} {...rest}>
        <Path
          opacity="0.5"
          d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
          stroke={stroke}
          stroke-width="1.5"
        />
        <Path
          d="M8.5 12.5L10.5 14.5L15.5 9.5"
          stroke={stroke}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </>
  );
};
