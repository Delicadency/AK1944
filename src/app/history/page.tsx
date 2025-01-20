import Container from "@/components/shared/Container";
import History from "@/components/History/History";
import Literature from "@/components/History/Literature";
import HistoryList from "@/components/History/HistoryList";
import HistoryNav from "@/components/History/HistoryNav";

export default function HistoryPage() {
  return (
    <Container className="bg-slate-300">
      <button>Domek</button>
      <History />
      <HistoryNav />
      <HistoryList />
      <section>
        <p>Zobacz także</p>
        <p>Biogramy</p>
        <Literature />
      </section>
    </Container>
  );
}
