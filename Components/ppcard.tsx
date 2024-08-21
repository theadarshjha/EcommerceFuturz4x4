import React from "react";

const Product = () => {
  return (
    <section className="flex flex-col sm:flex-row mx-auto my-10 p-6 bg-white rounded-lg shadow-lg max-w-4xl">
      <div className="relative flex-1">
        <div className="relative h-full">
          <div className="absolute inset-0 flex items-center justify-between p-2 text-white">
            <i className="material-icons cursor-pointer">share</i>
            <i className="material-icons cursor-pointer">favorite_border</i>
          </div>
          <img
            src="https://res.cloudinary.com/john-mantas/image/upload/v1537291846/codepen/delicious-apples/green-apple-with-slice.png"
            alt="green apple slice"
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg saturate-150 contrast-120 hue-rotate-10 drop-shadow-[1px_20px_10px_rgba(0,0,0,0.3)]"
          />
        </div>
        <div className="flex justify-around bg-white p-4 rounded-b-lg">
          <ColorOption imgSrc="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png" />
          <ColorOption imgSrc="https://res.cloudinary.com/john-mantas/image/upload/v1537303532/codepen/delicious-apples/half-apple.png" />
          <ColorOption imgSrc="https://res.cloudinary.com/john-mantas/image/upload/v1537303160/codepen/delicious-apples/green-apple-flipped.png" />
          <ColorOption imgSrc="https://res.cloudinary.com/john-mantas/image/upload/v1537303708/codepen/delicious-apples/apple-top.png" />
        </div>
      </div>
      <div className="flex-1 p-6">
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-gray-800">Delicious Apples</h1>
          <span className="text-sm text-gray-500">COD: 45999</span>
        </div>
        <div className="mb-4 text-red-600 text-xl">
          R$ <span className="text-3xl">7.93</span>
        </div>
        <ColorSelection />
        <BenefitsList />
        <button className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-700 transition duration-300">
          ADD TO CART
        </button>
      </div>
    </section>
  );
};

const ColorOption = ({ imgSrc }) => (
  <img
    src={imgSrc}
    alt="apple color option"
    width={55}
    height={55}
    className="border border-secondary rounded"
  />
);

const ColorSelection = () => (
  <div className="mb-4">
    <h3 className="text-sm text-gray-500 mb-2">SELECT A COLOR</h3>
    <div className="flex space-x-2">
      {[
        "https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png",
        "https://res.cloudinary.com/john-mantas/image/upload/v1537302752/codepen/delicious-apples/yellow-apple.png",
        "https://res.cloudinary.com/john-mantas/image/upload/v1537302427/codepen/delicious-apples/orange-apple.png",
        "https://res.cloudinary.com/john-mantas/image/upload/v1537302285/codepen/delicious-apples/red-apple.png",
      ].map((src, index) => (
        <img
          key={index}
          src={src}
          alt="apple color"
          width={35}
          height={35}
          className="border border-gray-200 rounded cursor-pointer hover:border-gray-500"
        />
      ))}
    </div>
  </div>
);

const BenefitsList = () => (
  <div className="mb-4">
    <h3 className="text-sm text-gray-500 mb-2">BENEFITS</h3>
    <ul className="list-disc list-inside text-sm text-gray-700">
      <li>Apples are nutritious</li>
      <li>Apples may be good for weight loss</li>
      <li>Apples may be good for bone health</li>
      <li>They're linked to a lower risk of diabetes</li>
    </ul>
  </div>
);

export default Product;
