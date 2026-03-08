//import MainPage from "./pages/MainPage";
import { Routes, Route } from "react-router";
import { MainPage, TrackingPage, StatusPage} from "./pages";


function App() {
  return (
    <Routes>
      <Route path="/"        element={<MainPage/>}/>
      <Route path="tracking" element={<TrackingPage/>}/>
      <Route path="status"   element={<StatusPage/>}/>
    </Routes>
  );
}

export default App;