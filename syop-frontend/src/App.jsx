import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import { BACKEND_URL } from "./Backend_url";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get(`${BACKEND_URL}/api/hello`).then((res) => {
      console.log("this is the data", res.data);
    });
  }, []);

  return <></>;
}

export default App;
