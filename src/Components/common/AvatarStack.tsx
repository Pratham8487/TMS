import React from "react";

interface AvatarStackProps {
  images: string[];
}

const AvatarStack: React.FC<AvatarStackProps> = ({ images }) => {
  return (
    <div className="flex items-center">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Avatar ${index + 1}`}
          className="w-6 h-6 rounded-full border-2 border-white object-cover -ml-3 first:ml-0 shadow-md"
        />
      ))}
    </div>
  );
};

export default AvatarStack;

// Example usage:
// <AvatarStack images={["/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg", "/img5.jpg"]} />
