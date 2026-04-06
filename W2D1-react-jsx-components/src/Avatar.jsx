import heroImg from './assets/vite.svg';

function Avatar() {
  return (
    <>
    <div style={{width: '75px', height: '50px', backgroundImage: `url(${heroImg})`, backgroundRepeat: 'no-repeat', margin: '0 auto'}}></div>
    </>
  )
}

export default Avatar