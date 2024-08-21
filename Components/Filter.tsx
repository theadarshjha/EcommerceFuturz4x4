// components/Filter.tsx
import { useState, Dispatch, SetStateAction } from 'react';
import { Dialog, Disclosure, Menu } from '@headlessui/react';
import { FunnelIcon, MinusIcon, PlusIcon, XMarkIcon } from '@heroicons/react/20/solid';  // Heroicons v2 path
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { filters as filterData } from '@/Components/data/filter';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

interface FilterProps {
  filters: {
    priceRange: number[];
    searchQuery: string;
  };
  setFilters: Dispatch<SetStateAction<{
    priceRange: number[];
    searchQuery: string;
  }>>;
}

export default function Filter({ filters, setFilters }: FilterProps) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Get current category from URL or props
  const currentCategory = 'interior'; // Adjust as necessary for your use case

  // Get filter options for the current category
  const filterOptions = filterData[currentCategory] || [];

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Dialog open={mobileFiltersOpen} onClose={() => setMobileFiltersOpen(false)} className="relative z-40 lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-25 transition-opacity" />
          <div className="fixed inset-0 z-40 flex">
            <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition ease-in-out">
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4 border-t border-gray-200">
                <Disclosure as="div" className="border-t border-gray-200 px-4 py-6">
                  {({ open }) => (
                    <>
                      <h3 className="-mx-2 -my-3 flow-root">
                        <Disclosure.Button className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                          <span className="font-medium text-gray-900">Filter by {currentCategory}</span>
                          <span className="ml-6 flex items-center">
                            <PlusIcon
                              className={classNames(open ? 'hidden' : 'block', 'h-5 w-5')}
                              aria-hidden="true"
                            />
                            <MinusIcon
                              className={classNames(open ? 'block' : 'hidden', 'h-5 w-5')}
                              aria-hidden="true"
                            />
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel className="pt-6">
                        <div className="space-y-6">
                          {filterOptions.map((option, optionIdx) => (
                            <div key={option} className="flex items-center">
                              <input
                                id={`filter-${currentCategory}-${optionIdx}`}
                                name={`${currentCategory}[]`}
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor={`filter-${currentCategory}-${optionIdx}`}
                                className="ml-3 min-w-0 flex-1 text-gray-500"
                              >
                                {option}
                              </label>
                            </div>
                          ))}
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </form>
            </Dialog.Panel>
          </div>
        </Dialog>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">{currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1)}</h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <FontAwesomeIcon icon={faChevronDown}
                      aria-hidden="true"
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                  </Menu.Button>
                </div>

                <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <Menu.Item key={option.name}>
                        {({ active }) => (
                          <a
                            href={option.href}
                            className={classNames(
                              option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            {option.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Menu>

              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <Disclosure as="div" className="border-b border-gray-200 py-6">
                  {({ open }) => (
                    <>
                      <h3 className="-my-3 flow-root">
                        <Disclosure.Button className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                          <span className="font-medium text-gray-900">Filter by {currentCategory}</span>
                          <span className="ml-6 flex items-center">
                            <PlusIcon
                              className={classNames(open ? 'hidden' : 'block', 'h-5 w-5')}
                              aria-hidden="true"
                            />
                            <MinusIcon
                              className={classNames(open ? 'block' : 'hidden', 'h-5 w-5')}
                              aria-hidden="true"
                            />
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel className="pt-6">
                        <div className="space-y-4">
                          {filterOptions.map((option, optionIdx) => (
                            <div key={option} className="flex items-center">
                              <input
                                id={`filter-${currentCategory}-${optionIdx}`}
                                name={`${currentCategory}[]`}
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label htmlFor={`filter-${currentCategory}-${optionIdx}`} className="ml-3 text-sm text-gray-600">
                                {option}
                              </label>
                            </div>
                          ))}
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                {/* Your content */}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
