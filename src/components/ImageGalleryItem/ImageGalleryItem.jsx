const ImageGalleryItem = ({id, src, alt}) => {
  return (
    <li className="gallery-item">
      <img src={src} alt={alt} />
    </li>
  );
};
export default ImageGalleryItem;
