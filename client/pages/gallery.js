import Link from 'next/link'
import GalleryContainer from '../components/galleryContainer';
const Gallery = () => {
    return (
        <div>
            <Link href="/"><a>Go Back</a></Link>
            <br /><br />
            <GalleryContainer></GalleryContainer>
        </div>

    )
}

export default Gallery