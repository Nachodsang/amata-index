import Search from "@/components/Search/Search";
import Table from "@/components/Table/Table";
export default function CompanyProfile() {
  return (
    <div className="bg-white rounded-xl min-h-[100vh] ">
      {/* container */}
      <div className="max-w-[1440px]  px-4 py-6  mx-auto">
        <h1 className="text-center font-semibold text-xl mb-4 ">
          Company Profile
        </h1>

        <div className="w-full  ">
          <div className="w-[30%] mx-auto">
            <Search />
          </div>
        </div>
        <Table />
      </div>
    </div>
  );
}
