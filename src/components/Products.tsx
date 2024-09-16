import Image from "next/image";

type Product = {
  image: string;
  title: string;
  price?: number;
  originalPrice?: number;
  originalPriceRemoved: boolean;
  maker: string;
  currency: string;
};

const LatestProducts = ({
  title,
  products,
}: {
  title: string;
  products: Product[];
}) => {
  return (
    <div className="font-powerGrotesk w-full px-6 md:px-24">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-medium uppercase">{title}</h1>
        <a className="cursor-pointer text-sm font-medium font-articulat leading-5 border-b border-gray-950">
          Browse all
        </a>
      </div>
      <div className="w-full mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center gap-0.5 gap-y-8 justify-center">
        {products.map((product: Product, index: number) => (
          <div key={index} className="w-content m-auto">
            <Image
              src={product.image}
              width={350}
              height={415}
              alt={product.title}
            />
            <p className="mt-4 text-lg font-medium leading-[26px] font-articulat">
              {product.title}
            </p>
            <div className="flex items-center gap-2 font-articulat">
              {product.originalPrice && (
                <p
                  className={`text-base font-medium leading-[26px] ${product.originalPriceRemoved ? "line-through" : ""}`}
                >
                  {product.currency}
                  {product.originalPrice}
                </p>
              )}
              {product.price && (
                <span className="text-base leading-[26px]">
                  {product.currency}
                  {product.price}
                </span>
              )}
            </div>
            <p className="text-xs leading-5 font-articulat">{product.maker}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
