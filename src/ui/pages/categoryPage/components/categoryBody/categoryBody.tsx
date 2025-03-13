import { useQuizContext } from "@/core/quiz/context"
import Question from "@/ui/common/question/question"

const CategoryBody = () => {
  const quiz = useQuizContext()

  return (
    <>
      {
        quiz?.data.questionList.map((question, index) => (
          <Question
            state={quiz?.actions.setStateOfQuestion(question.id)}
            onClick={quiz?.actions.openQuestion}
            question={question}
            orderNumber={index + 1}
          />
        ))
      }
    </>
  )
}
export default CategoryBody