import { createContext, useState } from 'react';
import { Animated } from 'react-native';

const AnimationContext = createContext<any>(null);

interface IAnimationContext {
  children: React.ReactNode;
}

const AnimationProvider = ({ children }: IAnimationContext) => {
  const [fade] = useState(new Animated.Value(0));
  const startAnimation = () => {
    Animated.timing(fade, {
      toValue: 1,
      duration: 1000,
      easing(value) {
        return Math.pow(value, 2) - value;
      },
      useNativeDriver: true,
    }).start();
  };

  const endAnimation = () => {
    Animated.timing(fade, {
      toValue: 0,
      duration: 1000,

      useNativeDriver: true,
    }).start();
  };
  return (
    <AnimationContext.Provider value={{ fade, startAnimation, endAnimation }}>
      {children}
    </AnimationContext.Provider>
  );
};

export { AnimationContext, AnimationProvider };
