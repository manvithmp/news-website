import Link from 'next/link';
import SearchBar from './SearchBar';
import DarkModeToggle from './DarkModeToggle';
import CategoryNav from './CategoryNav';

const Header = () => {
  return (
    <header className="header">
      <Link href="/" legacyBehavior>
        <a className="logo">News Website</a>
      </Link>
      <SearchBar />
      <DarkModeToggle />
      <CategoryNav />
    </header>
  );
};

export default Header;