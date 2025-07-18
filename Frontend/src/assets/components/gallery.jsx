import React, { useState } from "react";

const campus_life_photos = [
  "https://i.pinimg.com/736x/19/bf/b7/19bfb71555c09781da899fdabd97579f.jpg",
  "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://i.pinimg.com/736x/ab/67/49/ab67493b2d81663d63553aaa0353579f.jpg",
  "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://i.pinimg.com/736x/b5/cb/57/b5cb57fee9d32714bd3aa049c237a26f.jpg",
  "https://i.pinimg.com/736x/3d/fc/51/3dfc51dbcb22d4d274b4f5498a7c6c85.jpg",
  "https://i.pinimg.com/736x/5c/fb/14/5cfb1458aaa5918b3c405a7c657ac0a0.jpg",
  "https://i.pinimg.com/originals/58/5a/b7/585ab709c215505137ab472c17faa3d4.png",
  "https://i.pinimg.com/1200x/a7/81/f2/a781f21f72e97a51fa986af3c991ca95.jpg",
  "https://i.pinimg.com/736x/f4/03/66/f403668a1f2c7cdb0aae0477f125e6b0.jpg",
  "https://i.pinimg.com/1200x/ee/d7/13/eed713b3858763a371725485ebf236a5.jpg",
  "https://i.pinimg.com/736x/19/bf/b7/19bfb71555c09781da899fdabd97579f.jpg",
  "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://i.pinimg.com/736x/ab/67/49/ab67493b2d81663d63553aaa0353579f.jpg",
  "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://i.pinimg.com/736x/b5/cb/57/b5cb57fee9d32714bd3aa049c237a26f.jpg",
  "https://i.pinimg.com/736x/3d/fc/51/3dfc51dbcb22d4d274b4f5498a7c6c85.jpg",
  "https://i.pinimg.com/736x/5c/fb/14/5cfb1458aaa5918b3c405a7c657ac0a0.jpg",
  "https://i.pinimg.com/originals/58/5a/b7/585ab709c215505137ab472c17faa3d4.png",
  "https://i.pinimg.com/1200x/a7/81/f2/a781f21f72e97a51fa986af3c991ca95.jpg",
  "https://i.pinimg.com/736x/f4/03/66/f403668a1f2c7cdb0aae0477f125e6b0.jpg",
  "https://i.pinimg.com/1200x/ee/d7/13/eed713b3858763a371725485ebf236a5.jpg",
  "https://i.pinimg.com/736x/19/bf/b7/19bfb71555c09781da899fdabd97579f.jpg",
  "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://i.pinimg.com/736x/ab/67/49/ab67493b2d81663d63553aaa0353579f.jpg",
  "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://i.pinimg.com/736x/b5/cb/57/b5cb57fee9d32714bd3aa049c237a26f.jpg",
  "https://i.pinimg.com/736x/3d/fc/51/3dfc51dbcb22d4d274b4f5498a7c6c85.jpg",
  "https://i.pinimg.com/736x/5c/fb/14/5cfb1458aaa5918b3c405a7c657ac0a0.jpg",
  "https://i.pinimg.com/originals/58/5a/b7/585ab709c215505137ab472c17faa3d4.png",
  "https://i.pinimg.com/1200x/a7/81/f2/a781f21f72e97a51fa986af3c991ca95.jpg",
  "https://i.pinimg.com/736x/f4/03/66/f403668a1f2c7cdb0aae0477f125e6b0.jpg",
  "https://i.pinimg.com/1200x/ee/d7/13/eed713b3858763a371725485ebf236a5.jpg",
];

const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  return (
    <div className="gallery-container px-4 py-6">
      <section className="section !mb-6">
        <h2 className="text-2xl font-semibold !mb-4 flex items-center gap-2">
          <i className="fas fa-camera text-xl text-gray-600"></i>
          {"  "}
          Campus Life Photos
        </h2>
        {/* Masonry Layout */}
        <div className="columns-2 sm:columns-2 md:columns-5 !gap-4 space-y-4">
          {campus_life_photos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`Campus photo ${index + 1}`}
              className="w-full !mb-4 rounded-lg shadow-sm cursor-pointer break-inside-avoid hover:opacity-80 transition"
              onClick={() => setSelectedPhoto(photo)}
            />
          ))}
        </div>

      </section>
        {/* Lightbox / Fullscreen Modal */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm  "
            onClick={() => setSelectedPhoto(null)}
          >
            <img
              src= {selectedPhoto} 
              alt=""
              // onClick={(e) => e.stopPropagation()}
              className="max-w-full max-h-[90vh] rounded-lg shadow-lg transition-transform duration-300"
            />
          </div>
        )}
    </div>
  );
};

export default Gallery;
