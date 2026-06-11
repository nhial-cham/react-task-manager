import { Routes, Route } from "react-router-dom";

// Import the components
import Navbar from "./components/Navbar";
// Import the pages
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import TasksMenu from "./pages/TasksMenu";
import CreateTask from "./pages/CreateTask";
import TaskDetails from "./pages/TaskDetails";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Reports from "./pages/Reports";
import Notifications from "./pages/Notifications";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
          <Route 
          path="/" 
          element={<Home />}
          />

          <Route 
          path="/dashboard" 
          element={<Dashboard />}
          />
          
          <Route 
          path="/tasks" 
          element={<Tasks />}
          />

          <Route 
          path="/tasksMenu" 
          element={<TasksMenu />}
          />

          <Route  
          path="/tasks/:id" 
          element={<TaskDetails />}
          />

          <Route 
          path="/Notifications" 
          element={<Notifications />}
          />
          
          <Route 
          path="/create-task" 
          element={<CreateTask />}
          />

          <Route 
          path="/about" 
          element={<About />}
          />

          <Route 
          path="/profile" 
          element={<Profile />}
          />
         
          <Route 
          path="/settings" 
          element={<Settings />}
          />
         
          <Route 
          path="/reports" 
          element={<Reports />}
          />
         
          <Route 
          path="*" 
          element={<NotFound />}
          />
      </Routes>
    </>
  )
}