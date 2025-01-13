import Container from "@/components/shared/Container";

export default function HistoryList(children: React.ReactNode) {
  return (
    <Container>
      <ul>{children}</ul>
    </Container>
  );
}
