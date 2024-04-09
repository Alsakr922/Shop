import Swal from "sweetalert2";

const Error = () => {
  return (
    <div className="grid grid-cols-1 h-screen items-center justify-items-center">
      <div className="w-[96]">
          {Swal.fire({
            title: "No!",
            text: "Sorry no products match your filter search ... Clear the filter and try again 😀..",
            icon: "error",
          })}

      </div>
    </div>
  );
};

export default Error;
