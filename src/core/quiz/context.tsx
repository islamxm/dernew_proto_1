import { createContext, useContext } from "react";
import useQuiz from "./useQuiz";


export const QuizContext = createContext<ReturnType<typeof useQuiz> | undefined>(undefined)
export const QuizProvider = QuizContext.Provider
export const useQuizContext = () => useContext(QuizContext)




