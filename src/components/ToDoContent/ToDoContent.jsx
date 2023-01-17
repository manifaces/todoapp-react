import './ToDoContent.scss';

export const ToDoContent = ({title, children}) => {
  return (
    <div className="todo-content">
      <p className="todo-content__title">{title}</p>
      {children}
    </div>
  );
};
