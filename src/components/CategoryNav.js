import Link from 'next/link';

const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

const CategoryNav = () => {
  return (
    <nav className="category-nav">
      {categories.map((category) => (
        <Link key={category} href={`/category/${category}`} legacyBehavior>
          <a>{category}</a>
        </Link>
      ))}
    </nav>
  );
};

export default CategoryNav;