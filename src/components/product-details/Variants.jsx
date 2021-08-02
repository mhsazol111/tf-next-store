import { motion } from 'framer-motion';
import { focusClasses } from '../../services/dummyAPI';

const Variants = ({ variants, onChange }) => (
  <div className="product_variants mt-7 flex items-center">
    {variants.map((variant) => (
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
          variant.current ? variant.color : 'bg-white'
        } relative flex flex-col items-center justify-center rounded-lg w-16 h-20 text-sm shadow mr-4`}
      >
        <span className="block mt-4 pb-1">{variant.size}</span>
        <span className="block text-xs">{variant.weight}</span>
        <div
          className={`absolute top-3 w-2 h-2 rounded-full ${
            variant.current ? 'bg-white' : variant.color
          }`}
        />
      </motion.button>
    ))}
  </div>
);

export default Variants;
