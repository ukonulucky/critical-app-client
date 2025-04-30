import { motion, AnimatePresence } from "framer-motion";
import React from "react";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const modalVariants = {
  hidden: {
    y: "-50vh",
    opacity: 0,
    scale: 0.8
  },
  visible: {
    y: "0",
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 20 }
  },
  exit: {
    y: "50vh",
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.3 }
  }
};

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const AnimatedModal: React.FC<Props> = ({ isOpen, onClose, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6 relative"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl"
              onClick={onClose}
            >
              &times;
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
