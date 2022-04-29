import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FirstSectionCard from './FirstSectionCard'

const FirstSection = (search, title) => {
  const [artist, setArtist] = useState([])

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchData = async () => {
    const response = await fetch(
      'https://striveschool-api.herokuapp.com/api/deezer/search?q=money'
    )
    if (response.ok) {
      const data = await response.json()
      setArtist(data.data)
      console.log(artist)
    }
  }

  return (
    <Container fluid className="first-section">
      <Row>
        <Col>
          <h2 className="text-white mt-5 mb-4">Good morning</h2>
        </Col>
      </Row>
      <Row>
        {artist.slice(0, 6).map((song) => (
          <Col>
            <FirstSectionCard search="money" song={song} />
          </Col>
        ))}
      </Row>
      <Row></Row>
    </Container>
  )
}

export default FirstSection
