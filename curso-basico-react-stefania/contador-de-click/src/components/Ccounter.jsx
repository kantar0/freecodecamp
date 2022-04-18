import '../assets/styles/Ccounter.css'
function Ccounter({ ClicksNumber, clickHandler }) {
  return (
    <div className='Ccounter'>
      {ClicksNumber}
    </div>
  )
}

export default Ccounter
