import { FC, ReactNode } from 'react';
import { Row, Col, Button } from '@/ui/shared/lib';
import { useQuizContext } from '@/core/quiz/context';
import { useNavigate } from 'react-router';

type Props = {

}

const CategoryAction: FC<Props> = () => {
  const quiz = useQuizContext()
  const nav = useNavigate()

  return (
    <Row gutter={[10, 10]}>
      <Col span={12}>
        <Button
          onClick={() => nav('/main')}
          style={{ width: '100%' }}
          variant={'solid'}
          color={'danger'}>
          Bes et
        </Button>
      </Col>
      <Col span={12}>
        <Button
          onClick={quiz?.actions.getResult}
          disabled={quiz?.data?.quizState === 'done' ? false : true}
          style={{ width: '100%' }}
          variant={'solid'}
          color={'primary'}>
          Netije
        </Button>
      </Col>
    </Row>
  )
}

export default CategoryAction