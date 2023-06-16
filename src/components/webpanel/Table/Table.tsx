import Entry from "../Entry/Entry";
export default function Table() {
  let arr = [];
  for (let i = 1; i <= 100; i++) {
    arr.push(i);
  }
  return (
    <div className="flex flex-col mx-auto">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                <tr>
                  <th scope="col" className="px-6 py-4 text-black text-xl">
                    #
                  </th>
                  <th scope="col" className="px-6 py-4 text-black text-xl">
                    Image
                  </th>
                  <th scope="col" className="px-6 py-4 text-black text-xl">
                    Company
                  </th>
                  <th scope="col" className="px-6 py-4 text-black text-xl">
                    Created
                  </th>
                  <th scope="col" className="px-6 py-4 text-black text-xl">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {arr.map((i) => (
                  <Entry index={i} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
