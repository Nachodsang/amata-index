export default function Header() {
  return (
    <div className="flex flex-col gap-10 py-10">
      {/* cover image */}
      <div className="h-[50vh] bg-white w-full">
        <img
          src="https://www.at-once.info/images/company/cover_09122022-12183012.png"
          className="w-full"
        />
      </div>
      {/* company info */}
      <div className="max-w-[1440px] w-full h-[300px] mx-auto flex gap-4 ">
        <div className="w-[75%] bg-slate-200 rounded-xl p-6 flex gap-6 items-start shadow-lg">
          <div className="  w-[25%] h-full p-4 bg-white rounded-xl">
            <img
              src="https://pbs.twimg.com/profile_images/1285655593592791040/HtwPZgej_400x400.jpg"
              className="rounded-lg w-full "
            />
          </div>
          <div className="w-[75%] flex flex-col gap-4">
            <h1 className="font-bold text-xl">Something Express</h1>
            <div className="w-full bg-white py-4 px-20 rounded-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
              voluptate necessitatibus sit aut ullam quas nihil molestias
              tenetur a nostrum non sapiente voluptatibus, cupiditate autem iste
              unde voluptatem molestiae accusamus?
            </div>
            <div className="flex gap-2">
              <div className="bg-green-500 px-4 py-2 rounded-3xl">Factory</div>
              <div className="bg-red-500 px-4 py-2 rounded-3xl">
                Thai Company
              </div>
            </div>
          </div>
        </div>
        <div className="w-[25%] bg-slate-500 p-6 rounded-xl flex flex-col gap-4 shadow-lg ">
          <div className="flex flex-col gap-4">
            <button className="rounded-3xl w-full bg-slate-200 py-2">
              asdf
            </button>
            <button className="rounded-3xl w-full bg-slate-200 py-2 ">
              asdf
            </button>
            <button className="rounded-3xl w-full bg-slate-200 py-2">
              asdf
            </button>
            {/* <button className="rounded-2xl w-full"></button> */}
          </div>
          <div className="border-t border-slate-400 py-4">
            <button className="rounded-3xl w-full bg-slate-200 py-2">
              asdf
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
