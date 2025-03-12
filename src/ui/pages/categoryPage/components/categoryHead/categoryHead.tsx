import { FC, ReactNode } from 'react';
import classes from '../../classes.module.scss'
import { useQuizContext } from '@/core/quiz/context';

type Props = {
  
}

const CategoryHead:FC<Props> = () => {
  const quiz = useQuizContext()

  return(
    <h1 className={classes.title}>{quiz?.data.categoryData?.title}</h1>
  )
}

export default CategoryHead