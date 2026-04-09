import UserCard from "./UserCard"

function UserDirectory( {users} ) {
  return (
    <>
    {
      users.length > 0 ?
        users.map(({ id, name, email, role, avatar }) => <UserCard key={id} name={name} email={email} role={role} avatar={avatar} />) :
        "No users found"
    }
    </>
  )
}

export default UserDirectory