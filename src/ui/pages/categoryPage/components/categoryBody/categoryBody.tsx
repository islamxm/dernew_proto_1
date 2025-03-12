import { useQuizContext } from "@/core/quiz/context"
import Question from "@/ui/common/question/question"

const CategoryBody = () => {
  const quiz = useQuizContext()

  return (
    <>
      {
        quiz?.data.questionList.map(question => (
          <Question
            state={quiz?.actions.setStateOfQuestion(question.id)}
            onClick={quiz?.actions.openQuestion}
            question={question}
          />
        ))
      }
    </>
  )
}
export default CategoryBody