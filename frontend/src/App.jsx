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
    setList([...list, {
      id: uuidv4(),
      task: newTask
    }]);
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
            {list.map(item => (
              <ListIcons key={item.id}>
                <FcCheckmark />
                <li >{item.task}</li>
                <FcFullTrash />
              </ListIcons>
            ))}
          </ul>
        </ContainerList>
      </Container>
    </>
  )
}
