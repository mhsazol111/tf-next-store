import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { focusClasses } from '../../services/dummyAPI';

const ProductAccordion = () => {
  // const [info, setInfo] = useState(false);
  // const [variation, setVariation] = useState(false);
  // const [demo, setDemo] = useState(false);

  const [info, setInfo] = useState([
    {
      id: 1,
      title: 'About The Product',
      active: true,
    },
    {
      id: 2,
      title: 'Variations',
      active: false,
    },
    {
      id: 3,
      title: 'Request a Demo',
      active: false,
    },
  ]);

  const handleToggle = (item) => {
    const accordions = [...info];
    const index = accordions.indexOf(item);

    const inactiveItems = accordions.filter((i) => i.active !== item.active);
    /* eslint array-callback-return: "off" */
    inactiveItems.map((accordion) => {
      accordion.active = false;
    });

    accordions[index].active = true;

    setInfo(accordions);

    console.log(index, accordions);
  };

  return (
    <div className="">
      {info.map((item) => (
        <div key={item.id} className="pb-5">
          <button
            type="button"
            onClick={() => handleToggle(item)}
            className={`${focusClasses} rounded-2xl block border-4 border-black px-6 py-5 mx-auto font-semibold text-3xl min-w-[400px] hover:bg-yellow-200 hover:border-yellow-200`}
          >
            {item.title}
          </button>
          <AnimatePresence>
            {item.active && (
              <motion.div
                variants={{
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  // exit: { opacity: 0 },
                }}
                initial="initial"
                animate="animate"
                exit="exit"
                className="leading-loose max-w-[1000px] mt-5 mx-auto"
              >
                <p className="pb-3">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt iusto
                  consequatur possimus corporis asperiores ipsam quia odio, minima, ea nihil
                  praesentium! Eaque dolorum exercitationem vitae adipisci quod, rem mollitia cum
                  optio nesciunt temporibus voluptatem quas fugit tenetur obcaecati. Blanditiis
                  deleniti neque vitae voluptatem vero velit mollitia sint animi accusantium ex?
                  Eveniet excepturi tenetur vero.
                </p>
                <p className="pb-3">
                  Neque eaque pariatur veniam veritatis error odio aperiam rerum sint velit! Nisi,
                  ab cupiditate aperiam quasi eaque reprehenderit ipsum et maxime alias tempora
                  laborum odit fugiat debitis sit accusamus natus itaque, eligendi magni at amet,
                  cum ipsa hic. Animi, corporis quibusdam. Eos earum totam necessitatibus quidem,
                </p>
                <p className="pb-3">
                  quod quis inventore iste omnis ratione doloremque aperiam eveniet accusamus
                  libero, quasi quos rerum facilis quae nihil commodi? Aperiam ipsam assumenda totam
                  molestias eum modi. Earum nisi a quam accusamus neque! Aspernatur voluptate beatae
                  consequuntur ipsam illum.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default ProductAccordion;
