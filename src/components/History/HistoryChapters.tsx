import { chapters } from "@/data/historyData";
import Container from "../shared/Container";
import { HistoryChapter } from "./HistoryChapter";

export const HistoryChapters = () => (
  <Container as="section">
    <ul className="flex flex-col gap-10">
      {chapters.map((item, index) => (
        <HistoryChapter key={index} item={item} />
      ))}
    </ul>
  </Container>
);
