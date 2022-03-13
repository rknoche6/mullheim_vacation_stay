import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
//import defaultImage from "./assets/images/default.jpg";
import "./GalleryElements.js";
import desk from "../assets/images/1-png.webp"
import bed from "../assets/images/2-png.webp"
import v3 from "../assets/images/3-png.webp"
import v4 from "../assets/images/4-png.webp"
import v5 from "../assets/images/5-png.webp"
import v6 from "../assets/images/6-png.webp"
import v7 from "../assets/images/7-png.webp"
import {ContainerGallery} from './GalleryElements'
const MyGallery =()=> {
        {
    const images = [
      {
        original: desk,
        thumbnail: "http://lorempixel.com/250/150/nature/1/"
      },
      {
        original: bed,
        thumbnail: "http://lorempixel.com/250/150/nature/2/"
      },
      {
        original: v3,
        thumbnail: "http://lorempixel.com/250/150/nature/3/"
      },
      {
        original: v4,
        thumbnail: "http://lorempixel.com/250/150/nature/2/"
      },
      {
        original: v5,
        thumbnail: "http://lorempixel.com/250/150/nature/2/"
      },
      {
        original: v6,
        thumbnail: "http://lorempixel.com/250/150/nature/2/"
      },
      {
        original: v7,
        thumbnail: "http://lorempixel.com/250/150/nature/2/"
      }
    ];

    return (
        <ContainerGallery>
            <ImageGallery
                items={images}
                showBullets={true}
                showIndex={true}
                showThumbnails={false}
                lazyLoad={true}
                showPlayButton={false}
            />
        </ContainerGallery>
    );
  }
}

export default MyGallery