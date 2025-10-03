import Container from '../component/Container/Index'
import Navbar from '../component/Navbar/Navbar'

const Layout = ({children}) => {
  return (
    <div>
      <Navbar />
        <main>
          <Container>
            {children}
          </Container>
        </main>
    </div>
  )
}

export default Layout