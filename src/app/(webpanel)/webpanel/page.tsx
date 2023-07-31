import WelcomePanel from "@/components/webpanel/WelcomePanel/WelcomePanel";

// export async function getStaticProps() {
//   try {
//     const response = await fetch("http://localhost:3000/api/ad-setting", {
//       cache: "no-store",
//     });
//     const data = await response.json();
//     return { props: { data } };
//   } catch (err) {
//     console.log(err);
//   }
// }
export default function Webpanel() {
  // console.log(props);
  return (
    <>
      {/* {JSON.stringify(props)} */}
      <WelcomePanel />
    </>
  );
}
