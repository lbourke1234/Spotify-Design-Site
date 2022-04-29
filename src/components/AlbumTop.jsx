const Albumtop = () => {
  return (
    <section id="album-page-hero">
      <div class="container-fluid album-container">
        <div class="row">
          <div class="col-2">
            <img
              id="hero-img"
              src="https://i.pinimg.com/1200x/21/b1/c7/21b1c7f4af7c339fff746041a0e2403f.jpg"
              class="img-fluid"
              alt="Hybrid theory album cover"
            />
          </div>
          <div class="col-10">
            <div class="d-flex flex-column justify-content-end h-100">
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
        <div class="top-nav">
          <div class="arrows">
            <i class="arrow1 bi bi-chevron-compact-left text-white"></i>
            <i class="arrow2 bi bi-chevron-compact-right text-white"></i>
          </div>
          <div class="navbar-col profile-picture-button">
            <div class="">
              <div class="profile-picture-dropdown d-flex">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                  alt=""
                  class="profile-picture-top-bar"
                />
                <span class="pr-3 text-white">Diego Ziba Ba..</span>
                <i class="bi bi-caret-down-fill"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Albumtop
