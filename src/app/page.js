import Spacing from "@/components/Spacing";
import Status from "@/components/Status/Status";
import Title from "@/components/Title";

export default function Home() {
  return (
    <main className="p-7 md:p-20 min-h-screen">
      <Spacing size="lg"/>
      <Title />
      <Spacing size="sm"/>
      <Status/>
      <Spacing size="md"/>
    </main>
  );
}
