import Image from "next/image";

export default function BlogCard() {
  return (
    <div className="hover:scale-105 transition-all hover:cursor-pointer duration-300 place-content-stretch card max-w-[510px] h-[585px] desktop0:w-[210px] desktop0:h-[384px] desktop2:w-[300px]  tablet2:w-[330px] tablet2:h-[465px] desktop1:w-[255px] desktop1:h-[414px] desktop2:h-[441px] border border-gray-100  bg-base-100 shadow-md flex flex-col justify-around gap-1 p-4">
      <div className="flex gap-4 items-center">
        <div>
          <img
            className="w-[50px] h-[50px] object-cover shadow-md border border-orange-500 rounded-full"
            src="https://cdn.logo.com/hotlink-ok/logo-social.png"
          />
        </div>
        <div className="flex flex-col gap-0">
          <div className="desktop0:w-[121px]  overflow-hidden font-semibold">
            Company name
          </div>
          <div className="desktop0:w-[121px]  overflow-hidden">
            Lorem ipsum dolor
          </div>
        </div>
      </div>

      <Image
        src="https://images.wsj.net/im-759149/?width=1278&size=1"
        width={500}
        height={300}
        alt="Picture of the author"
        className="w-[486px] h-[326px] tablet2:w-[300px] tablet2:h-[206px] desktop0:w-[186px] desktop0:h-[125px] desktop2:w-[270px] desktop2:h-[180px] desktop1:w-[231px] desktop1:h-[155px] object-cover border-orange-400 border-2 rounded-xl "
      />

      <div className="flex flex-col px-1 gap-1">
        <div className="flex justify-between">
          <p>DATE</p>
          <p>VIEW</p>
        </div>
        <h2 className="desktop0:w-[166px] desktop0:h-[50px] overflow-hidden">
          Lorem ipsum dolor sit.
        </h2>
        <p className="desktop0:w-[166px] desktop0:h-[50px] overflow-hidden">
          If a dog chews shoes whose shoes does he choose?
        </p>
      </div>
      <div className="flex justify-center">
        <div className="w-[80%]  h-1 bg-orange-500"></div>
      </div>
    </div>
  );
}
