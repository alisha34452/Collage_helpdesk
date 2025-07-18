import React from 'react'

const campus_life_photos = ["pic1.jpg", "pic2.jpg", "pic3.jpg"]

const Gallery = () => {
  return (
    <div className="">
        <div className="pics">
           <section className="section">
            <h2> <i className="fas fa-camera text-xl "></i> Campus Life Photos</h2>
           </section>
        </div>
        <div className="sidebar"></div>
    </div>
  )
}

export default Gallery
