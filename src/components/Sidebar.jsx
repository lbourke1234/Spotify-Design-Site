import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcollegian.com%2Fwp-content%2Fuploads%2F2017%2F08%2Fspotify-1759471_1280.jpg&f=1&nofb=1"
        height="38"
        alt="..."
      />

      <div className="d-flex flex-column">
        <Link to={'/'}>
          <div className="mt-4">
            <i className="bi bi-house-fill mr-3"></i> <span>Home</span>
          </div>
        </Link>
        <Link to={'/albumPage'}>
          <div className="mt-2">
            <i className="bi bi-search mr-3"></i> <span>Search</span>
          </div>
        </Link>
        <Link to={'/artistPage'}>
          <div className="mt-2">
            <i className="bi bi-collection-fill mr-3"></i> <span>Library</span>
          </div>
        </Link>
        <div className="mt-5 create">
          <i className="bi bi-plus-lg mr-3"></i> <span>Create Playlist</span>
        </div>
        <div className="mt-3 heart">
          <i className="bi bi-heart-fill mr-3"></i> <span>Liked Songs</span>
        </div>
      </div>
      <hr />
      <div className="p-lists">
        <p>Funky Heavy Blussy</p>
        <p>Your top songs 2020</p>
        <p>In love with you- Erylah B...</p>
        <p>This is Rod Stewart</p>
        <p>FRANCHISE Ft Young Thug...</p>
        <p>Your top songs 2019</p>
        <p>Jazz Classics</p>
        <p>Your Top Songs 2018</p>
        <p>New Playlist</p>
        <p>Metal Ballads</p>
        <p>This is Opeth</p>
        <p>Funky Heavy Blussy</p>
        <p>Your top songs 2020</p>
        <p>In love with you- Erylah B...</p>
        <p>This is Rod Stewart</p>
        <p>FRANCHISE Ft Young Thug...</p>
        <p>Your top songs 2019</p>
        <p>Jazz Classics</p>
        <p>Your Top Songs 2018</p>
        <p>New Playlist</p>
        <p>Metal Ballads</p>
        <p>This is Opeth</p>
        <div className="d-flex justify-content-between">
          <p>Jack 30th Birthday</p>
          <i className="bi bi-people"></i>
        </div>
        <div className="d-flex justify-content-between">
          <p>Jack 30th Birthday Party 2</p>
          <i className="bi bi-people"></i>
        </div>

        <p>Jun19</p>
        <p>This is Joe Banana</p>
        <p>
          <i className="bi bi-arrow-down-circle-fill"></i> Install App
        </p>
      </div>
    </div>
  )
}

export default Sidebar
