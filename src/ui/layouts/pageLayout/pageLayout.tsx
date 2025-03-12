import { FC, PropsWithChildren, ReactNode } from 'react';
import classes from './classes.module.scss'
import Header from '../../widgets/header/header';

type Props = PropsWithChildren & {

}

const PageLayout: FC<Props> = ({ children }) => {
  return (
    <div className={classes.wrapper}>
      <Header/>
      <div className={classes.main}>
        {children}
      </div>
    </div>
  )
}

export default PageLayout