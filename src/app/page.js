import Spacing from "@/components/Spacing";
import Status from "@/components/Status/Status";
import Title from "@/components/Title";

export default function Home() {
  return (
    <main className="p-5 pt-20 md:p-20 min-h-screen">
      <Title />
      <Status/>
      <Spacing size="sm"/>
    </main>
  );
}