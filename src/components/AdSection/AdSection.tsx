import Ad from "../Ad/Ad";

let mockAdArr: number[] = [];
for (let i = 1; i <= 4; i++) {
  mockAdArr.push(i);
}

export default function AdSection() {
  return (
    <div className="m-4 desktop0:w-full  overflow-hidden gap-y-3 desktop0:hidden flex flex-col   ">
      {mockAdArr.map((i, index) => (
        <Ad key={index} index={i} />
      ))}
    </div>
  );
}
