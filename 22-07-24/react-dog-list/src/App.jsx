import { labels } from "./data/labels";
import { useEffect, useState } from "react";
import { getDogList } from "./api/dogClient";

function App() {
  const [dogs, setDogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getDogs = async () => {
    try {
      const data = await getDogList();
      setDogs(data);
    } catch (error) {
      console.log("Error:", error);
    } /* finally {
      setIsLoading(false);
    } */
  };

  useEffect(() => {
    getDogs();
  }, []);

  /* if (isLoading) return <p>is loading..</p>; */

  return (
    <>
      <div className="flex justify-center">
        <main className="w-[1200px] ">
          <div className="p-4 ">
            <h1 className="">{labels.DogList}</h1>
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
                {dogs.map((dog) => {
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
                        <a
                          href="#"
                          className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                        >
                          View
                        </a>
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