import Header from "./components/Header";
import Form from "./components/Form";
import PatientsList from "./components/PatientsList";
function App() {
  console.log("test");
  return (
    <div className="container mx-auto mt-10">
      <Header />
      <div className="md:flex mt-10">
        <Form />
        <PatientsList />
      </div>
    </div>
  );
}

export default App;
