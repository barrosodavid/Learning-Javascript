import { useEffect, useState } from "react";

import Bundle from "./Bundle";
import bandImageService from './services/bandImageService'

function App() {
  const [imageSrc, setImageSrc] = useState('')
  const [spotifyURI, setSpotifyURI] = useState('')
  const [backgroundColor, setBackgroundColor] = useState('#000000')
  const [codeColor, setCodeColor] = useState('White')

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

  const bundleProps = {
      bandSrc: imageSrc,
      onURISubmit: handleURISubmit,
      spotifyURI,
      setSpotifyURI,
      backgroundColor,
      setBackgroundColor,
      codeColor,
      setCodeColor
  }

  return (
    <div>
      <Bundle {...bundleProps}></Bundle>
    </div>
  );
}

export default App;
