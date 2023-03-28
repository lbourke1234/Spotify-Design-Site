import { Container, Row, Col } from 'react-bootstrap'

const AlbumTable = () => {
  return (
    <section class="album-track-list">
      <Container fluid>
        <Row className="album-row-bg">
          <Col md={4} id="album-track-list">
            <div className="pb-4">
              <span className="track-num">1.</span>
              <span className="album-song ml-1">
                <strong className="track-decoration">
                  20th century fox Fanfare
                </strong>
                <br />
                <span className="singer-name">Queen</span>
              </span>
            </div>
            <div className="pb-4">
              <span className="track-num">2.</span>
              <span className="album-song ml-1">
                <strong className="track-decoration">Somebody To Love</strong>
                <br />
                <span className="singer-name">Queen</span>
              </span>
            </div>
            <div className="pb-4">
              <span className="track-num">3.</span>
              <span className="album-song ml-1">
                <strong className="track-decoration">
                  Doing All Right- ...Revisited
                </strong>
                <br />
                <span className="singer-name">Queen</span>
              </span>
            </div>
            <div className="pb-4">
              <span className="track-num">4.</span>
              <span className="album-song ml-1">
                <strong className="track-decoration">
                  Keep Yourself Alive - Live At The Rainbow
                </strong>
                <br />
                <span className="singer-name">Queen</span>
              </span>
            </div>
            <div className="pb-4">
              <span className="track-num">5.</span>
              <span className="album-song ml-1">
                <strong className="track-decoration">Killer Queen</strong>
                <br />
                <span className="singer-name">Queen</span>
              </span>
            </div>
            <div className="pb-4">
              <span className="track-num">6.</span>
              <span className="album-song ml-1">
                <strong className="track-decoration">
                  Fat Bottomed Girls - Live In Paris
                </strong>
                <br />
                <span className="singer-name">Queen</span>
              </span>
            </div>
            <div className="pb-4">
              <span className="track-num">7.</span>
              <span className="album-song ml-1">
                <strong className="track-decoration">Bohemain Rhaposdy</strong>
                <br />
                <span className="singer-name">Queen</span>
              </span>
            </div>
            <div className="pb-4">
              <span className="track-num">8.</span>
              <span className="album-song ml-1">
                <strong className="track-decoration">
                  Now I'm Here - Live At The Hammersmith Odeon
                </strong>
                <br />
                <span className="singer-name">Queen</span>
              </span>
            </div>
            <div className="pb-4">
              <span className="track-num">9.</span>
              <span className="album-song ml-1">
                <strong className="track-decoration">
                  Creazy Little Thing Called Love
                </strong>
                <br />
                <span className="singer-name">Queen</span>
              </span>
            </div>
            <div className="pb-4">
              <span className="track-num">10.</span>
              <span className="album-song ml-1">
                <strong id="midnigth-protocol" className="track-decoration">
                  Midnigth protocol
                </strong>
                <br />
                <span className="singer-name">Queen</span>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AlbumTable
