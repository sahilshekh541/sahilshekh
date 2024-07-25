const Alert = ({ type, text }) => {
  return (
    <div className="absolute lg:top-[20%] sm:top-[20%] md:left-20 left-10 sm:left-0 md:right-0 right-10 sm:right-0  flex justify-center sm:justify-start items-center">
      <div
        className={`${
          type === "danger" ? "bg-red-800" : "bg-blue-800"
        } p-2 text-indigo-100 lg:rounded-full flex lg:inline-flex items-center gap-2`}
        role={alert}
      >
        <p
          className={`${
            type === "danger" ? "bg-red-500" : "bg-blue-500"
          } flex rounded-full uppercase px-2 py-1 font-semibold`}
        >
          {type === "danger" ? "Failed" : "Success"}
        </p>
        <p className="mr-2 text-left">{text}</p>
      </div>
    </div>
  );
};

export default Alert;
