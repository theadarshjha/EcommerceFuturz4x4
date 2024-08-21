import { useState } from 'react';

const accessories = [
  {
    name: 'Alloy Wheels',
    types: [
      { name: 'Alloy Wheel 1', previewImage: 'http://crayfordmazdaaccessories.co.uk/WebRoot/Store10/Shops/6f8f966e-2398-4fbb-a475-f7f594ff20ec/587E/3772/112C/4A94/E5DA/0A48/3521/98D5/005._Alloy_Wheel_9965087590CN.png', finalImage: 'https://imgd-ct.aeplcdn.com/1056x660/n/g3qpp0b_1638621.jpg?q=75.jpg' },
      { name: 'Alloy Wheel 2', previewImage: 'http://www.carid.com/images/replace/items/aly02512u45-1.jpg', finalImage: 'https://example.com/alloy-wheel-2-final.jpg' },
      { name: 'Alloy Wheel 3', previewImage: 'https://tse4.mm.bing.net/th?id=OIP.Hl14d-AhbLWrkHOVnHJaOQHaGH&pid=Api&P=0&h=180.jpg', finalImage: 'https://example.com/alloy-wheel-3-final.jpg' },
      { name: 'Alloy Wheel 4', previewImage: 'https://example.com/alloy-wheel-4.jpg', finalImage: 'https://example.com/alloy-wheel-4-final.jpg' },
    ],
  },
  {
    name: 'Front Bumper',
    types: [
      { name: 'Front Bumper 1', previewImage: 'https://tse3.mm.bing.net/th?id=OIP.f3BykmKckTxHkOhMjhVGdAHaEL&pid=Api&P=0&h=180.jpg', finalImage: 'https://example.com/front-bumper-1-final.jpg' },
      { name: 'Front Bumper 2', previewImage: 'https://example.com/front-bumper-2.jpg', finalImage: 'https://example.com/front-bumper-2-final.jpg' },
    ],
  },
  {
    name: 'Roof Carrier',
    types: [
      { name: 'Roof Carrier 1', previewImage: 'https://wallpaperaccess.com/full/3939234.jpg', finalImage: 'https://example.com/roof-carrier-1-final.jpg' },
      { name: 'Roof Carrier 2', previewImage: 'https://example.com/roof-carrier-2.jpg', finalImage: 'https://example.com/roof-carrier-2-final.jpg' },
    ],
  },
];

const AccessoriesSection = () => {
  const [selectedAccessory, setSelectedAccessory] = useState(null);
  const [finalImage, setFinalImage] = useState(null);

  return (
    <div className="flex">
      <div className="w-1/2 p-4">
        <h2 className="text-xl font-bold mb-4">Accessories</h2>
        <ul>
          {accessories.map((accessory, index) => (
            <li key={index} className="mb-2">
              <button
                className="text-blue-500"
                onClick={() => {
                  setSelectedAccessory(accessory);
                }}
              >
                {accessory.name}
              </button>
            </li>
          ))}
        </ul>
        {selectedAccessory && (
          <div>
            <h3 className="text-lg font-bold mb-2">{selectedAccessory.name} Types</h3>
            <div className="grid grid-cols-2 gap-2">
              {selectedAccessory.types.map((type, index) => (
                <div key={index} className="p-2 border border-gray-300">
                  <img src={type.previewImage} alt={type.name} className="w-[160px] h-[150px] object-cover mb-1" />
                  <span>{type.name}</span>
                  <button
                    className="bg-blue-500 text-white px-2 py-1 mt-2 block w-full"
                    onClick={() => setFinalImage(type.finalImage)}
                  >
                    Add to Thar
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="w-1/2 p-4">
        <h2 className="text-xl font-bold mb-4">Preview</h2>
        <div className="relative w-full h-64 bg-gray-200">
          <img
            src="https://i.trse.ru/2022/07/ei53.jpg"
            alt="Thar"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {finalImage && (
            <img
              src={finalImage}
              alt="Selected Accessory"
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AccessoriesSection;
