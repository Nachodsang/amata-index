import Entry from "../Entry/Entry";
export default function Table({
  list,
  col2,
  col3,
  col4,
  col5,
  onChange,
  onChangeOrder,
  type,
}: any) {
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
                  <th
                    scope="col"
                    className="px-6 py-4 text-black text-xl capitalize"
                  >
                    {col2}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-black text-xl capitalize"
                  >
                    {col3}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-black text-xl capitalize"
                  >
                    {col4}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-black text-xl capitalize"
                  >
                    {col5}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-black text-xl capitalize"
                  >
                    Status
                  </th>
                </tr>
              </thead>
              {type === "company" ? (
                <tbody>
                  {list.map((i: any, index: any) => {
                    const {
                      _id,
                      companyTitle,
                      updatedAt,
                      status,

                      edition,
                      generalInfo,
                    } = i;

                    // convert date to local
                    const localDate = `${new Date(updatedAt)
                      .getDate()
                      .toString()
                      .padStart(2, "0")}/${(new Date(updatedAt).getMonth() + 1)
                      .toString()
                      .padStart(2, "0")}/${new Date(updatedAt).getFullYear()}`;

                    return (
                      <Entry
                        _id={_id}
                        onChangeOrder={onChangeOrder}
                        onChange={onChange}
                        key={_id}
                        index={index + 1}
                        title={companyTitle}
                        date={localDate}
                        company={generalInfo?.companyNameEn}
                        companyNameTh={generalInfo?.companyNameTh}
                        image={generalInfo?.logo}
                        description={companyTitle}
                        status={status}
                        link={`${generalInfo?.profileUrl}`}
                        order={edition}
                        type={type}
                      />
                    );
                  })}
                </tbody>
              ) : (
                <tbody>
                  {list.map((i: any, index: any) => {
                    const {
                      _id,
                      bannerTitle,

                      adTitle,
                      updatedAt,
                      client,
                      image,
                      description,
                      status,
                      link,
                      edition,
                    } = i;
                    let type;
                    adTitle ? (type = "ad") : (type = "banner");
                    // convert date to local
                    const localDate = `${new Date(updatedAt)
                      .getDate()
                      .toString()
                      .padStart(2, "0")}/${(new Date(updatedAt).getMonth() + 1)
                      .toString()
                      .padStart(2, "0")}/${new Date(updatedAt).getFullYear()}`;

                    return (
                      <Entry
                        onChangeOrder={onChangeOrder}
                        onChange={onChange}
                        key={_id}
                        index={index + 1}
                        title={bannerTitle || adTitle}
                        date={localDate}
                        company={client}
                        image={image}
                        description={description}
                        status={status}
                        link={link}
                        order={edition}
                        type={type}
                      />
                    );
                  })}
                </tbody>
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
