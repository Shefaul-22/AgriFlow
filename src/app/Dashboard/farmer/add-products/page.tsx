"use client";

import { useState } from "react";
import Swal from "sweetalert2";

export default function AddProductPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
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

      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Product Added Successfully",
          timer: 2000,
          showConfirmButton: false,
        });

        form.reset();
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: data.error,
        });
      }
    } catch (error) {
      console.log(error);

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Add Product
      </h1>

      <form
        onSubmit={handleSubmit}
        className="grid gap-4"
      >
        <input
          name="name"
          placeholder="Product Name"
          className="input input-bordered w-full"
          required
        />

        <input
          name="category"
          placeholder="Category"
          className="input input-bordered w-full"
          required
        />

        <input
          name="price"
          type="number"
          placeholder="Price"
          className="input input-bordered w-full"
          required
        />

        <input
          name="unit"
          placeholder="Unit"
          className="input input-bordered w-full"
          required
        />

        <input
          name="location"
          placeholder="Location"
          className="input input-bordered w-full"
          required
        />

        <input
          name="seller"
          placeholder="Seller Name"
          className="input input-bordered w-full"
          required
        />

        {/* Image Upload */}
        <input
          type="file"
          name="image"
          accept="image/*"
          className="file-input file-input-bordered w-full"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          className="textarea textarea-bordered w-full"
          required
        />

        <input
          name="stock"
          type="number"
          placeholder="Stock"
          className="input input-bordered w-full"
          required
        />

        <input
          name="delivery"
          placeholder="Delivery Info"
          className="input input-bordered w-full"
          required
        />

        <input
          name="quality"
          placeholder="Quality"
          className="input input-bordered w-full"
          required
        />

        <button
          type="submit"
          className="btn btn-success"
        >
          {loading
            ? "Adding..."
            : "Add Product"}
        </button>
      </form>
    </div>
  );
}