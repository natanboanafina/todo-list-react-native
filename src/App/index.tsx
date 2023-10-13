import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from '../styles/theme';
import ToDo from '../screens/ToDo/ToDo';
import { AnimationProvider } from '../context/animation';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <>
      <AnimationProvider>
        <ThemeProvider theme={theme}>
          <StatusBar
            networkActivityIndicatorVisible={true}
            backgroundColor="#000"
            translucent={true}
          />
          <ToDo />
        </ThemeProvider>
      </AnimationProvider>
    </>
  );
}
