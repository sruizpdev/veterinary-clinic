import React, { useState } from "react";
import Error from "./Error";

const Form = () => {
  const [pet, setPet] = useState("");
  const [owner, setOwner] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [error, setError] = useState(false);

  const generateId = () => {
    const random = Math.random().toString(36).substring(2);
    const day = Date.now().toString(36);
    return random + day;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([pet, owner, email, date, symptoms].includes("")) {
      setError(true);
      return;
    }
    setError(false);
    const patient = {
      pet,
      owner,
      email,
      date,
      symptoms,
      id: generateId(),
    };
  };

  return (
    <div className="md:w-1/2 shadow-md rounded-md bg-white">
      <h1>Form component</h1>
      {error && <Error message="Error" />}
      <form className="p-10" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label htmlFor="pet" className="uppercase">
            Name of the pet
          </label>
          <input
            type="text"
            id="pet"
            className="border-2 w-full p-2 mt-2 rounded-md"
            placeholder="Pet name"
            value={pet}
            onChange={(e) => setPet(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="owner" className="uppercase">
            Name of the owner
          </label>
          <input
            type="text"
            id="owner"
            className="border-2 w-full p-2 mt-2 rounded-md"
            placeholder="Owner name"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="uppercase">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="border-2 w-full p-2 mt-2 rounded-md"
            placeholder="contact email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="date" className="uppercase">
            Date
          </label>
          <input
            type="date"
            id="date"
            className="border-2 w-full p-2 mt-2 rounded-md"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="symptoms" className="uppercase">
            Symptoms
          </label>
          <textarea
            id="symptoms"
            className="border-2 w-full p-2 mt-2 rounded-md"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          ></textarea>
        </div>
        <input
          type="submit"
          value="send"
          className="bg-indigo-700 w-full py-2 rounded-md text-white uppercase font-bold"
        />
      </form>
    </div>
  );
};

export default Form;
