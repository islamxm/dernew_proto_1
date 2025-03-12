import { FC, ReactNode } from 'react';
import classes from './classes.module.scss'
import { Variant as VariantType } from '../../../models';
import { setClassNames } from '../../../utils';

type Props = {
  variant:VariantType,
  answerText: string,
  isActive: boolean
  onClick: (...args:any[]) => any
}

const Variant:FC<Props> = ({
  variant,
  answerText,
  isActive,
  onClick
}) => {
  return(
    <div onClick={onClick} className={setClassNames([classes.wrapper, isActive && classes.active])}>
      <div className={classes.variant}>
        {variant}
      </div>
      <div className={classes.text}>
        {answerText}
      </div>
    </div>
  )
}

export default Variant