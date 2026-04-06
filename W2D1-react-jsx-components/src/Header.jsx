import NavBar from "./NavBar";
import ProfileCard from "./ProfileCard";

function Header() {
  return (
    <>
    <div style={{border: '1px solid grey'}}>
      <ProfileCard />
      <NavBar />
    </div>
    </>
  )
}

export default Header