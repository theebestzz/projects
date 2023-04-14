import Wrapper from "@/components/Header/Wrapper";
import ProductDetailsCarousel from "@/components/Product/ProductDetailsCarousel";
import RelatedProduct from "@/components/Product/RelatedProduct";
import { fetchDataFromApi } from "@/utils/api";
import { getDiscountedPricePercentage } from "@/utils/helper";
import React, { useState } from "react";
import { RiHeart3Line, RiShoppingCartLine } from "react-icons/ri";
import ReactMarkdown from "react-markdown";

const ProductDetails = ({ product, products }) => {
  const [selectedSize, setSelectedSize] = useState();
  const [showError, setShowError] = useState(false);
  const productDetail = product?.data?.[0]?.attributes;
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel images={productDetail.image.data} />
          </div>
          <div className="flex-[1] py-3">
            <div className="text-[34px] font-semibold mb-2">
              {productDetail.name}
            </div>
            <div className="text-lg font-semibold mb-5">
              {productDetail.subtitle}
            </div>
            <div className="flex items-center text-black/[0.9]">
              <p className="mr-2 text-lg font-semibold">
                &euro;{productDetail.price}
              </p>
              {productDetail.original_price && (
                <>
                  <p className="text-base  font-medium line-through">
                    &euro;{productDetail.original_price}
                  </p>
                  <p className="ml-auto text-base font-medium text-green-500">
                    {getDiscountedPricePercentage(
                      productDetail.original_price,
                      productDetail.price
                    )}
                    % off
                  </p>
                </>
              )}
            </div>

            <div className="mb-10">
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">Select Size</div>
                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                  Select Guide
                </div>
              </div>
              <div id="sizesGrid" className="grid grid-cols-3 gap-2">
                {productDetail.size.data.map((item, i) => (
                  <div
                    key={i}
                    title={item.enabled ? `${item.size}` : "Out of stock"}
                    className={`border rounded-md text-center py-3 font-medium ${
                      item.enabled
                        ? "hover:border-black cursor-pointer"
                        : "cursor-not-allowed bg-black/[0.1] opacity-50"
                    } ${selectedSize === item.size ? "border-black" : ""}`}
                    onClick={() => {
                      setSelectedSize(item.size);
                      setShowError(false);
                    }}
                  >
                    {item.size}
                  </div>
                ))}
              </div>
              {showError && (
                <div className="text-red-600 text-center mt-5">
                  Size Selection is required
                </div>
              )}
            </div>
            <button
              className="flex items-center justify-center gap-2 w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3"
              onClick={() => {
                if (!selectedSize) {
                  setShowError(true);
                  document.getElementById("sizesGrid").scrollIntoView({
                    block: "center",
                    behavior: "smooth",
                  });
                }
              }}
            >
              Add to Cart <RiShoppingCartLine size={20} />
            </button>
            <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
              Whishlist <RiHeart3Line size={20} />
            </button>
            <div>
              <div className="text-lg mb-5">
                <ReactMarkdown>{productDetail.description}</ReactMarkdown>
              </div>
              <div className="markdown text-md mb-5">
                <ReactMarkdown>{productDetail.product_desc}</ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ProductDetails;

export async function getStaticPaths() {
  const products = await fetchDataFromApi("/api/products?populate=*");
  const paths = products?.data?.map((p) => ({
    params: {
      slug: p.attributes.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const product = await fetchDataFromApi(
    `/api/products?populate=*&filters[slug][$eq]=${slug}`
  );
  const products = await fetchDataFromApi(
    `/api/products?populate=*&[filters][slug][$ne]=${slug}`
  );

  return {
    props: {
      product,
      products,
    },
  };
}
