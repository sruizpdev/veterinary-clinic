import React from "react";

const Form = () => {
  return (
    <div className="md:w-1/2 shadow-md rounded-md bg-white">
      <h1>Form component</h1>
      <form className="p-10">
        <div className="mb-5">
          <label htmlFor="pet" className="uppercase">
            Name of the pet
          </label>
          <input
            type="text"
            id="pet"
            className="border-2 w-full p-2 mt-2 rounded-md"
            placeholder="Pet name"
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
          />
        </div>
        <div className="mb-5">
          <label htmlFor="symptoms" className="uppercase">
            Symptoms
          </label>
          <textarea
            id="symptoms"
            className="border-2 w-full p-2 mt-2 rounded-md"
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
