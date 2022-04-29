import { Card, Row, Col } from 'react-bootstrap'

const FirstSectionCard = ({ song }) => {
  return (
    <Card key={song.id} className="mb-3">
      <Row className="no-gutters row-remove-margin">
        <Col md={4}>
          <img
            className="first-section-img"
            src={song.artist.picture}
            alt="..."
          />
        </Col>
        <Col md={6} className="flex-container">
          <div className="card-body card-body-section1">
            <p className="card-text">{song.title}</p>
          </div>
        </Col>
        <Col md={2} className="flex-container">
          <img
            className="green-play-img"
            src="http://hypebot.typepad.com/.a/6a00d83451b36c69e201bb09b0b161970d-200wi"
            alt="..."
          />
        </Col>
      </Row>
    </Card>
  )
}

export default FirstSectionCard
