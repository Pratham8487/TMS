import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./Components/HomePage";
import Mentors from "./pages/mentors/Mentors.tsx";
import TaskDetails from "./pages/tasks/TaskDetails.tsx";
import Task from "./pages/tasks/Task.tsx";
import Settings from "./pages/Settings.tsx";
import MessagePage from "./pages/messages/MessagePage.tsx";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="mentors" element={<Mentors />} />
          <Route path="tasks" element={<Task />} />
          <Route path="settings" element={<Settings />} />
          <Route path="messages" element={<MessagePage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/tasks/:id" element={<TaskDetails />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
