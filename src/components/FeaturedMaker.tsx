import Image from "next/image";

const FeaturedMaker = () => {
  return (
    <div className="bg-featured-maker w-full px-10 py-20 lg:px-[90px]">
      <p className="border-featured-color mb-12 block w-fit rounded-full border border-[1.5px] px-3 py-1 text-sm leading-5 md:hidden">
        FEATURED MAKER
      </p>
      <div className="flex flex-col-reverse justify-between gap-10 md:flex-row">
        <div className="flex-1 xl:w-[455px] xl:flex-none">
          <p className="border-featured-color mb-[106px] hidden w-fit rounded-full border border-[1.5px] px-3 py-1 text-sm leading-5 md:block">
            FEATURED MAKER
          </p>
          <div>
            <h3 className="mb-4 font-powerGrotesk text-4xl uppercase">
              Lorem ipsum dolor sit amet consectetur
            </h3>
            <h5 className="mb-6 font-articulat">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus.
            </h5>
            <button className="border-featured-color bg-featured-color text-featured-maker rounded-full border px-8 py-3.5 font-articulat text-sm font-medium leading-5">
              View maker
            </button>
          </div>
        </div>
        <div className="flex-1 self-center">
          <Image
            src="/assets/images/featured_maker/featured_maker.png"
            width={811}
            height={550}
            alt="Maker"
            className="h-auto w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedMaker;
