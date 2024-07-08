import styles from "./Todo.module.css";
import { useState } from "react";

const initialTodos = [
  {
    id: self.crypto.randomUUID(),
    title: "Fare la spesa",
  },
  {
    id: self.crypto.randomUUID(),
    title: "Rinnovare assicurazione",
  },
];

function Todo() {
  const [todos, setTodos] = useState(initialTodos);
  const [input, setInput] = useState("");

  const AddTodo = () => {
    if (!input.length) return;

    const id = self.crypto.randomUUID();
    const title = input;

    setTodos([...todos, { id, title }]);
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <div className={styles.container}>
        <input value={input} className={styles.inp} placeholder="Insert To Do" onChange={handleChange}/>
        <button className={styles.buttonAdd} onClick={AddTodo}>
          Add
        </button>

        <div className={styles.container__list}>
          <h2>To Do's Added:</h2>
          <ul>
            {todos.map((todo) => {
              return (
                <li key={todo.id} className={styles.listEl}>
                  {todo.title}
                  {""}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Todo;
