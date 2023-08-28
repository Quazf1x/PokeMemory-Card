function StartScreen({ onSubmit }) {

  function RadioButton({ name, labelText, defaultChecked }) {
    return(
      <label>
        <input name={name} value={labelText} type='radio' defaultChecked={defaultChecked}/>
        <span className="arrow-right"></span>
        {labelText}
      </label>
    )
  }

  return(
    <div id='start-wrapper' className='screen-wrapper'>
      <div className='start-end-wrappers'>
        <h2>Choose difficulty:</h2>
        <form onSubmit={onSubmit} id='difficulty-menu'>
          <div>
            <RadioButton name='difficulty' labelText='Easy'/>
            <RadioButton name='difficulty' labelText='Meduim' defaultChecked/>
            <RadioButton name='difficulty' labelText='Hard'/> 
          </div>
          <button id='start-btn' className='start-end-btns'>Start game</button>
        </form>
      </div>
    </div>
  )
}

export default StartScreen;