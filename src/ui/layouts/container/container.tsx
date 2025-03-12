import { FC, PropsWithChildren, ReactNode } from 'react';
import classes from './classes.module.scss'

type Props = {
  
}

const Container:FC<PropsWithChildren> = ({children}) => {
  return(
    <div className={classes.wrapper}>
      {children}
    </div>
  )
}

export default Container