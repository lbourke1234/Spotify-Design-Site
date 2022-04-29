import { Col, Card } from 'react-bootstrap'

const SecondSectionCard = ({ song }) => {
  return (
    <Col key={song.id}>
      <Card className="second-section-card">
        <img
          src={song.artist.picture}
          className="card-img-top img-second-section"
          alt="..."
        />
        <Card.Body className="card-body card-body-section2">
          <h5 className="card-title">{song.title}</h5>
          <p className="card-text">{song.artist.name}</p>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default SecondSectionCard
