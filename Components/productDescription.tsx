import Image from 'next/image';

export default function ProductPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-2xl w-full">
        <div className="relative h-64 w-full">
          <Image
            src="/4by4/isuzu1-removebg-preview.png"
            alt="Product Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-2">Product Title</h1>
          <p className="text-gray-700 mb-4">
            This is a detailed description of the product, highlighting its features, benefits, and specifications.
          </p>
          <p className="text-xl text-orange-500 mb-4">₹9,999.00</p>
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
