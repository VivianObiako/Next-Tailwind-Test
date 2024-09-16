import Image from "next/image";

const Designsnitch = () => {
  return (
    <div className="grid w-full grid-cols-1 md:grid-cols-2 px-6 md:px-24 gap-10 md:gap-0">
      <Image
        src="/assets/images/Designsnitch.png"
        width={747}
        height={550}
        alt="Designsnitch"
        className="flex-1"
      />
      <div className="flex flex-col items-start pl-0 md:pl-24">
        <div className="font-powerGrotesk mb-4 rounded-full border border-gray-950 px-3 py-1 text-sm uppercase leading-5">
          ABOUT Designsnitch
        </div>

        <div className="flex flex-col items-start gap-6 mt-10 md:mt-auto">
          <h2 className="font-powerGrotesk text-4xl font-medium leading-10 uppercase tracking-tighter">
            Lorem ipsum dolor sit amet, consectetur
          </h2>
          <p className="font-articulat text-lg leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus. Nullam quis imperdiet augue.{" "}
          </p>
          <button className="font-articulat mt-auto rounded-full bg-gray-950 px-7 py-4 text-sm font-medium leading-5 text-white">
            Browse all
          </button>
        </div>
      </div>
    </div>
  );
};

export default Designsnitch;
