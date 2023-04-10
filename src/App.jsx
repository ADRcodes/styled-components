import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Pricing from "./pages/Pricing"
import Layout1 from "./pages/Layout1"
import Nav from "./components/Nav"
import Bellroy from "./pages/Bellroy"
import Ready from "./pages/Ready"
import InQ from "./pages/InQ"

function App() {
  return (
    <div className=" dark:bg-bg_dark text-text dark:text-text_dark mb-10 flex flex-col align-middle -z-20">
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
        <Route
          path="/bellroy"
          element={<Bellroy />}
        />
        <Route
          path="/ready"
          element={<Ready />}
        />
        <Route
          path="/inq"
          element={<InQ />}
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
