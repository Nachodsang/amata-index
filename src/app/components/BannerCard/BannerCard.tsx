export default function BannerCard({ num }: { num: number }) {
  return (
    <div className="bg-gray-300 w-full h-full rounded-xl flex justify-center items-center ">
      <div className="text-4xl font-extrabold text-gray-500">Banner {num}</div>
    </div>
  );
}
