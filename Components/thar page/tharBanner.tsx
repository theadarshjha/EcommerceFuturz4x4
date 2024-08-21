import Image from 'next/image';

const TharBanner = () => {
  return (
    <div className="relative bg-gray-800 text-white lg:w-full lg:h-[600px] w-full h-40 ">
      <div className="absolute inset-0">
        <Image
          src="/banner/banner1.png"
          alt="Thar Banner"
          layout="fill"
          objectFit="cover"
          quality={75}
          className="opacity-100"
        />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
        {/* Your other content here */}
      </div>

     
    </div>
  );
};

export default TharBanner;
