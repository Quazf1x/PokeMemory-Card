function EndScreen({ onClick, isWin }) {
  const text = isWin ? "You won!" : "You lost :(";
  const image = isWin ? "src/assets/img/win.gif" : "src/assets/img/loss.gif";

  return (
    <div id="end-wrapper" className="screen-wrapper">
      <div className="start-end-wrappers">
        <h2>{text}</h2>
        <img src={image} />
        <button onClick={onClick} className="start-end-btns">
          Play Again
        </button>
      </div>
    </div>
  );
}

export default EndScreen;
