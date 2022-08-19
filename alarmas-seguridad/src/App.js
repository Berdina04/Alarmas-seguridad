import './App.css';
import { BrowserRouter ,Routes, Route} from "react-router-dom";

import HomeView                from "./Views/HomeView";
import AlarmForHomeView            from "./Views/AlarmForHomeView";
import AlarmForBusinessView        from "./Views/AlarmForBusinessView";
import AlarmForSquatsView          from "./Views/AlarmForSquatsView";
import AlarmWithoutElectricityView from "./Views/AlarmWithoutElectricityView";
import VideoSurveillanceView       from "./Views/VideoSurveillanceView";
import ContactView from "./Views/ContactView";

function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomeView />} />
            <Route path='alarmas'>
              <Route path='paracasa'        element={<AlarmForHomeView />} />
              <Route path='negocio'         element={<AlarmForBusinessView />} />
              <Route path='antiokupas'      element={<AlarmForSquatsView />} />
              <Route path='sinelectricidad' element={<AlarmWithoutElectricityView />} />
            </Route>
            <Route path='videovigilancia' element={<VideoSurveillanceView />} />
            <Route path='contacto'        element={<ContactView />} />
          </Routes>
      </BrowserRouter>
  );
}
export default App;