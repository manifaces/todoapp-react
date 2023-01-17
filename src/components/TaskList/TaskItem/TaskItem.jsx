import './TaskItem.scss';

export const TaskItem = ({ title, amountItems, image }) => {
  return (
    <li className="task-item">
      <div className="task-item__content">
        <div className="task-item__image">
          <img src={image} alt="" />
        </div>
        <p className="task-item__title">{title}</p>
        <p className="task-item__amount">{amountItems} Task</p>
      </div>
    </li>
  );
};
