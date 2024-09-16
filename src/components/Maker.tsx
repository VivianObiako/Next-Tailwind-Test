import Image from "next/image";

const Maker = () => {
  return (
    <div className="bg-maker grid w-full grid-cols-1 gap-10 px-6 md:grid-cols-2 md:gap-0 md:px-24 py-20">
      <div className="flex flex-col items-start pr-0 md:pr-24">
        <div className="font-powerGrotesk mb-4 rounded-full border border-gray-950 px-3 py-1 text-sm uppercase leading-5">
          BECOME A MAKER
        </div>

        <div className="mt-10 flex flex-col items-start gap-6 md:mt-auto">
          <h2 className="font-powerGrotesk text-4xl font-medium uppercase leading-10 tracking-tighter">
            Lorem ipsum dolor sit amet consectetur
          </h2>
          <p className="font-articulat text-lg leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus. Nullam quis imperdiet augue.
          </p>
          <button className="font-articulat mt-auto rounded-full bg-gray-950 px-7 py-4 text-sm font-medium leading-5 text-maker">
            Learn more
          </button>
        </div>
      </div>
      <Image
        src="/assets/images/Maker.png"
        width={747}
        height={550}
        alt="Maker"
        className="flex-1"
      />
    </div>
  );
};

export default Maker;
