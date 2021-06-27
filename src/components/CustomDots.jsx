import style from '../assets/scss/home.module.scss';

const CustomDots = ({ onClick, active }) => (
  <li className={active ? style.dot_active : ''}>
    <button type="button" onClick={() => onClick()} />
  </li>
);

export default CustomDots;
