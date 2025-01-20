import { Heading } from "../shared/Heading/Heading";
import { historyData as txt } from "@/data/historyData";

export default function History() {
  console.log(txt.commanders);
  return (
    <>
      <Heading variant="h3" contrast="yellow" color="green">
        Historia
      </Heading>
    </>
  );
}
