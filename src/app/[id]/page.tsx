"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Products } from "../components/TvCollection";
import Link from "next/link";
import Spinner from "../ui/Spinner";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import NotFound from "../components/not-found";

export default function ProductById() {
  const [productType, setProductType] = useState<Products[]>([]);
  const [error, setError] = useState(false);  // Track if there was an error
  const params = useParams();
  const dispatch = useDispatch();

  const fetchProductById = async (id: string | string[]) => {
    try {
      const data = await fetch(`/api/products/${id}`);

      if (!data.ok) {
        setError(true);
        return;
      }

      const response = await data.json();
      setProductType(response.product);
    } catch (err) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchProductById(params.id);
  }, [params.id]);

  if (error) {
    return <NotFound />;
  }

  if (productType.length === 0) {
    return (
      <div className="w-full bg-gray-100 p-3 min-h-screen flex justify-center items-center">
        <Spinner />
      </div>
    );
  }

  const totalDiscount = productType.map(
    (prod) => (prod.discount / 100) * prod.price
  );

  const priceAfterDiscount = productType.map(
    (prod) => prod.price - totalDiscount[0]
  );

  const handleAddToCart = (product: Products) => {
    dispatch(addItem(product));
  };

  return (
    <div className="pt-[130px] bg-gray-100 w-full flex justify-center">
      <div className="w-full bg-white p-4 grid grid-cols-3 gap-4">
        {productType.map((product) => (
          <React.Fragment key={product.$id}>
            <div>
              <img
                src={product.product_image}
                alt={product.name}
                className="w-full border border-gray-200 h-auto"
              />
            </div>

            <div className="col-span-2">
              <Link href="/">
                <p className="text-xs text-gray-500 font-light">Home ›</p>
              </Link>
              <h1 className="text-base font-light mt-2"> {product.name} </h1>
              {product.discount ? (
                <p className="text-sm font-semibold mt-1 text-blue-400">
                  Save Extra Rs {totalDiscount.toLocaleString("en-IN")}
                </p>
              ) : null}

              <div className="flex">
                <p className="mt-1 font-semibold text-3xl">
                  NPR {priceAfterDiscount[0].toLocaleString("en-IN")}
                </p>
                {product.discount ? (
                  <>
                    <p className="mt-1 ml-3 font-light text-base text-gray-400 line-through">
                      NPR {product.price.toLocaleString("en-IN")}
                    </p>
                    <p className="mt-1 ml-3 text-blue-400">
                      {product.discount}% off
                    </p>
                  </>
                ) : null}
              </div>
              <p className="mt-1 text-sm" dangerouslySetInnerHTML={{ __html: product.description }} />
              </div>
            <button className="flex justify-center bg-[#0171b6] px-4 py-3 rounded-sm">
              <div className="flex">
                <FaShoppingCart size={18} className="text-white" />
                <p
                  className="ml-3 text-white text-sm font-semibold"
                  onClick={() => handleAddToCart(product)}
                >
                  Add To Cart
                </p>
              </div>
            </button>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
