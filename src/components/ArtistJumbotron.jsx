import { Container, Jumbotron, Row } from 'react-bootstrap'

const ArtistJumbotron = () => {
  return (
    <Container fluid className="container-top-with-nav">
      <Row>
        <Jumbotron>
          <div className="inner-container-jumbotron">
            <p className="p-tags-different">
              <i className="bi bi-patch-check-fill"></i>
              Verified Artist
            </p>
            <h1 className="display-4">Queen</h1>
            <p className="lead monthly-listeners-text p-tags-different">
              37,120,733 monthly listeners
            </p>
          </div>
        </Jumbotron>
      </Row>
    </Container>
  )
}

export default ArtistJumbotron
