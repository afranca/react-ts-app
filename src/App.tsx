import React, { useState } from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import { Todo } from "./models/todo.model";

const App: React.FC = () => {  
  const [todos, setTodos] = useState<Todo[]>([]);
  const todoAddHandler = (text: string) => {
    console.log("Adding todo from App.tsx");    
    setTodos( prevTodos => [...prevTodos, { id: Math.random().toString(), text: text }]);
  };

  const todoRemoveHandler = (id: string) => {
    console.log("Removing todo from App.tsx");
    console.log(id);
    setTodos( prevTodos => {
      return prevTodos.filter( (todo) => todo.id !== id);
    });
  };  

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler}/>
      <TodoList items={todos} onRemoveItem={todoRemoveHandler}/>
    </div>
  );
};

export default App;
