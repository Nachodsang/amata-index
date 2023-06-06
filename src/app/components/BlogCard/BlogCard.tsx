import Image from "next/image";
import FaFacebookSquare from "react-icons/fa";

export default function BlogCard() {
  return (
    <div className="card w-[300px] h-[440px] border border-gray-100 p-3 bg-base-100 shadow-md flex flex-col gap-4">
      <div className="flex gap-4">
        <div>
          <img
            className="w-[50px] h-[50px] object-cover shadow-md border border-orange-500 rounded-full"
            src="https://cdn.logo.com/hotlink-ok/logo-social.png"
          />
        </div>
        <div>
          <div>Company name</div>
          <div>Lorem ipsum dolor.</div>
        </div>
      </div>

      <Image
        src="https://images.wsj.net/im-759149/?width=1278&size=1"
        width={500}
        height={300}
        alt="Picture of the author"
        className="w-[270] h-[180px] object-cover border-orange-400 border-2 rounded-xl "
      />

      <div className="flex flex-col px-1 gap-4">
        <div className="flex justify-between">
          <p>DATE</p>
          <p>VIEW</p>
        </div>
        <h2 className="card-title">Lorem ipsum dolor sit.</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
      <div className="flex justify-center">
        <div className="w-[80%]  h-1 bg-orange-500"></div>
      </div>
    </div>
  );
}
