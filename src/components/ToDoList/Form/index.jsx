import { useState } from 'react';
import "../styles.css";

function Form({ listTexts, setListTexts }) {
  const [addText, setAddText] = useState(''); 
  const [allCompleted, setAllCompleted] = useState(false)

  
  const onChangeAdd = (e) => setAddText(e.target.value);

  
  const onSubmit = (e) => {
    e.preventDefault(); 
    if (addText === "") return false;
    setListTexts([...listTexts, { text: addText, completed: false }]);
    setAddText('');
  };

  const toggleAllCompleted = () => {
    const updatedList = listTexts.map(item =>({
      ...item,
      completed: !allCompleted
    }));
    setListTexts(updatedList);
    setAllCompleted(!allCompleted);

  };
  

  return (
    <form onSubmit={onSubmit} className="form-container">
      <div>
      <button type="button" onClick={toggleAllCompleted}>
           {allCompleted ? 'X' : '✓ '}
      </button>

      </div>
      <input 
        onChange={onChangeAdd} 
        value={addText}
        name="toDoText"
        placeholder="Enter a new to-do"
        className="todo-input"
      />
      <button type="submit" className="add-button">Add</button>
    </form>
  );
}

export default Form;
