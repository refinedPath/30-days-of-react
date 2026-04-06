import Avatar from "./Avatar";
import Badge from "./Badge";

function ProfileCard() {
  return (
    <>
    <div style={{width: '350px', height: '150px', border: '1px solid grey', borderRadius: '5px'}}>
      UserName
      <Avatar />
      <Badge />
    </div>
    </>
  )
}

export default ProfileCard