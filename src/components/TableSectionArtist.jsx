import { Container, Row, Col, Table } from 'react-bootstrap'

const TableSectionArtist = () => {
  return (
    <Container fluid className="container-fluid table-container">
      <Row className="table-row table-playlist">
        <Col md={9} className="heading-and-table">
          <div className="table-headings d-flex">
            <h2>Popular</h2>
          </div>
          <Table className="table-borderless">
            <thead>
              <tr>
                <th scope="col" className="soundwave-icon">
                  <i className="bi bi-soundwave"></i>
                </th>
                <th scope="col">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReSITMMEH8IfEqFlTHfCd7_1_O39Egfr7p6w&usqp=CAU"
                    alt="Album cover"
                    className="table-cover-picture mr-2"
                  />
                  <span>Another One Bites The Dust</span>
                </th>
                <th scope="col">103,112,002</th>
                <th scope="col">3,34</th>
                <th scope="col">
                  <div className="popup" onclick="addSongToLikedAlbum()">
                    <i className="bi bi-heart heart-table">
                      <i className="bi bi-suit-heart-fill heart-filled"></i>
                      <span className="popuptext myPopup">
                        Added to your Liked Songs
                      </span>
                    </i>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr onclick="redirectToAlbumPage(event)">
                <th scope="row">1</th>
                <td>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/f/f4/Queen_Sheer_Heart_Attack.png"
                    alt="Album cover"
                    className="table-cover-picture mr-2"
                  />
                  <span>Bohemian Rhapsody</span>
                </td>
                <td>149,112,000</td>
                <td>6:23</td>
                <td>
                  <div
                    className="popup"
                    onclick="addSongToLikedAlbum()"
                    // onclick="heartFilledFunction()"
                  >
                    <i className="bi bi-heart heart-table">
                      <i className="bi bi-suit-heart-fill heart-filled"></i>
                      <span className="popuptext myPopup">
                        Added to your Liked Songs
                      </span>
                    </i>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>
                  <img
                    src="http://ocovildovinil.pt/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/q/u/queen_1sheer_heart_attack.cl..jpg"
                    alt="Album cover"
                    className="table-cover-picture mr-2"
                  />
                  <span>Don't Stop Me Now - Remastered 2011</span>
                </td>
                <td>103,112,002</td>
                <td>5:45</td>
                <td>
                  <div
                    className="popup"
                    onclick="addSongToLikedAlbum()"
                    // onclick="heartFilledFunction()"
                  >
                    <i className="bi bi-heart heart-table">
                      <i className="bi bi-suit-heart-fill heart-filled"></i>
                      <span className="popuptext myPopup">
                        Added to your Liked Songs
                      </span>
                    </i>
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row">3</th>
                <td>
                  <img
                    src="https://images.genius.com/4a04f1641c72d314c799e35663e3ba8e.600x600x1.jpg"
                    alt="Album cover"
                    className="table-cover-picture mr-2"
                  />
                  <span>Under Preassure</span>
                </td>
                <td>103,112,002</td>
                <td>1:36</td>
                <td>
                  <div
                    className="popup"
                    onclick="addSongToLikedAlbum()"
                    // onclick="heartFilledFunction()"
                  >
                    <i className="bi bi-heart heart-table">
                      <i className="bi bi-suit-heart-fill heart-filled"></i>
                      <span className="popuptext myPopup">
                        Added to your Liked Songs
                      </span>
                    </i>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>
                  <img
                    src="https://www.theaudiodb.com/images/media/album/thumbback/dl9x741602709309.jpg"
                    alt="Album cover"
                    className="table-cover-picture mr-2"
                  />
                  <span>We Will Rock You - Remastered</span>
                </td>
                <td>103,112,002</td>
                <td>2:40</td>
                <td>
                  <div
                    className="popup"
                    onclick="addSongToLikedAlbum()"
                    // onclick="heartFilledFunction()"
                  >
                    <i className="bi bi-heart heart-table">
                      <i className="bi bi-suit-heart-fill heart-filled"></i>
                      <span className="popuptext myPopup">
                        Added to your Liked Songs
                      </span>
                    </i>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
          <p className="see-more-text p-tags-different">See more</p>
          <div className="artist-pick col-3">
            <div className="artist-pick-header">
              <h2>Artist pick</h2>
            </div>
            <div className="inner-container-artist-pick">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/3/39/Queen_The_Works.png"
                alt="Album cover"
                className="album-cover-picture mr-2"
              />
              <div className="posted-by-icon-and-text">
                <i className="bi bi-person-circle pr-1 text-white"></i>
                <span className="pr-3 text-white">Posted by Queen</span>
                <p className="mb-0 mt-2 p-tags-different">
                  <strong>Queen Best Of</strong>
                </p>
                <p className="mt-0 pt-0 p-tags-different">Playlist</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default TableSectionArtist
