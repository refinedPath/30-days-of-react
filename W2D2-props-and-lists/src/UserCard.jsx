function UserCard({ name, email, role="guest" }) {
  return (
    <div style={{width: '150px', border: '1px solid grey', borderRadius: '5px', padding: '5px 10px', textAlign: 'right'}}>
      {name}
      <br />
      {email}
      <br />
      {role === "admin" ? <span style={{fontWeight: 'bold'}}>{role}</span> : role}
    </div>
  )
}

export default UserCard