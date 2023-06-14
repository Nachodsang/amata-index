export default function Ad({ index }: { index: number }) {
  return (
    <div className="min-w-[300px] h-[280px] rounded-lg bg-gray-200 flex justify-center items-center">
      <div className=" text-center  text-2xl font-extrabold text-gray-600  ">
        Ad {index}
      </div>
    </div>
  );
}
