import styles from '../../assets/scss/header.module.scss';

const TopHeader = () => {
  console.log('top header');
  return (
    <div className={`${styles.top_header} bg-[#f5f6f9] text-[#777] text-sm`}>
      <div className="container">
        <div className="flex justify-between">
          <div className="left_col flex items-center">
            <a href="tel:123456" className="flex items-center mr-5">
              <i className="ri-phone-line" />
              <span className="block ml-1">Call: +1234567890</span>
            </a>
            <a href="mailto:example@email.com" className="flex items-center">
              <i className="ri-mail-line" />
              <span className="block ml-1">example@email.com</span>
            </a>
          </div>
          <div className="right_col flex items-center justify-items-end">sign up/sign in</div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
