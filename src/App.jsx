import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Pricing from "./pages/Pricing"
import Layout1 from "./pages/Layout1"
import Nav from "./components/Nav"

function App() {
  return (
    <div className="bg-bg dark:bg-bg_dark text-text dark:text-text_dark pb-10">
      <Routes>
        <Route element={<Nav />}>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/pricing"
            element={<Pricing />}
          />
        </Route>
        <Route
          path="/layout1"
          element={<Layout1 />}
        />
        {/* <Route
          path="*"
          element={<NotFound />}
        /> */}
      </Routes>
    </div>
  )
}

export default App
