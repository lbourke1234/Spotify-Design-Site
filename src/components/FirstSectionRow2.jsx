import { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import FirstSectionCard from './FirstSectionCard'

const FirstSectionRow2 = (search, title) => {
  const [artist, setArtist] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const response = await fetch(
      'https://striveschool-api.herokuapp.com/api/deezer/search?q=rap'
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

export default FirstSectionRow2
