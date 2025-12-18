import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TravelsProvider } from "./contexts/TravelsContext";
import DefaultLayout from "./layouts/DefaultLayout";
import DetailTravel from "./pages/DetailTravel";
import HomePage from "./pages/Homepage";

function App() {
  return (
    <TravelsProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/detail/:id" element={<DetailTravel />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TravelsProvider>
  );
}

export default App;