import React, { useState } from 'react'
import Form from './Form/index.jsx'
import List from './List/index.jsx'
import "./styles.css";

function ToDo() {
  // Əsas state: siyahı və tamamlanma durumu
  const [listTexts, setListTexts] = useState([
    { text: 'js', completed: false },
    { text: 'add', completed: false },
    { text: 'lorem', completed: false }
  ]);

  // Filtrləmə üçün state
  const [filter, setFilter] = useState("all"); // all, active, completed

  // Filterə görə siyahını süzmək
  const filteredList = listTexts.filter(item => {
    if (filter === "active") return !item.completed;
    if (filter === "completed") return item.completed;
    return true; // all
  });

  return (
    <div>
      <Form listTexts={listTexts} setListTexts={setListTexts} />
      <List listTexts={filteredList} setListTexts={setListTexts} />

      {/* Filtr düymələri */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>
    </div>
  );
}

export default ToDo;
