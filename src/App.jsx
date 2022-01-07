import Header from "./components/Header";
import Form from "./components/Form";
import PatientsList from "./components/PatientsList";
import { useState } from "react";

function App() {
  const [patients, setPatients] = useState([{}]);
  return (
    <div className="container mx-auto mt-10">
      <Header />
      <div className="md:flex mt-10">
        <Form patients={patients} setPatients={setPatients} />
        <PatientsList patients={patients} />
      </div>
    </div>
  );
}

export default App;
