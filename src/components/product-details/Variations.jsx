import { motion } from 'framer-motion';
import { focusClasses } from '../../services/dummyAPI';

const Variations = ({ variations, onChange }) => (
  <div className="product_variants pt-7 flex items-center">
    {variations.map((variant) => (
      <motion.button
        key={variant.id}
        whileHover={{
          rotateZ: 7,
        }}
        type="button"
        onClick={() => {
          onChange(variant.id);
        }}
        className={`group ${focusClasses} ${
          variant.current ? variant.bgColor : 'bg-white'
        } relative flex flex-col items-center justify-center rounded-lg min-w-[4rem] h-20 px-2 text-sm shadow mr-4`}
      >
        <span className="block mt-4 pb-1">{variant.attributes[0]}</span>
        <span className="block text-xs">{variant.attributes[1]}</span>
        <div
          className={`absolute top-3 w-2 h-2 rounded-full ${
            variant.current ? 'bg-white' : variant.bgColor
          }`}
        />
      </motion.button>
    ))}
  </div>
);

export default Variations;
