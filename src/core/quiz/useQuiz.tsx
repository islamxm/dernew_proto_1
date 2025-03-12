import categories from "@/db/db_categories"
import { QAnswer, Question, CategoryDataExt, Variant, QuestionState, QuizState, QuizResult, QuizResultList } from "@/models"
import { useEffect, useState } from "react"
import db_questions from "@/db/db_questions"

type CategoryData = Pick<CategoryDataExt, 'id' | 'title' | 'type'>

const useQuiz = (categoryId: number) => {
  const [categoryData, setCategoryData] = useState<CategoryData>()
  const [questionList, setQuestionList] = useState<Question[]>([])
  const [answeredQuestions, setAnsweredQuestions] = useState<QAnswer[]>([])
  const [questionData, setQuestionData] = useState<Question & QAnswer>()
  const [quizState, setQuizState] = useState<QuizState>('proccess')
  const [result, setResult] = useState<QuizResult>()

  //создать список из 20 вопросов на основе рандомного подбора в зависимости от выбранной категории
  const createQuestionList = (categoryId: number) => {
    // на данный момент выводятся все вопросы в категории
    const list = db_questions.filter(question => question.categoryId === categoryId)
    setQuestionList(list)
  }

  //Выбрать вопрос
  const openQuestion = (question: Question) => {
    setQuestionData({
      ...question,
      selectedVariant: answeredQuestions.find(q => q.id === question.id)?.selectedVariant
    })
  }
  
  // отменить вопрос
  const cancelQuestion = () => {
    setQuestionData(undefined)
  }

  //сохранить выбранный вариант
  const answerQuestion = (data: QAnswer) => {
    if(answeredQuestions.find(q => q.id === data.id)) {
      setAnsweredQuestions(s => s.map(q => {
        if(q.id === data.id) {
          return ({...q, selectedVariant: data.selectedVariant})
        } else {
          return q
        }
      }))
    } else {
      setAnsweredQuestions(s => [...s, data])
    }
    // cancelQuestion()
  } 

  //получить результат теста
  const getResult = ():QuizResult => {
    const total = questionList.length
    const checkedList = checkQuizResult()
    const correct = checkedList.filter(f => f.isCorrect).length
    const uncorrect = total - correct
    const percent = Math.round((correct / total) * 100)
    const ball = Math.round(10 / total * correct)

    const res = {
      ball,
      percent,
      ratioOfAnswers: {
        correct,
        uncorrect
      }
    }

    setResult(res)
    return res
  }

  // проверить ответ
  const checkQuizResult = () => {
    return answeredQuestions.map(aq => {
      const source = questionList.find(f => f.id === aq.id)
      if(aq.selectedVariant === source?.correctAnswer) {
        return ({...aq, isCorrect: true})
      } else {
        return ({...aq, isCorrect: false})
      }
    })
  }
  
  // отменить тест (сбросить все сохраненные данные в стейтах)
  const cancelQuiz = (cb?: () => void) => {
    setCategoryData(undefined)
    setQuestionList([])
    setAnsweredQuestions([])
    setQuestionData(undefined)
    setResult(undefined)
    cb && cb()
  }

  // сбросить тесть (предполагается начать заново без сброса основных данных)
  const resetQuiz = (cb?: () => void) => {
    setAnsweredQuestions([])
    setQuestionData(undefined)
    setResult(undefined)
    cb && cb()
  }

  //получить данные о выбранной категории в зависимости от id
  const initCategoryData = (categoryId: number) => {
    const category = categories.find(f => f.id === categoryId)
    if(category) {
      setCategoryData({
        title: category.title,
        type: category.type,
        id: categoryId
      })
    }
  }

  //присвоить состояние вопросу 
  const setStateOfQuestion = (questionId: number):QuestionState => {
    const question = questionList.find(q => q.id === questionId)
    const answerData = answeredQuestions.find(q => q.id === questionId)
    const isAnswered = answerData ? true : false
    const isCorrect = answerData?.selectedVariant === question?.correctAnswer

    return ({
      isAnswered,
      isCorrect: quizState === 'done' ? isCorrect : undefined
    })

  }

  //начать тест после того как все данные готовы
  useEffect(() => {
    if(categoryId) {
      initCategoryData(categoryId)
      createQuestionList(categoryId)
    }
  }, [categoryId])

  //проверить текущее состояние теста
  useEffect(() => {
    if(questionList.length > 0 && questionList.length === answeredQuestions.length) {
      setQuizState('done')
    } else setQuizState('proccess')
  }, [answeredQuestions, questionList])

  return {
    data: {
      categoryData,
      questionList,
      answeredQuestions,
      questionData,
      quizState,
      result
    },
    actions: {
      createQuestionList,

      openQuestion,
      cancelQuestion,
      answerQuestion,
      setStateOfQuestion,

      getResult,
      cancelQuiz,
      resetQuiz,

      initCategoryData
    }
    
  }
}

export default useQuiz