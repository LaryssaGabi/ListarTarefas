import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button, Container, ContainerGrid, ContainerList, Input, ListIcons } from './styles/styles';
import { FcFullTrash, FcCheckmark } from "react-icons/fc";

export default function App() {
  const [list, setList] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function ClickAdicionar() {
    if (newTask) {
      setList([...list, {
        id: uuidv4(),
        task: newTask,
        finished: false
      }]);
      setNewTask("");
    }
  }

  function finalizarTarefa(id) {
    const newTasks = list.map(item => (
      item.id === id ? { ...item, finished: !item.finished } : item
    ));
    setList(newTasks);
  }

  function deletarTarefa(id) {
    const deletTasks = list.filter(item => item.id !== id);

    setList(deletTasks);
  }

  return (
    <>
      <Container>
        <ContainerList>
          <ContainerGrid>
            <Input
              type="text"
              placeholder="O que eu tenho que fazer..."
              onChange={handleInputChange}
              value={newTask}
            />
            <Button onClick={ClickAdicionar}>Adicionar</Button>
          </ContainerGrid>

          <ul>
            {
              list.length > 0 ? (
                list.map(item => (
                  <ListIcons key={item.id} isFinished={item.finished}>
                    <FcCheckmark style={{ cursor: 'pointer' }} onClick={() => finalizarTarefa(item.id)} />
                    <li>{item.task}</li>
                    <FcFullTrash style={{ cursor: 'pointer' }} onClick={() => deletarTarefa(item.id)} />
                  </ListIcons>
                ))
              ) : (
                <h3>Não há tarefas na lista</h3>
              )
            }
          </ul>
        </ContainerList>
      </Container>
    </>
  )
}
