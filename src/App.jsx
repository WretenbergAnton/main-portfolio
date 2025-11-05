import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import Projects from "./components/Projects";

// New imports for your project detail pages
import SchoolProject from "./projects/SchoolProject";
import PersonalProject from "./projects/PersonalProject";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
        <Navbar />

        <Routes>
          {/* Home route */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Banner />
                <Projects />
              </>
            }
          />

          {/* Project detail routes */}
          <Route path="/projects/school" element={<SchoolProject />} />
          <Route path="/projects/personal" element={<PersonalProject />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
