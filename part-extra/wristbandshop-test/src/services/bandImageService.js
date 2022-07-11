import band from '../assets/band.jpeg'
import ImageRotation from "image-rotation"
import mergeImages from "merge-images"

const getWhiteBandURI = (uri) => {
    return `https://scannables.scdn.co/uri/plain/jpeg/292A2C/white/700/${uri}`
}
const getBlackBandURI = (uri) => {
    return `https://scannables.scdn.co/uri/plain/jpeg/FFFFFF/black/700/${uri}`
}

const getBase64FromUrl = async (url) => {
    const data = await fetch(url);
    const blob = await data.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob); 
      reader.onloadend = () => {
        const base64data = reader.result;   
        resolve(base64data);
      }
    });
}

const getRotatedImage = async (url) => {
    const base64Url = await getBase64FromUrl(url)
    const imageRotate = new ImageRotation(base64Url)
    return await imageRotate.generate(17, 'image/png')
}


const generateImage = async (spotifyURI, codeColor='black', backgroundColor='#FFFFFF') => {
    const whiteBand = await getRotatedImage(getWhiteBandURI(spotifyURI))
    const blackBand = await getBlackBandURI(spotifyURI)
    return await mergeImages([band, {src: whiteBand, x:2050, y: 1130}, {src: blackBand, x: 1340, y: 1450}], {
        crossOrigin: 'anonymous'
    })
}

const bandImageService = {
    generateImage
}

export default bandImageService