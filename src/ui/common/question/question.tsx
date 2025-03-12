import { FC } from 'react';
import classes from './classes.module.scss'
import { Question as QType, QuestionState } from '../../../models';
import { setClassNames } from '@/utils';

type Props =  {
  onClick: (question: QType) => void,
  question: QType,
  state: QuestionState
}

const Question: FC<Props> = ({
  question,
  onClick,
  state
}) => {
  const {isAnswered, isCorrect} = state

  return (
    <div className={setClassNames([classes.wrapper, isAnswered && classes.answered, isCorrect === true && classes.correct, isCorrect === false && classes.uncorrect])}>
      <div onClick={() => onClick(question)} className={classes.main}>
        <div className={classes.content}>
          <div className={classes.label}>
            <span className={classes.title}>Sorag №{question.id}</span>
          </div>
          <div className={classes.ex}></div>
        </div>
      </div>
    </div>
  )
}

export default Question;