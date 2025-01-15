import Container from "@/components/shared/Container";
import History from "@/components/History/History";
import Literature from "@/components/History/Literature";
import HistoryList from "@/components/History/HistoryList";
import HistoryNav from "@/components/History/HistoryNav";

export default function HistoryPage() {
  return (
    <Container>
      <button>Domek</button>
      <History />
      <HistoryNav />
      <HistoryList />
      <p>Biogram</p>
      <Literature />
    </Container>
  );
}
