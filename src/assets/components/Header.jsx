function Header( {currentScore, currentHigh}) {
  return(
    <header>
      <h1>PokeMemory</h1>
      <div className="header-text-wrapper">
        <p>Score:{currentScore}</p>
        <p>High Score:{currentHigh}</p>
      </div>
    </header>
  )
}

export default Header;