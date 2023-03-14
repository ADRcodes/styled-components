import "./App.css"
import Nav from "./components/Nav"
import Home from "./pages/Home"

function App() {
  return (
    <div className="bg-bg dark:bg-bg_dark text-text dark:text-text_dark pb-10">
      <Nav />
      <Home />
    </div>
  )
}

export default App
