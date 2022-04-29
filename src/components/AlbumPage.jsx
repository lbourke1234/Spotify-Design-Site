import { Col, Container, Row } from 'react-bootstrap'
import NavBar from './NavBar'
import Sidebar from './Sidebar'
import AlbumTable from './AlbumTable'
import Albumtop from './AlbumTop'

const AlbumPage = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={2}>
          <Sidebar />
        </Col>
        <Col>
          <NavBar />
          <Albumtop />
          <AlbumTable />
        </Col>
      </Row>
    </Container>
  )
}

export default AlbumPage
