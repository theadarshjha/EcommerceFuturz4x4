// components/Breadcrumb.tsx

import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string | null; // href can be a string or null if it's the current page
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="breadcrumb" className="my-4">
      <ol className="flex text-gray-500 space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index !== 0 && <span className="mx-2">/</span>}
            {item.href ? (
              <Link href={item.href}>
                <a className="hover:text-gray-700">{item.label}</a>
              </Link>
            ) : (
              <span className="text-gray-700">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav> 
  );
};

export default Breadcrumb;
