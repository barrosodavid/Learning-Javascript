import { useEffect, useState } from "react";

import Bundle from "./Bundle";
import bandImageService from './services/bandImageService'

function App() {
  const [imageSrc, setImageSrc] = useState('')
  const [spotifyURI, setSpotifyURI] = useState('')

  const fetchImage = async (uri='spotify:track:424GDxARRXRaZ7Mla9EDI2') => {
    const imageUrl = await bandImageService.generateImage(uri)
    setImageSrc(imageUrl)
  }
  
  useEffect(() => {
    
    fetchImage()
  }, [])

  const handleURISubmit = (e) => {
    e.preventDefault()
    fetchImage(spotifyURI)
  }

  return (
    <div>
      <Bundle bandSrc={imageSrc} onURISubmit={handleURISubmit} spotifyURI={spotifyURI} setSpotifyURI={setSpotifyURI}></Bundle>
    </div>
  );
}

export default App;
