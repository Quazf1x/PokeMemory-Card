import imgWin from "../img/win.gif";
import imgLoss from "../img/loss.gif";

function EndScreen({ onClick, isWin }) {
  const text = isWin ? "You won!" : "You lost :(";
  const image = isWin ? imgWin : imgLoss;

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
