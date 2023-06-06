import BannerCard from "../BannerCard/BannerCard";
export default function Banner() {
  let banners: number[] = [];
  for (let i = 0; i < 3; i++) {
    banners.push(i);
  }
  return (
    <div className=" w-full py-[30px]  ">
      <div className="max-w-[1270px] h-[140px]  mx-auto py-4 px-4 flex gap-4">
        {banners.map((i) => (
          <BannerCard />
        ))}
      </div>
    </div>
  );
}
