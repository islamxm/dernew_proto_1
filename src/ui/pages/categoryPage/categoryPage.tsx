import { FC } from 'react';
import Container from '@/ui/layouts/container/container';
import { useParams } from 'react-router';
import { Row, Col } from '@/ui/shared/lib'
import QModal from '@/ui/modals/qModal/qModal';
import useQuiz from '@/core/quiz/useQuiz';
import CategoryBody from './components/categoryBody/categoryBody';
import CategoryHead from './components/categoryHead/categoryHead';
import { QuizProvider } from '@/core/quiz/context';
import CategoryAction from './components/categoryAction/categoryAction';
import ResultModal from '@/ui/modals/resultModal/resultModal';
import useAnimated from '@/hoc/animated/useAnimated';
import { motion } from 'framer-motion'

const CategoryPageComponent: FC = () => {
  const { id } = useParams()
  const quiz = useQuiz(Number(id))
  const {animateOptions} = useAnimated()

  return (
    <motion.div {...animateOptions}>
      <QuizProvider value={quiz}>
        <QModal />
        <ResultModal />
        <Container>
          <Row gutter={[20, 20]}>
            <Col span={24}>
              <CategoryHead />
            </Col>
            <Col span={24}>
              <CategoryBody />
            </Col>
            <Col span={24}>
              <CategoryAction />
            </Col>
          </Row>
        </Container>
      </QuizProvider>
    </motion.div>

  )
}

export default CategoryPageComponent;