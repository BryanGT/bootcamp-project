import { Button } from "./components/Button"
import ExpensiveCalculationComponent from "./components/ExpensiveCalculationComponent"
import ItemContainer from "./components/ItemList"

function App() {

  return (
    <main className="container flex flex-col gap-8 justify-center items-center min-h-screen p-8 text-center mx-auto">
      <h1 className="text-5xl md:text-7xl font-bold text-balance max-w-screen-lg">
        Welcome to the Typescript Fullstack Project!
      </h1>
      <p>This is the client starting point 🚀</p>
      <Button variant="secondary">
        hello
      </Button>
      <ExpensiveCalculationComponent/>
      <ItemContainer />
    </main>
  )
}

export default App
