import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Background from "./components/Background";
import List from "./pages/List";
import Edit from "./pages/Edit";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Background />}>
            <Route index element={<Home />} />
            <Route path="/list" element={<List />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
