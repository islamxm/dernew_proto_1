import { ReactNode } from "react";

export type Question = {
  question: ReactNode;
  id: number,
  correctAnswer: Variant;
  answers: Answer[],
  categoryId: CategoryData['id'] 
}

export type Category = 
| 'dernew'
| 'AS'
| 'zahmet'
| 'rayat'
| 'mashgala'
| 'administratiw_hb'
| 'TJK'
| 'umumy'

export type CategoryData = {
  id: number;
  type: Category
} 

export type CategoryDataExt = CategoryData & {
  title?: string;
  icon?: ReactNode
}

export type Answer = {
  variant: Variant,
  answerText: string,
  id: number
};

export type QuestionState = {
  isAnswered: boolean,
  isCorrect?: boolean
}

export type QuizState = 'proccess' | 'done'

export type QAnswer = {id: Question['id'], selectedVariant?: Variant}

export type QuizResult = {
  ball: number,
  percent: number,
  ratioOfAnswers: {correct: number, uncorrect: number}
}

export type QuizResultList = Required<QAnswer & Pick<QuestionState, 'isCorrect'>>

  
export type Variant = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g';

export const variants = ['a', 'b', 'c', 'd', 'e', 'f', 'g']