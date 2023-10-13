import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export const Add = ({ fill, stroke, ...rest }: SvgProps) => {
  return (
    <>
      <Svg width={32} height={32} viewBox="0 0 24 24" fill={fill} {...rest}>
        <Path
          d="M12 11V14M12 14V17M12 14H15M12 14H9M6 7H18M8 5H16M6 9H18C19.1046 9 20 9.89543 20 11V17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17V11C4 9.89543 4.89543 9 6 9Z"
          stroke={stroke}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </>
  );
};
