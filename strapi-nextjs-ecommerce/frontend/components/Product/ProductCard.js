import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getDiscountedPricePercentage } from "@/utils/helper";

const ProductCard = ({ data: { attributes: product, id } }) => {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="transform overflow-hidden bg-white duration-500 hover:scale-105 hover:shadow-xl"
    >
      <Image
        src={product.thumbnail.data.attributes.url}
        width={500}
        height={500}
        alt={product.name}
        title={product.name}
        className="w-full rounded-md shadow-xl text-center"
        priority={true}
      />
      <div className="p-4 text-black/[0.9]">
        <h1 className="text-lg font-medium" title={product.name}>
          {product.name}
        </h1>
        <div className="flex items-center text-black/[0.9]">
          <p className="mr-2 text-lg font-semibold">&euro;{product.price}</p>
          {product.original_price && (
            <>
              <p className="text-base  font-medium line-through">
                &euro;{product.original_price}
              </p>
              <p className="ml-auto text-base font-medium text-green-500">
                {getDiscountedPricePercentage(
                  product.original_price,
                  product.price
                )}
                % off
              </p>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
