import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './components/old-css/stylesheet-artist-page.css'
import './components/old-css/homepagefinal.css'
import './components/old-css/albumPage.css'
import './components/old-css/customExtra.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import ArtistPage from './components/ArtistPage'
import AlbumPage from './components/AlbumPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/albumPage" element={<AlbumPage />} />
        <Route path="/artistPage" element={<ArtistPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
