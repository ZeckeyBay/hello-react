import User from "./components/User";

const user={
  name : "Zeki",
  city : "Ankara",
  age : 25
};
function App() {
  return (
    <div className="App">
    
      <User  data={user} friends={["Ahmet","Mehmet","Ayşe"]} />
      
    </div>
  );
}

export default App;
