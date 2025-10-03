import {Routes, Route} from "react-router";
import './App.css'



function App() {

  return (
    <>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
    </>
  )
}

export default App
