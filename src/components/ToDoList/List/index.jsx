import React from 'react';
import "../styles.css";

function List({ listTexts, setListTexts }) {

  

  // Itemi silmək üçün funksiya
  const deleteItem = (index) => {
    const updatedList = listTexts.filter((_, i) => i !== index);
    setListTexts(updatedList);
  };

  const toggleComplete = (index) => {
    const updatedList = [...listTexts];
    updatedList[index].completed = !updatedList[index].completed;
    setListTexts(updatedList);
  };

  return (
    <div className="todo-list">
      <ul>
        {listTexts.map((listText, i) => (
          <li key={i} className={`todo-item ${listText.completed ? 'completed' : ''}`}>
            
            <div 
              className={`circle ${listText.completed ? 'checked' : ''}`}
              onClick={() => toggleComplete(i)} 
            >
              {listText.completed && '✔'} 
            </div>
            <div>
              {listText.text}
            </div>

            {/* Silmək üçün x düyməsi */}
            <div className="delete-button" onClick={() => deleteItem(i)}>
              &#10006; {/* Unicode ilə x simvolu */}
            </div>
          
          </li>  
        ))}
      </ul>
    </div>
  );
}

export default List;
