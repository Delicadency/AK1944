import { chapters } from "@/data/historyData";
import Container from "../shared/Container";
import { HistoryItem } from "./HistoryItem";

export const HistoryChapters = () => (
  <Container as="section">
    <ul className="flex flex-col gap-10">
      {chapters.map((item) => (
        <HistoryItem key={item.id} item={item} />
      ))}
    </ul>
  </Container>
);
