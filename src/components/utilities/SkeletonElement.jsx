import style from '../../assets/scss/skeleton.module.scss';

const SkeletonElement = ({ type, className }) => {
  let classes = `${style.skeleton} ${style[type]}`;
  if (className) {
    classes += ` ${className}`;
  }
  return <div className={classes} />;
};

export default SkeletonElement;
