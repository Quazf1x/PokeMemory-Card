import Card from "./Card";

function MainScreen() {
  return (
    <div className="game-wrapper">
      <h2>0/5</h2>
      <div className="card-wrapper">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}

export default MainScreen;