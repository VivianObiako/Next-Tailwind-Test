import Image from "next/image";

const Insights = () => {
  return (
    <div className="w-full px-6 pb-24">
      <div className="flex w-full items-center justify-between">
        <h2 className="2xl:text-2xl text-lg font-medium uppercase">
          Latest news and insights
        </h2>
        <a className="cursor-pointer font-articulat text-sm font-medium underline">
          Browse all
        </a>
      </div>
      <div className="grid w-full grid-cols-1 py-7 md:grid-cols-2 gap-0.5">
        <div className="relative w-full">
          <Image
            src="/assets/images/Latest_news/insight-1.png"
            width={710}
            height={453}
            alt="insight-1"
            className="rounded w-full md:min-h-96"
          />
          <div className="absolute bottom-4 left-4 md:bottom-10 md:left-10 lg:left-14 w-72 lg:w-96">
            <button className="rounded-full bg-white px-6 py-2 font-powerGrotesk text-sm font-medium uppercase text-black hover:bg-gray-50">
              Category
            </button>
            <h4 className="py-4 md:py-6 font-powerGrotesk 2xl:text-2xl text-lg uppercase leading-7 text-white">
              Lorem ipsum dolor sit amet, constur adipiscing elit.
            </h4>
            <p className="font-articulat text-sm text-white">
              7 Nov.2023 - John Smith - 3 mins
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5">
          <div className="flex flex-col">
            <Image
              src="/assets/images/Latest_news/insight-2.png"
              width={710}
              height={453}
              alt="insight-2"
              className="rounded"
            />
            <div className="w-full flex flex-col items-start flex-1 px-4 lg:px-8 pt-7">
              <button className="rounded-full bg-black px-6 py-2 font-powerGrotesk text-sm font-medium uppercase text-white hover:bg-gray-900">
                Category
              </button>
              <h4 className="pt-6 font-powerGrotesk 2xl:text-2xl lg:text-lg md:text-base uppercase leading-7 text-black">
                Lorem ipsum dolor sit amet, constur adipiscing elit.
              </h4>
              <p className="font-articulat mt-auto text-sm text-black">
                7 Nov.2023 - John Smith - 3 mins
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <Image
              src="/assets/images/Latest_news/insight-3.png"
              width={710}
              height={453}
              alt="insight-3"
              className="rounded"
            />
            <div className="w-full flex flex-col items-start flex-1 px-4 lg:px-8 pt-7">
              <button className="rounded-full bg-black px-6 py-2 font-powerGrotesk text-sm font-medium uppercase text-white hover:bg-gray-900">
                Category
              </button>
              <h4 className="pt-6 font-powerGrotesk 2xl:text-2xl lg:text-lg md:text-base uppercase leading-7 text-black">
                Lorem ipsum dolor sit amet, constur adipiscing elit.
              </h4>
              <p className="font-articulat mt-auto text-sm text-black">
                7 Nov.2023 - John Smith - 3 mins
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
