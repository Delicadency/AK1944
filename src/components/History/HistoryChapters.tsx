import { chapters } from "@/data/historyData";
import Container from "../shared/Container";
import { HistoryItem } from "./HistoryItem";

export const HistoryChapters = () => (
  <Container as="section">
    <ul className="flex flex-col gap-10">
      {chapters.map((item, index) => (
        <HistoryItem key={index} item={item} />
      ))}
    </ul>
  </Container>
);
