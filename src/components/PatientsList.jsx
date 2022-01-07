import Patient from "./Patient";
const PatientsList = ({ patients }) => {
  return (
    <div className="md:w-1/2 shadow-md rounded-md bg-white">
      <h1>Patients list component</h1>
      {patients.map((patient) => (
        <Patient />
      ))}
    </div>
  );
};

export default PatientsList;
