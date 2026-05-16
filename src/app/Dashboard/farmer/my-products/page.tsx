"use client";

import { useEffect, useState } from "react";
import Swal from "sweetalert2";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  unit: string;
  location: string;
  image: string;
  description: string;
  stock: number;
  delivery: string;
  quality: string;
}

export default function MyProducts() {
  const [products, setProducts] = useState<
    Product[]
  >([]);

  const [loading, setLoading] =
    useState(true);

  // fetch products
  const fetchProducts = async () => {
    try {
      const res = await fetch(
        "/api/my-products"
      );

      const data = await res.json();

      setProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // delete
  const handleDelete = async (
    id: number
  ) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This product will be deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText:
        "Yes, delete it!",
    });

    if (!result.isConfirmed) return;

    try {
      const res = await fetch(
        `/api/my-products/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await res.json();

      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: data.message,
          timer: 1500,
          showConfirmButton: false,
        });

        setProducts((prev) =>
          prev.filter(
            (product) => product.id !== id
          )
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  // update
  const handleUpdate = async (
    product: Product
  ) => {
    const { value: formValues } =
      await Swal.fire({
        title: "Update Product",

        html: `
        <input id="name" class="swal2-input" placeholder="Name" value="${product.name}">
        
        <input id="price" type="number" class="swal2-input" placeholder="Price" value="${product.price}">
        
        <input id="stock" type="number" class="swal2-input" placeholder="Stock" value="${product.stock}">
        
        <input id="unit" class="swal2-input" placeholder="Unit" value="${product.unit}">
        
        <textarea id="description" class="swal2-textarea" placeholder="Description">${product.description}</textarea>
      `,

        focusConfirm: false,

        showCancelButton: true,

        preConfirm: () => {
          return {
            name: (
              document.getElementById(
                "name"
              ) as HTMLInputElement
            ).value,

            price: (
              document.getElementById(
                "price"
              ) as HTMLInputElement
            ).value,

            stock: (
              document.getElementById(
                "stock"
              ) as HTMLInputElement
            ).value,

            unit: (
              document.getElementById(
                "unit"
              ) as HTMLInputElement
            ).value,

            description: (
              document.getElementById(
                "description"
              ) as HTMLTextAreaElement
            ).value,
          };
        },
      });

    if (!formValues) return;

    try {
      const res = await fetch(
        `/api/my-products/${product.id}`,
        {
          method: "PATCH",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(formValues),
        }
      );

      const data = await res.json();

      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Updated!",
          text: data.message,
          timer: 1500,
          showConfirmButton: false,
        });

        fetchProducts();
      }
    } catch (error) {
      console.log(error);
    }
  };

  // loading
  if (loading) {
    return (
      <div className="flex justify-center items-center 
      min-h-[50vh]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="w-full px-3 sm:px-5 md:px-8 py-6">
      {/* heading */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl 
        font-bold text-center">
          My Products
        </h1>
      </div>

      {/* empty state */}
      {products.length === 0 && (
        <div className="text-center py-16">
          <h2 className="text-xl font-semibold">
            No Products Found
          </h2>

          <p className="text-gray-500 mt-2">
            Add your first product.
          </p>
        </div>
      )}

      {/* products grid */}
      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        gap-5
      "
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="
              bg-white
              
              rounded-2xl
              overflow-hidden
              shadow-sm
              hover:shadow-xl
              transition-all
              duration-300
              flex
              flex-col
            "
          >
            {/* image */}
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="
                  w-full
                  h-52
                  sm:h-56
                  md:h-60
                  object-cover
                "
              />
            </div>

            {/* content */}
            <div className="p-4 flex flex-col flex-1">
              {/* title */}
              <div className="mb-3">
                <h2
                  className="
                  text-xl
                  sm:text-2xl
                  font-bold
                  line-clamp-1
                "
                >
                  {product.name}
                </h2>

                <p
                  className="
                  text-sm
                  text-gray-500
                  mt-1
                "
                >
                  {product.category}
                </p>
              </div>

              {/* info */}
              <div className="space-y-2 text-sm sm:text-base flex-1">
                <p className="font-semibold text-lg">
                  ${product.price} /{" "}
                  {product.unit}
                </p>

                <p>
                  <span className="font-bold">
                    Stock:
                  </span>{" "}
                  {product.stock}
                </p>

                <p>
                  <span className="font-bold">
                    Quality:
                  </span>{" "}
                  {product.quality}
                </p>

                <p>
                  <span className="font-bold">
                    Delivery:
                  </span>{" "}
                  {product.delivery}
                </p>

                <p
                  className="
                  text-green-600
                  text-lg
                  leading-relaxed
                  line-clamp-3
                "
                >
                  {product.description}
                </p>
              </div>

              {/* buttons */}
              <div
                className="
                flex
                flex-col
                sm:flex-row
                gap-3
                mt-5
              "
              >
                <button
                  onClick={() =>
                    handleUpdate(product)
                  }
                  className="
                    btn
                    btn-warning
                    flex-1
                    text-white
                  "
                >
                  Update
                </button>

                <button
                  onClick={() =>
                    handleDelete(product.id)
                  }
                  className="
                    btn
                    btn-error
                    flex-1
                    text-white
                  "
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}