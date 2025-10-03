import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Container from '../components/Container/Index'

const Layout = ({children}) => {
  return (
    <div>
      <Navbar />
        <main>
          <Container>
            {children}
          </Container>
        </main>
      <Footer />
    </div>
  )
}

export default Layout