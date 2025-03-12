import { FC, ReactNode } from 'react';
import classes from './classes.module.scss'
import Container from '../../layouts/container/container';
import {Row} from '../../shared/lib';
import {Col} from '../../shared/lib';
import Category from '../../common/category/category';
import useAnimated from '@/hoc/animated/useAnimated';
//db
import categories from '../../../db/db_categories';
import {motion} from 'framer-motion'
type Props = {
  
}


const MainPageComponent:FC<Props> = () => {
  const {animateOptions} = useAnimated()

  return(
    <motion.div {...animateOptions} className={classes.wrapper}>
      <Container>
        <div className={classes.content}>
          <Row justify={'center'} gutter={[20,20]}>
            {
              categories.map((category) => (
                <Col span={6} key={category.id}>
                  <Category 
                    type={category.type}
                    title={category.title}
                    id={category.id}
                    icon={category.icon}
                    />
                </Col>
              ))
            }
          </Row>
        </div>        
      </Container>
    </motion.div>
  )
}

export default MainPageComponent