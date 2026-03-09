import { Routes, Route } from "react-router";
import { MainPage, TrackingPage, StatusPage, ContactPage} from "./pages";
import { Footer, Header } from "./components";


function App() {
  return (
    <div className='wrapper'>
      <Header/>
      <main class="main-content">
        <Routes>
          <Route path="/"        element={<MainPage/>}/>
          <Route path="tracking" element={<TrackingPage/>}/>
          <Route path="status"   element={<StatusPage/>}/>
          <Route path="contact"  element={<ContactPage/>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;