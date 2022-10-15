import User from "./components/User";
function App() {
  return (
    <div className="App">
    
      <User  name="Zeki" city="Ankara" age={25}/>
      <User name="Mehmet" city="Istanbul" age={20}/>
      <User name="Ahmet" city="Izmir" age={35}/>
    </div>
  );
}

export default App;
