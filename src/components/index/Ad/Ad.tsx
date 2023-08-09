export default function Ad({ image, link }: { image: any; link: string }) {
  return (
    <a href={link}>
      <div className=" overflow-hidden  desktop0:min-w-[280px] desktop0:max-h-[280px] h-auto rounded-lg bg-gray-200 ">
        <img src={image} className="object-cover w-full h-full" />
      </div>
    </a>
  );
}
