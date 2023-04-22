import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

const ImageGallery = ({ pictures }) => {
  console.log(pictures.hits);
  return (
    <ul className={css.ImageGallery}>
      {pictures.hits.map(item => (
        <ImageGalleryItem
          key={item.id}
          src={item.webformatURL}
          alt={item.pageURL}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
