import Container from "../shared/Container";

export default function HistoryNav() {
  return (
    <Container className="mx-9">
      <nav className="flex">
        <ul className="ml-5">
          <li>
            <a href="#">5.Pułk Strzelców Konnych</a>
          </li>
          <li>
            <a href="#">Akcja Burza</a>
          </li>
          <li>
            <a href="#">Obwód Dębica SZP-ZWZ-AK</a>
          </li>
          <li>
            <a href="#">Literatura</a>
          </li>
          <li>
            <a href="#">Biogramy</a>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
