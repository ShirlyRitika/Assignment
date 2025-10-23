
"use client";
import React, { useState } from "react";

const GalleryWidget = () => {
  const [images, setImages] = useState(
    [
      "https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&q=60&w=600",
      "https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&q=60&w=600",
      "https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&q=60&w=600",
    ].map((url) => ({ url, active: false }))
  );

  const addImage = () => {
    const url = prompt("Enter image URL");
    if (url) setImages([...images, { url, active: false }]);
  };

  const handleClick = (index: number) => {
    setImages((prev) =>
      prev.map((img, i) =>
        i === index ? { ...img, active: !img.active } : img
      )
    );
  };

  return (
    <div className="bg-[#2B2E3C] shadow-lg rounded-2xl p-6 w-full max-w-md mx-auto">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        {/* Gallery title */}
        <div className="bg-black text-white px-5 py-2 rounded-xl shadow-[0_0_10px_rgba(255,255,255,0.3)] font-semibold text-sm">
          Gallery
        </div>

        {/* Add Image Box */}
        <div
          onClick={addImage}
          className="bg-[#3A3E4F] text-white px-4 py-2 rounded-xl shadow-[0_0_10px_rgba(255,255,255,0.2)] hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all duration-300 ease-in-out cursor-pointer font-medium text-sm"
        >
          + Add Image
        </div>

        {/* Arrow controls */}
        <div className="flex items-center gap-3">
          <div className="bg-[#3A3E4F] w-9 h-9 rounded-xl flex items-center justify-center text-white shadow-[0_0_10px_rgba(255,255,255,0.2)] hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all duration-300 ease-in-out cursor-pointer">
            ←
          </div>
          <div className="bg-[#3A3E4F] w-9 h-9 rounded-xl flex items-center justify-center text-white shadow-[0_0_10px_rgba(255,255,255,0.2)] hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all duration-300 ease-in-out cursor-pointer">
            →
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {images.map((img, i) => (
          <div
            key={i}
            onClick={() => handleClick(i)}
            className={`cursor-pointer transform transition-all duration-500 ease-in-out ${
              img.active
                ? "scale-110 -translate-y-2 shadow-lg shadow-blue-400/40"
                : "scale-100 translate-y-0 hover:scale-105 hover:-translate-y-1"
            }`}
          >
            <img
              src={img.url}
              alt={`gallery-${i}`}
              className={`w-full h-28 object-cover rounded-xl transition-all duration-500 ease-in-out ${
                img.active
                  ? "grayscale-0"
                  : "grayscale brightness-50 hover:brightness-90"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryWidget;
