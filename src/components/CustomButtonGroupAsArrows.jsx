import LeftArrow from '../../public/images/icons/back.svg';
import RightArrow from '../../public/images/icons/next.svg';

const CustomButtonGroupAsArrows = ({ next, previous }) => (
  <div className="home_slider_arrow absolute right-12 bottom-5">
    <button
      type="button"
      onClick={previous}
      className="mr-5 focus:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-theme_green focus-visible:ring-offset-2 focus-visible:ring-offset-theme_gray focus-visible:ring-opacity-75"
    >
      <span className="svg_icon w-4">
        <LeftArrow />
      </span>
    </button>
    <button
      type="button"
      onClick={next}
      className="focus:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-theme_green focus-visible:ring-offset-2 focus-visible:ring-offset-theme_gray focus-visible:ring-opacity-75"
    >
      <span className="svg_icon w-4">
        <RightArrow />
      </span>
    </button>
  </div>
);
export default CustomButtonGroupAsArrows;
