import Greeting from './Greeting'
import UserCard from './UserCard'
import './App.css'

function App() {
  const users = [
    {
      id: 1,
      name: "Alice",
      email: "alice@example.com",
      role: "admin"
    },
    {
      id: 2,
      name: "Bob",
      email: "bob@example.com",
      role: "user"
    },
    {
      id: 3,
      name: "Carol",
      email: "carol@example.com"
    }
  ]

  return (
    <>
    <Greeting name="world" />
    <br />
    <Greeting name="username" />
    <br />
    <Greeting name="universe" />
    <br />
    <br />
    {
      users.map(({ id, name, email, role }) => <UserCard key={id} name={name} email={email} role={role} />)
    }
    </>
  )
}

export default App
