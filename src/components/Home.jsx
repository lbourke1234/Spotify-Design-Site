import { Container, Row, Col } from 'react-bootstrap'
import Sidebar from './Sidebar'
import NavBar from './NavBar'
import FirstSection from './FirstSection'
import SecondSection from './SecondSection'

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={2}>
          <Sidebar />
        </Col>
        <Col>
          <NavBar />
          <FirstSection />
          <SecondSection />
        </Col>
      </Row>
    </Container>
  )
}

export default Home
