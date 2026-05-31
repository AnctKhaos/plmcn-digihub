import { motion } from "framer-motion";

export default function PageHeader({ eyebrow = "CN Digital Hub", title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8 rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-zinc-100"
    >
      <p className="text-sm font-black uppercase tracking-[0.2em] text-plm-green">{eyebrow}</p>
      <h1 className="mt-2 text-3xl font-black tracking-tight md:text-5xl">{title}</h1>
      {subtitle && <p className="mt-3 max-w-3xl leading-relaxed text-zinc-600">{subtitle}</p>}
    </motion.div>
  );
}
