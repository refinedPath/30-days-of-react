import iconsImg from '/favicon.svg'
import UserDirectory from './UserDirectory'
import './App.css'

function App() {
  const users = [
    {
      id: 1,
      name: "Alice",
      email: "alice@example.com",
      role: "admin",
      avatar: iconsImg
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
    {
      <UserDirectory users={users} />
    }
    </>
  )
}

export default App