import badgeImg from './assets/react.svg'

function Badge() {
  return (
    <>
    <div style={{width: '50px', height: '50px', margin: '0 auto'}}>
      <img src={badgeImg} alt="Badge" />
    </div>
    </>
  )
}

export default Badge