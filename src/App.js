
import { useState } from 'react';
import Header from './Components/Header';
import TodoList from './Components/TodoList';
import { Toaster } from 'react-hot-toast';

function App() {

  const [Tasks, setTasks] = useState([])

  return (
    <>
      <Toaster />
      <div className='mt-12 w-screen h-screen flex flex-col items-center gap-8 '>

        <Header Tasks={Tasks} setTasks={setTasks} />
        <TodoList Tasks={Tasks} setTasks={setTasks} />
      </div>

    </>
  );
}

export default App;
