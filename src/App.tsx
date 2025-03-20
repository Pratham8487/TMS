import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./Components/HomePage";
import Sidebar from "./Components/Sidebar";
import Mentors from "./pages/Mentors.tsx";
import Task from "./pages/Task.tsx";
import Settings from "./pages/Settings.tsx";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="mentors" element={<Mentors />} />  {/* Use the new Mentors page */}
          <Route path="sidebar" element={<Sidebar />} />
          <Route path="tasks" element={<Task />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
