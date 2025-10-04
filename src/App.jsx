import {Routes, Route} from "react-router";
import './App.css'
import Layout from "./layout/Layout";
import Home from "./component/pages/home/Home";
import Astrofest from "./component/pages/astrofest/Astrofest";
import Competition from "./component/pages/competition/Competition";
import Sport from "./component/pages/competition/Sport";



function App() {

  return (
    <>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/astrofest" element={<Astrofest />} />
        <Route path="/competition" element={<Competition />} />
        <Route path="/competition/sport-esport" element={<Sport />} />
      </Routes>
    </Layout>
    </>
  )
}

export default App
