import Image from "next/image";

const Category = () => {
  return (
    <div className="w-full px-6 md:px-24 font-powerGrotesk">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-medium uppercase">Shop by Category</h1>
        <a className="cursor-pointer text-sm font-medium font-articulat leading-5 border-b border-gray-950">
          Browse all
        </a>
      </div>

      <div className="w-full mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center gap-0.5 gap-y-8 justify-center">
        <div className="relative flex items-center justify-center">
          <Image
            src="/assets/images/Category/Lifestyle.png"
            width={350}
            height={536}
            alt="Lifestyle"
          />
          <div className="absolute rounded-full bg-gray-950 px-4 py-3 text-2xl uppercase leading-5 text-[#E9FE97]">
            Lifestyle
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <Image
            src="/assets/images/Category/Fashion.png"
            width={350}
            height={536}
            alt="Fashion"
          />
          <div className="absolute rounded-full bg-gray-950 px-4 py-3 text-2xl uppercase leading-5 text-[#E9FE97]">
            Fashion
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <Image
            src="/assets/images/Category/Homewear.png"
            width={350}
            height={536}
            alt="Homewear"
          />
          <div className="absolute rounded-full bg-gray-950 px-4 py-3 text-2xl uppercase leading-5 text-[#E9FE97]">
            Homewear
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <Image
            src="/assets/images/Category/Art.png"
            width={350}
            height={536}
            alt="Art" 
          />
          <div className="absolute rounded-full bg-gray-950 px-4 py-3 text-2xl uppercase leading-5 text-[#E9FE97]">
            Art
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
