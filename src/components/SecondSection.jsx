import { Row, Container, Button, Col } from 'react-bootstrap'
import SecondSectionCard from './SecondSectionCard'
import { useEffect, useState } from 'react'

const SecondSection = ({ title, search }) => {
  const [result, setResult] = useState([])

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    console.log(result)
  }, [result])

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://striveschool-api.herokuapp.com/api/deezer/search?q=' + search
      )
      if (response.ok) {
        const data = await response.json()
        setResult(data.data)
      } else {
        console.log('problem fetching')
      }
    } catch (error) {
      console.log('error', error)
    }
  }
  return (
    <>
      <Container fluid>
        <Row>
          <Col md={6}>
            <h3 className="text-white mt-4 mb-4">{title}</h3>
          </Col>
          <Col md={6} className="see-all-btn-col">
            <Button type="button" className="btn btn-primary see-all-btn">
              SEE ALL
            </Button>
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row>
          {result.slice(0, 8).map((song) => (
            <SecondSectionCard song={song} />
          ))}
        </Row>
      </Container>
    </>
  )
}

export default SecondSection
