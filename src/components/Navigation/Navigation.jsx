import { useAuth } from 'hooks';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className="flex space-x-4">
      <NavLink
        className="curcor-pointer text-gray-dark text-xl font-bold"
        to="/"
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className="flex space-x-2 curcor-pointer text-gray-dark text-xl font-bold"
          to="/contacts"
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
