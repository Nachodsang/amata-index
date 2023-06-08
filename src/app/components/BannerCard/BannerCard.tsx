export default function BannerCard({ num }: { num: number }) {
  return (
    <div className="bg-gray-400/50 hover:cursor-pointer w-full h-full rounded-xl flex justify-center items-center hover:shadow-2xl">
      <div className="text-4xl font-extrabold text-gray-500">Banner {num}</div>
    </div>
  );
}
