import React from "react";
import { useAppDispatch } from "../../store/hooks";
import { modalActions } from "../../store/Modal.store";
const BtnAddTask: React.FC<{ className?: string }> = ({ className }) => {
  const dispatch = useAppDispatch();

  const onOpenModal = () => {
    dispatch(modalActions.openModalCreateTask());
  };
  return (
    <>
      <button className={`btn  ${className} adicionarTarefa`} onClick={onOpenModal}>
        Nova tarefa
      </button>
    </>
  );
};

export default BtnAddTask;
