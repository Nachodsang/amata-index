import TopBar from "@/components/index/TopBar/TopBar";
import Member from "@/components/member/Member";

export default function Page({ params }: { params: { id: string } }) {
  const id = params?.id;
  return (
    <>
      <TopBar />
      <Member _id={id} />
    </>
  );
}
