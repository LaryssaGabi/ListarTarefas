import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Container, ContainerList } from './styles/styles';

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
          <input
            type="text"
            placeholder="O que eu tenho que fazer..."
            onChange={handleInputChange}
            value={newTask}
          />
          <button onClick={ClickAdicionar}>Adicionar</button>

          <ul>
            {list.map(item => (
              <li key={item.id}>{item.task}</li>
            ))}
          </ul>
        </ContainerList>
      </Container>
    </>
  )
}
