import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ id, src, alt, onClick }) => {
  const handleClick = () => {
    onClick(id);
    
  };

  return (
    <li className={css.ImageGalleryItem}>
      <img
        className={css['ImageGalleryItem-image']}
        src={src}
        alt={alt}
        onClick={handleClick}
      />
    </li>
  );
};
export default ImageGalleryItem;
