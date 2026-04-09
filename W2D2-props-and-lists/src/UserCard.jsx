function UserCard({ name, email, role="guest", avatar }) {
  return (
    <div style={{width: '150px', border: '1px solid grey', borderRadius: '5px', padding: '5px 10px', textAlign: 'right'}}>
      { avatar ?<img src={avatar} style={{width: '25px'}} /> : <div style={{width: '20px', border: '1px solid grey', borderRadius: '50%', textAlign: 'center', marginLeft: 'auto'}}>{name[0]}</div>}
      <br />
      {name}
      <br />
      {email}
      <br />
      {role === "admin" ? <span style={{fontWeight: 'bold'}}>{role}</span> : role}
    </div>
  )
}

export default UserCard