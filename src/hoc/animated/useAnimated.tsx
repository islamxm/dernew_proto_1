import { useContext, createContext } from "react";
import baseEnterAnimationProps from "@/configs/baseEnterAnimationProps";

export const AnimationContext = createContext<typeof baseEnterAnimationProps | undefined>(undefined)

const useAnimated = () => {
  const animateOptions = useContext(AnimationContext)
  return {animateOptions};
}

export default useAnimated;