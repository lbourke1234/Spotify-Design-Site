const Albumtop = () => {
  return (
    <section id="album-page-hero">
      <div className="container-fluid album-container">
        <div className="row">
          <div className="col-2">
            <img
              id="hero-img"
              src="https://i.pinimg.com/1200x/21/b1/c7/21b1c7f4af7c339fff746041a0e2403f.jpg"
              className="img-fluid"
              alt="Hybrid theory album cover"
            />
          </div>
          <div className="col-10">
            <div className="d-flex flex-column justify-content-end h-100">
              <small>ALBUM</small>
              <h1>Bohemain Rhapsody(Original Soundtrack)</h1>
              <div>
                <p>
                  <small>
                    <strong>
                      <img
                        src="https://upload.wikimedia.org/wikipedia/pt/9/9f/Bohemian_Rhapsody.png"
                        height="22px"
                        style={{ borderRadius: '2rem' }}
                        alt="Original Album Cover"
                      />
                      Queen .{' '}
                    </strong>
                    2018<strong> . </strong>22 songs<strong>,</strong>
                    1hr 19 min
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="top-nav">
          <div className="arrows">
            <i className="arrow1 bi bi-chevron-compact-left text-white"></i>
            <i className="arrow2 bi bi-chevron-compact-right text-white"></i>
          </div>
          <div className="navbar-col profile-picture-button">
            <div className="">
              <div className="profile-picture-dropdown d-flex">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                  alt=""
                  className="profile-picture-top-bar"
                />
                <span className="pr-3 text-white">Diego Ziba Ba..</span>
                <i className="bi bi-caret-down-fill"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Albumtop
