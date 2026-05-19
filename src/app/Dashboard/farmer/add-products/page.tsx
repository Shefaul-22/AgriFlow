"use client";

import { useState } from "react";
import Swal from "sweetalert2";

export default function AddProductPage() {
  const [loading, setLoading] = useState(false);

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setLoading(true);

  const form = e.currentTarget;
  const formData = new FormData(form);

  try {
    const res = await fetch("/api/products", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (res.ok && data.success) {
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Product added successfully 🎉",
        timer: 2000,
        showConfirmButton: false,
      });

      form.reset();
    } else {
      Swal.fire({
        icon: "error",
        title: "Failed!",
        text: data.message || "Product add failed",
      });
    }
  } catch (error) {
    console.log(error);

    Swal.fire({
      icon: "error",
      title: "Error!",
      text: "Something went wrong",
    });
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6">
          Add Product
        </h1>

        <form
          onSubmit={handleSubmit}
          className="grid gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            required
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            required
            className="border p-3 rounded-lg"
          />

          <input
            type="number"
            step="0.01"
            name="price"
            placeholder="Price"
            required
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            name="unit"
            placeholder="Unit"
            required
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            required
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            name="seller"
            placeholder="Seller"
            required
            className="border p-3 rounded-lg"
          />

          <input
            type="file"
            name="image"
            accept="image/*"
            required
            className="border p-3 rounded-lg"
          />

          <textarea
            name="description"
            placeholder="Description"
            required
            className="border p-3 rounded-lg h-32"
          />

          <input
            type="number"
            name="stock"
            placeholder="Stock"
            required
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            name="delivery"
            placeholder="Delivery"
            required
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            name="quality"
            placeholder="Quality"
            required
            className="border p-3 rounded-lg"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-green-600 text-white py-3 rounded-lg"
          >
            {loading ? "Uploading..." : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
}