const Error = ({ message }) => {
  return (
    <div className="bg-red-800 uppercase font-bold p-3 rounded-md text-white text-center mx-2">
      <h1>{message}</h1>
    </div>
  );
};

export default Error;
