import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePages } from "./pages/home/HomePages";
import { UserDetailPage } from "./pages/user-detail/UserDetailPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/:id" element={<UserDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
