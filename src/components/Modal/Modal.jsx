import css from './Modal.module.css';

const Modal = ({src, alt}) => {
  return (
    <div class={css.Overlay}>
      <div class={css.Modal}>
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};

export default Modal;