export default function Ad({ image, link }: { image: any; link: string }) {
  return (
    <a href={link}>
      <div className=" overflow-hidden  min-w-[280px] h-[280px] rounded-lg bg-gray-200 ">
        <img src={image} className="object-cover w-full h-full" />
      </div>
    </a>
  );
}
