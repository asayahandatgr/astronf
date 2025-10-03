import {Routes, Route} from "react-router";
import './App.css'
import Layout from "./layout/Layout";
import Home from "./component/pages/home/Home";
import Astrofest from "./component/pages/astrofest/Astrofest";
import Competition from "./component/pages/competition/Competition";
import Navbar from "./component/Navbar/Navbar";



function App() {

  return (
    <>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/astrofest" element={<Astrofest />} />
        <Route path="/competition" element={<Competition />} />
      </Routes>
    </Layout>
    </>
  )
}

export default App
