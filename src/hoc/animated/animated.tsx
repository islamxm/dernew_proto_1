import { FC, PropsWithChildren, ReactNode, createContext, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import baseEnterAnimationProps from '@/configs/baseEnterAnimationProps';
import { AnimationContext } from './useAnimated';

type Props = FC<PropsWithChildren<{isAnimated?: boolean}>>

const Animated:Props = ({children, isAnimated}) => {

  return(
    <AnimationContext.Provider
      value={isAnimated ? baseEnterAnimationProps : undefined}
      >
      <AnimatePresence>
        {children}
      </AnimatePresence>
    </AnimationContext.Provider>
  )
}

export default Animated;