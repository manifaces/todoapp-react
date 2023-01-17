import { useSelector } from 'react-redux';

import './ToDoWelcome.scss';

export const ToDoWelcome = () => {
  const amountItems = useSelector(state => state.todos.items.length);
  return (
    <>
      <div className="todo-welcome">
        <p className="todo-welcome__title">
          Hello nomenEst!
        </p>
        <p className="todo-welcome__text">
          Today you have <span className="todo-amount">{amountItems || 'no'}</span> tasks
        </p>
      </div>
      <div className="todo-header__user">
        <img src="https://i.postimg.cc/j2k2Fpq1/avatar.png" alt="User" />
      </div>
    </>
  );
};