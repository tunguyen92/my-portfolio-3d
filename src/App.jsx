import { Suspense, lazy } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import { Loader } from "./components";
import { About, Contact, Home, Projects } from "./pages";

const HomeTemplateLazy = lazy(() => import("~/templates/home-template"));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="" element={<HomeTemplateLazy />}>
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="*" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </Suspense>
  );
};

export default App;
