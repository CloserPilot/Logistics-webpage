import { Header, Footer } from "../components";

function CenteredLayout({ children }) {
  return (
    <div className="wrapper">
      <Header />

      <main className="main-content centered">
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default CenteredLayout;