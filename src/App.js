import './App.css';
import img1 from './image/giphy-downsized-large11.gif'

function Fact(props) {
  return(
      <p>{props.fact}</p>
  )
}

function App() {
  let f1="В природе шиншиллы живут на высоте до пяти тысяч метров — на высокогорье Анд в Аргентине, Чили, Перу и Боливии.";
  let f2="У шиншилл самый густой мех среди всех наземных млекопитающих. Из одной фолликулы у них могут вырастать 50-70 шерстинок. При этом их мех очень мягкий на ощупь.";
  let f3="Шиншиллы легко могут усыновить чужих осиротевших малышей. А самцы принимают активное участие в заботе о потомстве.";
  return (
    <div className="App">
     <h1>Шиншилла</h1>
     <Fact fact={f1}/>
     <Fact fact={f2}/>
     <Fact fact={f3}/>
     <img src={img1} alt={"img"}/>
    </div>
  );
}

export default App;
