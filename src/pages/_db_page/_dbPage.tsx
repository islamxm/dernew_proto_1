import classes from './classes.module.scss'
import { useState } from 'react'
import { Col, Row, Input, Button, Select, Flex } from '@/ui/shared/lib'
import Container from '@/ui/layouts/container/container'
import categories from '@/db/db_categories'
import { variants } from '@/models'

type Answer = {
  variant: string,
  answerText: string,
}

type Q = {
  question: string,
  correctAnswer: string,
  answers: Answer[],
  categoryId: number | undefined
}

const _dbPage = () => {
  const [newElem, setNewElem] = useState<Q>({
    question: '',
    correctAnswer: '',
    answers: [],
    categoryId: undefined
  })

  const addElem = () => {
    console.log(newElem)
  }

  const addVariant = () => {
    const vars = newElem.answers
    let newVar = {
      variant: variants[vars.length],
      answerText: '',
      id: vars.length + 1
    }
    setNewElem(s => ({ ...s, answers: [...s.answers, newVar] }))
  }

  const variantTextChange = (e: string, index: number) => {
    setNewElem(s => {
      return ({
        ...s,
        answers: s.answers.map((answer, answerIndex) => {
          if(answerIndex === index) {
            return {
              ...answer,
              answerText: e
            }
          } else return answer
        })
      })
    })
  }

  const deleteVariant = (index: number) => {
    setNewElem(s => ({
      ...s,
      answers: s.answers.filter((answer, answerIndex) => answerIndex !== index).map((answer, answerIndex) => {
        return ({
          ...answer,
          variant: variants[answerIndex]
        })
      })
    }))
  }

  return (
    <div className={classes.wrapper}>
      <Container>
        <Row gutter={[10, 10]}>
          <Col span={12}>
            <Row gutter={[5, 5]}>
              <Col span={24}>
                <h3>Täze sorag</h3>
              </Col>
              <Col span={24}>
                <Row gutter={[5, 5]}>
                  <Col span={24}>
                    <Row gutter={[5, 5]}>
                      <Col span={24}>
                        Bölüm
                      </Col>
                      <Col span={24}>
                        <Select
                          style={{ width: '100%' }}
                          options={categories.map(category => ({ value: category.id, label: category.title }))}
                          onChange={e => setNewElem(s => ({ ...s, categoryId: e }))}
                          placeholder="Bölümi saýla"
                        />
                      </Col>
                    </Row>
                  </Col>
                  <Col span={24}>
                    <Row gutter={[5, 5]}>
                      <Col span={24}>
                        Sorag
                      </Col>
                      <Col span={24}>
                        <Input.TextArea value={newElem.question} onChange={e => setNewElem(s => ({...s, question: e.target.value}))} placeholder='Sorag' />
                      </Col>
                    </Row>
                  </Col>
                  <Col span={24}>
                    <Row gutter={[5, 5]}>
                      <Col span={24}>
                        Jogaplar
                      </Col>
                      <Col span={24}>
                        <Row gutter={[2, 2]}>
                          {
                            newElem.answers.map((variant, variantIndex) => (
                              <div className={classes.variant}>
                                <Flex gap={5}>
                                  <div className={classes.variant_word}>{variant.variant}</div>
                                  <div className={classes.variant_text}>
                                    <Input
                                      onChange={e => variantTextChange(e.target.value, variantIndex)}
                                      placeholder='jogap' value={variant.answerText} />
                                  </div>
                                  <Button onClick={() => deleteVariant(variantIndex)} color='danger'>Delete</Button>

                                </Flex>

                              </div>
                            ))
                          }
                        </Row>
                        {
                          newElem.answers.length < variants.length && (
                        <Button onClick={addVariant} color='primary' variant={'solid'}>Jogap goş</Button>

                          )
                        }
                      </Col>
                    </Row>
                  </Col>
                  <Col span={24}>
                    <Row gutter={[5, 5]}>
                      <Col span={24}>
                        Dogry jogap
                      </Col>
                      <Col span={24}>
                        {/* select bolmaly */}
                        <Select 
                          options={newElem.answers.map(variant => ({value: variant.variant, label: variant.variant}))}
                          onChange={e => setNewElem(s => ({...s, correctAnswer: e}))}
                          value={newElem.correctAnswer}
                          placeholder='Jogap' 
                          style={{width: '100%'}}
                          />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col span={24}>
                <Button onClick={addElem} color='primary' variant={'solid'} size={'large'}>Giriz</Button>
              </Col>
            </Row>
          </Col>
          <Col span={12}>

          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default _dbPage