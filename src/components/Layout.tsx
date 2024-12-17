// import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* <Header /> */}
      {children}
      <Footer />
    </>
  );
};
