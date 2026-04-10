import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Results from "./pages/Results";
import ProjectDetails from "./pages/ProjectDetails";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import Explore from "./pages/Explore";
import Saved from "./pages/Saved";
import AIPage from "./pages/AIPage";

<Route path="/results" element={<Results />} />

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/result" element={<Results />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/dashboard" element={<Dashboard />} />    
        <Route path="/signup" element={<Signup />} />  
        <Route path="/explore" element={<Explore />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/ai" element={<AIPage />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;