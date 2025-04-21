import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';

const GestureHandlerLayout = ({ children }) => {
  return <GestureHandlerRootView style={{ flex: 1 }}>{children}</GestureHandlerRootView>;
};

export default GestureHandlerLayout; // Ensure this is the default export