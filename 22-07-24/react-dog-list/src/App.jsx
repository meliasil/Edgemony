import { labels } from "./data/labels";
import { useEffect, useState } from "react";
import { getDogList } from "./api/dogClient";
import { Link } from "react-router-dom";


function App() {
  
  const [dogs, setDogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("");

  const getDogs = async () => {
    try {
      const data = await getDogList();
      setDogs(data);
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFilter(e.target.value.toLowerCase());
  };

  useEffect(() => {
    getDogs();
  }, []);

  if (isLoading) return <p>is loading..</p>;

  return (
    <>
      <div className="flex justify-center">
        <main className="w-[1200px] ">
          <div className="p-4 ">
            <h1 className="font-bold">{labels.dogList}</h1>
          </div>
          <div className="flex gap-2 items-center">
            <input type="text"
            value={filter}
            placeholder="Insert Dog Name"
            onChange={handleChange}
            />
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
              <thead className="text-left">
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {labels.dogListName}
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {labels.dogListType}
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {labels.dogListId}
                  </th>
                  <th className="px-4 py-2"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {dogs.filter((dog) => dog.name.toLowerCase().includes(filter))
                .map((dog) => {
                  return (
                    <tr key={dog.id}>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        {dog.name}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {dog.type}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {dog.id}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2">
                        <Link
                          to={`/dog/${dog.id}`}
                          className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                        >
                          View
                        </Link>
                      </td> 
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;