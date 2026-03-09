import { Routes, Route } from "react-router";
import { routes } from "./routes";
import { Footer, Header } from "./components";
import { ScrollToTop } from './components/'
import CenteredLayout from "./layouts/CenteredLayout";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <ScrollToTop />

      <main className="main-content ">
        <CenteredLayout>
          <Routes>
            {routes.map(({ path, element: Component }) => (
              <Route
                key={path}
                path={path}
                element={<Component />}
              />
            ))}
          </Routes>
        </CenteredLayout>
      </main>

      <Footer />
    </div>
  );
}

export default App;