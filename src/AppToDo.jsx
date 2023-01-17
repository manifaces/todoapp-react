import { Routes, Route } from 'react-router-dom';

import { ToDoLayout } from './components/ToDoLayout';
import { Homepage } from './pages/Homepage';
import { Taskpage } from './pages/Taskpage';
import './AppToDo.scss';

function AppToDo() {
  return (
    <Routes>
      <Route path="/" element={<ToDoLayout />}>
        <Route index element={<Homepage />} />
        <Route path="task" element={<Taskpage />} />
      </Route>
    </Routes>
  );
}

export default AppToDo;
