import '../assets/styles/button.css'
function button({ text, isClickButton, clickHandler }) {
  return (
    <button
      className={ isClickButton ? 'click-button' : 'reset-button' }
      onClick={clickHandler}>
      {text}
    </button>
  )
}

export default button