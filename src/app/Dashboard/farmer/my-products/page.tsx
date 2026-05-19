"use client";

import { useEffect, useState } from "react";
import Swal from "sweetalert2";

type Product = {
  id: number;
  name: string;
  price: number;
  stock: number;
  image: string;
  unit: string;
  description: string;
};

export default function MyProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  const [editProduct, setEditProduct] =
    useState<Product | null>(null);

  const fetchProducts = async () => {
    setLoading(true);

    try {
      const res = await fetch("/api/my-products");
      const data = await res.json();

      if (data.success) {
        setProducts(data.products);
      } else {
        setProducts([]);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // DELETE
  const handleDelete = async (id: number) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This product will be deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
    });

    if (!confirm.isConfirmed) return;

    const res = await fetch(`/api/my-products/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();

    if (data.success) {
      Swal.fire("Deleted!", "", "success");

      setProducts((prev) =>
        prev.filter((p) => p.id !== id)
      );
    }
  };

  // UPDATE
  const handleUpdate = async () => {
    if (!editProduct) return;

    const res = await fetch(
      `/api/my-products/${editProduct.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editProduct),
      }
    );

    const data = await res.json();

    if (data.success) {
      Swal.fire("Updated!", "", "success");

      setEditProduct(null);
      fetchProducts();
    } else {
      Swal.fire("Error", "", "error");
    }
  };

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">
        My Products
      </h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p) => (
            <div
              key={p.id}
              className="border rounded-xl p-4 shadow hover:shadow-lg transition"
            >
              <img
                src={p.image}
                className="h-40 w-full object-cover rounded-lg"
              />

              <h2 className="font-bold mt-2 text-lg">
                {p.name}
              </h2>

              <p className="text-sm">
                Price: {p.price}
              </p>
              <p className="text-sm">
                Stock: {p.stock}
              </p>

              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => setEditProduct(p)}
                  className="flex-1 bg-blue-500 text-white py-2 rounded-lg"
                >
                  Update
                </button>

                <button
                  onClick={() => handleDelete(p.id)}
                  className="flex-1 bg-red-500 text-white py-2 rounded-lg"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ================= UPDATE MODAL ================= */}
      {editProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-md p-6 rounded-xl">
            <h2 className="text-xl font-bold mb-4">
              Update Product
            </h2>

            <input
              className="w-full border p-2 mb-2"
              value={editProduct.name}
              onChange={(e) =>
                setEditProduct({
                  ...editProduct,
                  name: e.target.value,
                })
              }
            />

            <input
              className="w-full border p-2 mb-2"
              value={editProduct.price}
              onChange={(e) =>
                setEditProduct({
                  ...editProduct,
                  price: Number(e.target.value),
                })
              }
            />

            <input
              className="w-full border p-2 mb-2"
              value={editProduct.stock}
              onChange={(e) =>
                setEditProduct({
                  ...editProduct,
                  stock: Number(e.target.value),
                })
              }
            />

            <input
              className="w-full border p-2 mb-2"
              value={editProduct.unit}
              onChange={(e) =>
                setEditProduct({
                  ...editProduct,
                  unit: e.target.value,
                })
              }
            />

            <textarea
              className="w-full border p-2 mb-4"
              value={editProduct.description}
              onChange={(e) =>
                setEditProduct({
                  ...editProduct,
                  description: e.target.value,
                })
              }
            />

            <div className="flex gap-2">
              <button
                onClick={handleUpdate}
                className="flex-1 bg-green-600 text-white py-2 rounded-lg"
              >
                Save
              </button>

              <button
                onClick={() => setEditProduct(null)}
                className="flex-1 bg-gray-400 text-white py-2 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}