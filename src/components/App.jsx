import Counter from './Counter'
import Form from './Form'
import Fruits from './Fruits'
import ConditionalComponent from './conditionalComponent'

function App() {

  const person = {
    name: "usman",
    message: "come over",
    seatNumber: [1, 2, 3]
  }

  return (
    <>
      <Form />
      {/* <Counter /> */}
      {/* <Fruits /> */}

      {/* <ConditionalComponent /> */}
    </>
  )
}

export default App
