import { motion, AnimatePresence } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import { overlayAnimation } from '../../services/animation';

const LoginPopup = ({ status, onClose }) => (
  <AnimatePresence>
    {status && (
      <Dialog
        static
        as={motion.div}
        variants={overlayAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        open={status}
        onClose={onClose}
        className="fixed inset-0 z-20 flex items-center justify-center"
      >
        <Dialog.Overlay className="bg-black w-full h-full top-0 left-0 absolute opacity-40" />

        <div className="login_wrapper bg-white rounded-lg shadow-lg px-4 py-6 relative">
          <Dialog.Title>Deactivate account</Dialog.Title>
          <Dialog.Description>This will permanently deactivate your account</Dialog.Description>

          <p>
            Are you sure you want to deactivate your account? All of your data will be permanently
            removed. This action cannot be undone.
          </p>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </Dialog>
    )}
  </AnimatePresence>
);

export default LoginPopup;
