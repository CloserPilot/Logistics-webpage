import { Routes, Route } from "react-router";
import { MainPage, TrackingPage, StatusPage, ContactPage} from "./pages";


function App() {
  return (
    <Routes>
      <Route path="/"        element={<MainPage/>}/>
      <Route path="tracking" element={<TrackingPage/>}/>
      <Route path="status"   element={<StatusPage/>}/>
      <Route path="contact"  element={<ContactPage/>}/>
    </Routes>
  );
}

export default App;