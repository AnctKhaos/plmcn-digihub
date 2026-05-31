import { NavLink } from "react-router-dom";

export default function NavLinkButton({ to, children, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `rounded-full px-4 py-2 text-sm font-bold transition ${
          isActive ? "bg-plm-green text-white" : "text-zinc-700 hover:bg-zinc-100"
        }`
      }
    >
      {children}
    </NavLink>
  );
}
