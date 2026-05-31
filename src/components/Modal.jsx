import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

export default function Modal({ open, title, children, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            className="max-h-[86vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] bg-white p-7 shadow-2xl"
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <h2 className="text-2xl font-black">{title}</h2>
              <button onClick={onClose} className="rounded-full bg-zinc-100 p-2 hover:bg-zinc-200">
                <X size={20} />
              </button>
            </div>
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
