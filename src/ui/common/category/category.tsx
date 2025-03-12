import { FC, ReactNode } from 'react';
import classes from './classes.module.scss'
import { CategoryDataExt } from '../../../models';
import { useNavigate } from 'react-router';
import { useDispatch } from '@/store/hooks'
import { updateActiveCategory } from '@/store/slices/mainSlice';
import categories from '@/db/db_categories';

type Props = CategoryDataExt & {
}

const Category: FC<Props> = ({
  title,
  type,
  id,
  icon
}) => {

  const _n = useNavigate()
  const dispatch = useDispatch()

  const onClick = () => {
    if (id) {
      _n(`/category/${id}`)
      dispatch(updateActiveCategory({ 
        id: id.toString() , 
        type: categories.find(cat => cat.id === id)?.type
      }))
    }
  }

  return (
    <div onClick={onClick} className={classes.wrapper}>
      <div className={classes.main}>
        <div className={classes.icon}>
          {icon}
        </div>
        <div className={classes.title}>
          {title}
        </div>
      </div>

    </div>
  )
}

export default Category