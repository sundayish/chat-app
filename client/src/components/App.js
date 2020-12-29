import {useState} from "react";
import Login from "./Login";

function App() {
  const [id, setId] = useState()
  return(
    <>
      {id}
      <Login submitId={setId}/>
    </>
  )
}

export default App;
