import Image from "next/image";

const Review = () => {
  return (
    <div className="w-full px-6 md:px-24 flex flex-col items-center">
      <div className="flex items-center gap-0.5">
        <Image
          src="/assets/images/star.svg"
          width={24}
          height={24}
          alt="Star"
        />
        <Image
          src="/assets/images/star.svg"
          width={24}
          height={24}
          alt="Star"
        />
        <Image
          src="/assets/images/star.svg"
          width={24}
          height={24}
          alt="Star"
        />
        <Image
          src="/assets/images/star.svg"
          width={24}
          height={24}
          alt="Star"
        />
        <Image
          src="/assets/images/star.svg"
          width={24}
          height={24}
          alt="Star"
        />
      </div>
      <p className="font-powerGrotesk mt-8 text-center text-2xl leading-7 max-w-1138">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
        Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
        mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
        tellus. Nullam quis imperdiet augue.{" "}
      </p>
      <p className="font-articulat mt-6 text-center text-base leading-6">
        Ronald Richards, Atieler
      </p>
    </div>
  );
};

export default Review;
