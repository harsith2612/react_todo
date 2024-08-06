import AddTodo from "./Components/AddTodo"
import Header from "./Components/Header"
import TodoItem from "./Components/TodoItem"


function App() {
  const taskList = [{
    task: 'Study',
    date: '26/12/2020'
  },
  {
    task: 'Code',
    date: '13/01/2024'
  }]
  return (
    <>
      <div className="">

        <Header />

        <AddTodo />

        <TodoItem taskList={taskList}></TodoItem>

        {/* <TodoItem task='Study' date='26/12/2024' />
        <TodoItem task='Code' date='13/01/2024' /> */}
      </div>
    </>
  )
}

export default App
