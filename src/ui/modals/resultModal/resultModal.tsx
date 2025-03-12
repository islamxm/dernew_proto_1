import { FC, ReactNode, useState, useRef, useEffect } from 'react';
import classes from './classes.module.scss'
import { ModalFuncProps, Modal, Row, Col, Button } from '@/ui/shared/lib';
import { useQuizContext } from '@/core/quiz/context';

type Props = {

}

const WIDTH = 400;

const ResultModal: FC<ModalFuncProps> = (props) => {
  const quiz = useQuizContext()
  const [isOpen, setIsOpen] = useState(false)
  
  const tryAgain = () => {
    quiz?.actions.resetQuiz()
  }

  useEffect(() => {
    if(quiz?.data.result) {
      setIsOpen(true)
    } else setIsOpen(false)
  }, [quiz])

  return (
    <Modal
      {...props}
      closeIcon={false}
      open={isOpen}
      footer={false} 
    >
      <div className={classes.wrapper}>
        <Row gutter={[15, 15]}>
          <Col span={24}>
            <div className={classes.percent}>
              {quiz?.data.result?.percent}%
            </div>
          </Col>
          {/* <Col span={24}>
            <div className={classes.indicator} >
              <div ref={ref} style={{width: WIDTH}} className={classes.line}><div style={{ width: indicatorWidth }} className={classes.el}></div></div>
            </div>
          </Col> */}
          <Col span={24}>
            <div className={classes.ball}>
              {quiz?.data.result?.ball} ball
            </div>
          </Col>
          <Col span={24}>
            <div className={classes.action}>
              <Button onClick={tryAgain} type={'primary'}>Ýene-de synanyşmak</Button>
            </div>
          </Col>
        </Row>
      </div>
    </Modal>
  )
}

export default ResultModal;