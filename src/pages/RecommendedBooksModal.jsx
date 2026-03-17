import "./RecommendedBooksModal.css"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"

import { useState } from "react"

import { internationalBooks, womenStories } from "../data/books"

function RecommendedBooksModal({ isOpen, onClose }) {

    const [selectedBook,setSelectedBook] = useState(null)

    if(!isOpen) return null


    const handleMouseMove = (e) => {

        const card = e.currentTarget
        const rect = card.getBoundingClientRect()

        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const rotateX = -(y - centerY) / 10
        const rotateY = (x - centerX) / 10

        card.style.transform =
            `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.08)`

    }

    const resetTilt = (e)=>{
        e.currentTarget.style.transform =
            "rotateX(0) rotateY(0) scale(1)"
    }


    return(

        <div className="modal-overlay" onClick={onClose}>

            <div className="books-modal" onClick={(e)=>e.stopPropagation()}>

                <button className="close-btn" onClick={onClose}>✕</button>

                <h2 className="modal-title">📚 Recommended Books</h2>

                {/* INTERNATIONAL */}

                <h3 className="section-title">
                    International Women Writers
                </h3>

                <div className="slider-wrapper">

                    <Swiper
                        modules={[Navigation]}
                        slidesPerView={5}
                        spaceBetween={40}
                        navigation
                        loop={true}
                        speed={700}
                        className="book-slider"
                    >

                        {internationalBooks.map((book,index)=>(
                            <SwiperSlide key={index}>

                                <div
                                    className="book-card"
                                    onMouseMove={handleMouseMove}
                                    onMouseLeave={resetTilt}
                                    onClick={()=>setSelectedBook(book)}
                                >

                                    <div
                                        className="book-cover"
                                        style={{backgroundImage:`url(${book.image})`}}
                                    ></div>

                                    <h4>{book.title}</h4>

                                    <p>{book.author}</p>

                                    <span>{book.year}</span>

                                </div>

                            </SwiperSlide>
                        ))}

                    </Swiper>

                </div>



                {/* WOMEN STORIES */}

                <h3 className="section-title">
                    Books About Women
                </h3>

                <div className="slider-wrapper">

                    <Swiper
                        modules={[Navigation]}
                        slidesPerView={5}
                        spaceBetween={40}
                        navigation
                        loop={true}
                        speed={700}
                        className="book-slider"
                    >

                        {womenStories.map((book,index)=>(
                            <SwiperSlide key={index}>

                                <div
                                    className="book-card"
                                    onMouseMove={handleMouseMove}
                                    onMouseLeave={resetTilt}
                                    onClick={()=>setSelectedBook(book)}
                                >

                                    <div
                                        className="book-cover"
                                        style={{backgroundImage:`url(${book.image})`}}
                                    ></div>

                                    <h4>{book.title}</h4>

                                    <p>{book.author}</p>

                                    <span>{book.year}</span>

                                </div>

                            </SwiperSlide>
                        ))}

                    </Swiper>

                </div>


            </div>

        </div>

    )

}

export default RecommendedBooksModal