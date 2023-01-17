import './ToDoFooterButton.scss';

export const ToDoFooterButton = ({image, text, children}) => {
  return (
    <div className="todo-footer__button">
      {children}
      <div className="todo-footer__icon">
        {image}
      </div>
      <p className="todo-footer__text">{text}</p>
    </div>
  );
};