import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { ToDoTags } from '../ToDoTags/ToDoTags';

import useFirstRender from '../../../lib/useFirstRender';
import { addItem } from '../../../store/todoSlice';

import './ToDoForm.scss';

export const ToDoForm = ({ show, showModal }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentCategory, setCurrentCategory] = useState('');
  const dispatch = useDispatch();
  const firstRender = useFirstRender();
  const form = useRef(null);
  const radioButtons = useRef([]);
  useEffect(() => {
    if (!firstRender) {
      form.current.setAttribute('data-show', show ? 'true' : 'false');
    }
  });
  const onAddItem = (event) => {
    event.preventDefault();
    if (currentText.trim().length && currentCategory) {
      dispatch(addItem({currentText, currentCategory}));
      showModal();
      setCurrentText('');
      setCurrentCategory('');
      for (const button of Object.values(radioButtons)) {
        button.checked = false;
      }
    }
  };
  const setCategory = (category) => {
    setCurrentCategory(category);
  };
  return (
    <form ref={form} className="todo-form">
      <p className="todo-form__text">Add new task</p>
      <input type="text" className="todo-form__input" value={currentText} onChange={(e) => setCurrentText(e.target.value)} />
      <ToDoTags setCategory={setCategory} radioButtons={radioButtons} />
      <button type="submit" className="todo-form__btn" onClick={(e) => {onAddItem(e); }}>Add task</button>
    </form>
  );
};