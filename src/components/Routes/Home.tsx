import React from "react";
import LayoutRoutes from "../Utilities/LayoutRoutes";
import { useAppSelector } from "../../store/hooks";
import useDescriptionTitle from "../hooks/useDescriptionTitle";

const Home: React.FC = () => {
  const tasks = useAppSelector((state) => state.tasks.tasks);

  useDescriptionTitle("Organize suas tarefas", "Todas as tarefas");
  return <LayoutRoutes title="Todas as tarefas" tasks={tasks}></LayoutRoutes>;
};

export default Home;
