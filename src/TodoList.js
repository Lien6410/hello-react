import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import {
  Button,
  Container,
  FormControl,
  InputGroup,
  Navbar,
} from 'react-bootstrap'

function fetchTodos() {
  return [
    { id: 1, text: 'Buy milk', completed: true },
    { id: 2, text: 'Buy eggs', completed: true },
    { id: 3, text: 'Buy bread', completed: false },
  ]
}

function ToDoItem(props) {
  return (
    <InputGroup key={props.id}>
      <InputGroup.Checkbox
        checked={props.completed}
        onChange={props.onToggle}
      />
      <FormControl
        value={props.text}
        style={{
          textDecoration: props.completed ? 'line-through 4px' : 'none',
        }}
      />
      <Button variant="outline-danger" onClick={props.onDelete}>
        <span role="img" aria-label="delete">
          ❌
        </span>
      </Button>
    </InputGroup>
  )
}

function TodoList() {
  const [todos, setTodos] = React.useState(fetchTodos())

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">代辦事項</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        {todos.map((todo) => (
          <ToDoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onDelete={() => {
              setTodos(todos.filter((x) => x.id !== todo.id))
            }}
            onToggle={() => {
              setTodos(
                todos.map((x) =>
                  x.id === todo.id ? { ...x, completed: !x.completed } : x
                )
              )
            }}
          />
        ))}
      </Container>
    </>
  )
}

export default TodoList
