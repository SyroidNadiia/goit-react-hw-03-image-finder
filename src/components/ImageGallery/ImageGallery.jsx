import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';

const ImageGallery = ({ pictures, onClick }) => {
  return (
    <ul className={css.ImageGallery}>
      {pictures.map(item => (
        <ImageGalleryItem
          key={item.id}
          src={item.webformatURL}
          alt={item.pageURL}
          onClick={onClick}
          id={item.id}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      pageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};
