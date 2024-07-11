import { useAppContext } from "@/context/AppContext";
import { NavLink } from 'react-router-dom';

export function Header() {
  const { state } = useAppContext();

  const linkStyle = {
    color: `${state.venue?.webSettings?.backgroundColour}`,
    padding: '0.5rem',
    textDecoration: 'none',
  };

  const activeLinkStyle = {
    borderBottom: '2px solid white',
  };

  return (
    <>
      <header className="flex justify-center gap-6" style={{ background: `${state.venue?.webSettings?.navBackgroundColour}` }}>
        <NavLink to="/" style={({ isActive }) => isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle}>MENU</NavLink>
        <NavLink to="/login" style={({ isActive }) => isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle}>ENTRAR</NavLink>
        <NavLink to="/contact" style={({ isActive }) => isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle}>CONTATO</NavLink>
      </header>
      <img
        className="h-auto w-full"
        src={`${state.venue?.webSettings?.bannerImage}`}
        alt=""
      />
    </>
  );
}
