import AddTodo from "./Components/AddTodo"
import Header from "./Components/Header"
import TodoItem from "./Components/TodoItem"


function App() {
  return (
    <>
      <div className="">

      <Header/>
        
      <AddTodo/>

      <TodoItem task='Study' date='26/12/2024'/>
      <TodoItem task='Code' date='13/01/2024'/>

        {/* <div className="flex space-x-2 align-middle text-center mx-auto px-5 my-5">
          <div className="w-[50%]">
            <p className="">code</p>
          </div>
          <div className="w-[50%]">
            <p className="">4/12/2024</p>
          </div>
          <div className="w-[20%]">
            <button className="px-7 py-2 bg-red-600 text-white rounded-lg">
              Delete
            </button>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default App
