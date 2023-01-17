import { useSelector } from 'react-redux';

import './ToDoTags.scss';

export const ToDoTags = ({ setCategory, radioButtons }) => {
  const tags = useSelector(state => state.todos.categories);
  return (
    <div className="todo-tags">
      {tags.map((tag, i) =>
        <div className="todo-tags__item" key={i} data-category={tag}>
          <input type="radio" name="tags" id={tag} value={tag} ref={el => radioButtons[i] = el} onChange={(e) => setCategory(e.target.value)} className="todo-tags__radio" />
          <label htmlFor={tag}></label>
          <span className="todo-tags__plug"></span>
          <span className="todo-tags__text">{tag}</span>
        </div>
      )}
    </div>
  );
};