import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ id, src, alt }) => {
  return (
    <li className={css.ImageGalleryItem}>
      <img className={css['ImageGalleryItem-image']} src={src} alt={alt} />
    </li>
  );
};
export default ImageGalleryItem;
