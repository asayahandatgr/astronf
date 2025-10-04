import Container from '../component/Container/Index'
import Navbar from '../component/Navbar/Navbar'
import Footer from '../component/Footer/Footer'

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