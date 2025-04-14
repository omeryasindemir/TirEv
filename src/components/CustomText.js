// components/CustomText.js
import React from 'react';
import { Text } from 'react-native';

const CustomText = ({ children, style, ...props }) => {
  return (
    <Text style={[{ fontFamily: 'Poppins_400Regular' }, style]} {...props}>
      {children}
    </Text>
  );
};

export default CustomText;
