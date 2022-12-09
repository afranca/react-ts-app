import React from "react";

interface TodoListProps {
  items: { id: string; text: string }[];
  onRemoveItem: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>
          <span>{item.text} </span>
          <button onClick={props.onRemoveItem.bind(null, item.id)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
