import React from "react";
import AccountData from "./components/AccountSection/AccountData";
import Menu from "./components/Menu/Menu";
import TasksSection from "./components/TasksSection/TasksSection";
import ModalCreateTask from "./components/Utilities/ModalTask";
import { Task } from "./interfaces";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { modalActions } from "./store/Modal.store";
import { tasksActions } from "./store/Tasks.store";
import { segrecacaoAcesso } from "./segregacao_acesso";
// segrecacaoAcesso()
const App: React.FC = () => {
  const modal = useAppSelector((state) => state.modal);

  const dispatch = useAppDispatch();
  const createNewTaskHandler = (task: Task) => {
    dispatch(tasksActions.addNewTask(task));
  };

  const closeModalCreateTask = () => {
    dispatch(modalActions.closeModalCreateTask());
  };



  return (
      <div>

    <div className="bg-slate-200 min-h-screen text-slate-600 dark:bg-slate-900 dark:text-slate-400 xl:text-base sm:text-sm text-xs">

      {modal.modalCreateTaskOpen && (
        <ModalCreateTask
          onClose={closeModalCreateTask}
          nameForm="Adicione uma nova tarefa"
          onConfirm={createNewTaskHandler}
        />
      )}
      <Menu />
      <TasksSection />
      <AccountData />
    </div>
      </div>
  );
};

export default App;
