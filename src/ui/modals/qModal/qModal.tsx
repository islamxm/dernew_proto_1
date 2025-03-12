import { FC, useEffect, useState } from 'react';
import classes from './classes.module.scss'
import { Modal, Row, Col, ModalFuncProps, Button } from '../../shared/lib'
import { Variant as VType } from '../../../models';
import Variant from '../../common/variant/variant';
import { useQuizContext } from '@/core/quiz/context';







const QModal: FC<ModalFuncProps> = (props) => {
  const quiz = useQuizContext()
  const [selected, setSelected] = useState<VType>()


  useEffect(() => {
    setSelected(quiz?.data?.questionData?.selectedVariant)
  }, [quiz?.data?.questionData?.selectedVariant])

  const onCancel = () => {
    setSelected(undefined)
    quiz?.actions?.cancelQuestion()
  }

  return (
    <Modal
      {...props}
      onCancel={onCancel}
      open={quiz?.data?.questionData && true}
      footer={false}
    >
      <div className={classes.wrapper}>
        <Row gutter={[30, 30]}>
          <Col span={24}>
            <div className={classes.question}>
              {quiz?.data.questionData?.question}
            </div>
          </Col>
          <Col span={24}>
            <div className={classes.answers}>
              <Row gutter={[10, 10]}>
                {
                  quiz?.data.questionData && quiz.data.questionData.answers.map(answer => (
                    <Col span={24}>
                      <Variant
                        isActive={selected === answer.variant}
                        {...answer}
                        onClick={() => setSelected(answer.variant)}
                      />
                    </Col>
                  ))
                }
              </Row>
            </div>
          </Col>
          <Col span={24}>
            <div className={classes.action}>
              <Row gutter={[10, 10]}>
                <Col span={12}>
                  <Button
                    variant={'solid'}
                    color={'danger'}
                    style={{ width: '100%' }}
                    onClick={onCancel}
                    >
                    Bes et
                  </Button>
                </Col>
                <Col span={12}>
                  <Button
                    onClick={() => {
                      (quiz?.data.questionData && selected) && quiz?.actions?.answerQuestion({
                        id: quiz?.data.questionData.id,
                        selectedVariant: selected
                      })
                      onCancel()
                    }}
                    variant={'solid'}
                    color={'blue'}
                    style={{ width: '100%' }}
                    disabled={!selected}
                    >
                    Jogaby giriz
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </Modal>
  )
}

export default QModal