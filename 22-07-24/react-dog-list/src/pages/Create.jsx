import { useState } from "react";
import { addDog } from "../api/dogClient";

const initialState = {
  id: "",
  type: "",
  name: "",
  description: "",
};

function Create() {
  const [form, setForm] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState({
    message: "",
    isError: false,
  });

  const nameValidation = !form.name.length;
  const typeValidation = !form.type.length;
  const descriptionValidation = !form.description.length;

  const formValidation =
    nameValidation || typeValidation || descriptionValidation;

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      const res = await addDog(form);
      setForm(initialState);
      console.log(res);
    } catch (error) {
      console.log(error);
      setIsError((prevState) => {
        return { ...prevState, message: error.message, isError: true };
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            Insert New Dog
          </h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            Insert name, type, description
          </p>

          <form
            onSubmit={handleSubmit}
            action="#"
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          >
            <div>
              <label className="sr-only">Name</label>

              <div className="relative">
                <input
                  value={form.name}
                  name="name"
                  onChange={handleChange}
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter name"
                />
              </div>
            </div>

            <div>
              <label className="sr-only">Type</label>

              <div className="relative">
                <input
                  value={form.type}
                  name="type"
                  onChange={handleChange}
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter type"
                />
              </div>
            </div>
            <div>
              <label className="sr-only">Description</label>

              <div className="relative">
                <input
                  value={form.description}
                  name="description"
                  onChange={handleChange}
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter description"
                />
              </div>
            </div>

            {isError.isError && (
              <div
                role="alert"
                className="rounded border-s-4 border-red-500 bg-red-50 p-4"
              >
                <strong className="block font-medium text-red-800">
                  {" "}
                  Something went wrong{" "}
                </strong>

                <p className="mt-2 text-sm text-red-700">{isError.message}</p>
              </div>
            )}

            {!isLoading ? (
              <button
                disabled={formValidation}
                type="submit"
                className={`block w-full rounded-lg bg-indigo-600 ${
                  formValidation ? "bg-slate-400" : ""
                } px-5 py-3 text-sm font-medium text-white`}
              >
                Submit
              </button>
            ) : (
              <button disabled>Is Loading...</button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Create;
