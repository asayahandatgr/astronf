import Hero from "../../Home/hero/Hero"
import About from "../../Home/About/About"
import Event from "../../Home/Event/Event"
import Astrofest from "../../Home/Astrofest/Astrofest"

const Home = () => {
  return (
    <div>
      <section>
        <Hero />
        <About />
        <Event />
        <Astrofest />
      </section>

    </div>
  )
}

export default Home
