import { Container, Row } from 'react-bootstrap'

const NavBar = () => {
  return (
    <Container className="p-3">
      <Row>
        <div className="arrows">
          <i className="arrow1 bi bi-chevron-left text-white"></i>
          <i className="arrow2 bi bi-chevron-right text-white"></i>
        </div>
        <div className="navbar-col profile-picture-button">
          <div className="profile-picture-dropdown d-flex">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              alt="profile-pic"
              className="profile-picture-top-bar"
            />
            <span className="pr-3 text-white">Diego Ziba Ba..</span>
            <i className="bi bi-caret-down-fill"></i>
          </div>
        </div>
      </Row>
    </Container>
  )
}
export default NavBar
