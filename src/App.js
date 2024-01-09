import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import {
  Home,
  About,
  Education,
  Skills,
  Contact,
  ProjectPage,
  ErrorPage,
  Tutorial,
} from "./pages";

// components
import { Sidebar, ThemeTemplate } from "./components";
import "./utils/templateColors.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar />
      <ThemeTemplate />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<ProjectPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;