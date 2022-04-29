import TableSectionArtist from './TableSectionArtist'
import { Container, Row, Col } from 'react-bootstrap'
import Sidebar from './Sidebar'
import NavBar from './NavBar'
import ArtistJumbotron from './ArtistJumbotron'

const ArtistPage = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={2}>
          <Sidebar />
        </Col>
        <Col>
          <NavBar />
          <ArtistJumbotron />
          <TableSectionArtist />
        </Col>
      </Row>
    </Container>
  )
}

export default ArtistPage
