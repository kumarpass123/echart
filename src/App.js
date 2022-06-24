
import { useState } from "react/react.production.min";
import './App.css';
import BarChart from "./components/BarChart";
import { userData } from './Data';

function app() {

  const [userData, setUserData] = useState({
    labels: userData.map((Data) => Data.year),
    datasets: [{
      label:"User Gained",
      dat: userData.map((Data) => Data.userGain),

    }]
  })

return (
   <div className="App">
    <BarChart chardata={userData} />
  </div>
);
}

export default app;
