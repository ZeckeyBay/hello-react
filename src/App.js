import User from "./components/User";
import Colors from "./components/Colors";

const user={
  name : "Zeki",
  city : "Ankara",
  age : 25
};
function App() {
  return (
    <div className="App">
    
      <User  data={user} friends={["Ahmet","Mehmet","Ayşe"]} />
      <Colors></Colors>
      
    </div>
  );
}

export default App;
