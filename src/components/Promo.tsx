import Image from "next/image";

const Promo = () => {
  return (
    <div className="grid w-full grid-cols-1 md:grid-cols-2">
      <div className="relative flex">
        <Image
          src="/assets/images/Promo/promo1.png"
          width={800}
          height={660}
          alt="promo1"
          className="flex-1"
        />
        <div className="absolute left-0 top-0 flex h-full w-full flex-col items-start px-6 py-6 sm:px-12 md:px-24 sm:py-12">
          <h4 className="font-powerGrotesk text-2xl font-medium uppercase text-white">
            PROMO SECTION
          </h4>
          <button className="font-articulat mt-auto rounded-full bg-[#E9FE97] px-10 py-4 text-sm font-medium leading-5">
            Browse all
          </button>
        </div>
      </div>
      <div className="grid grid-rows-2">
        <div className="relative">
          <Image
            src="/assets/images/Promo/promo2.png"
            width={800}
            height={330}
            alt="promo1"
          />
          <div className="absolute left-0 top-0 flex h-full w-full flex-col items-start px-6 py-6 sm:px-12 sm:py-12">
            <h4 className="font-powerGrotesk text-2xl font-medium uppercase text-white">
              PROMO SECTION 2
            </h4>
            <button className="font-articulat mt-auto rounded-full bg-[#E9FE97] px-10 py-4 text-sm font-medium leading-5">
              Browse all
            </button>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/assets/images/Promo/promo3.png"
            width={800}
            height={330}
            alt="promo1"
          />
          <div className="absolute left-0 top-0 flex h-full w-full flex-col items-start px-6 py-6 sm:px-12 sm:py-12">
            <h4 className="font-powerGrotesk text-2xl font-medium uppercase text-white">
              PROMO SECTION 3
            </h4>
            <button className="font-articulat mt-auto rounded-full bg-[#E9FE97] px-10 py-4 text-sm font-medium leading-5">
              Browse all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;
