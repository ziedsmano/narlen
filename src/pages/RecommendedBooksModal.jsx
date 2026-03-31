import "./RecommendedBooksModal.css"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"

import { useEffect, useState } from "react"

import { internationalBooks, womenStories } from "../data/books"

function RecommendedBooksModal({ isOpen, onClose }) {

    const [selectedBookTitle, setSelectedBookTitle] = useState(null)

    useEffect(() => {
        if (!isOpen) {
            setSelectedBookTitle(null)
        }
    }, [isOpen])

    if (!isOpen) return null

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

    const resetTilt = (e) => {
        e.currentTarget.style.transform =
            "rotateX(0) rotateY(0) scale(1)"
    }

    const toggleAnnotation = (book) => {
        if (!book.annotation) return

        setSelectedBookTitle((currentTitle) =>
            currentTitle === book.title ? null : book.title
        )
    }

    const handleBookKeyDown = (event, book) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault()
            toggleAnnotation(book)
        }
    }

    return (

        <div
            className="modal-overlay app-modal-overlay"
            onClick={onClose}
        >

            <div
                className="books-modal app-modal-shell app-modal-content"
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby="recommended-books-title"
                data-read-aloud-target="true"
            >

                <button
                    className="close-btn app-modal-close"
                    onClick={onClose}
                    aria-label="Close dialog"
                    data-read-aloud-ignore="true"
                >
                    ×
                </button>

                <h2 id="recommended-books-title" className="modal-title">
                    Recommended Books
                </h2>

                <h3 className="section-title">
                    International Women Writers
                </h3>

                <div className="slider-wrapper" data-read-aloud-block="true">

                    <Swiper
                        modules={[Navigation]}
                        slidesPerView={5}
                        spaceBetween={40}
                        navigation
                        loop={true}
                        speed={700}
                        className="book-slider"
                    >

                        {internationalBooks.map((book, index) => (
                            <SwiperSlide key={index}>

                                <div
                                    className="book-card"
                                    data-read-aloud-block="true"
                                    onMouseMove={handleMouseMove}
                                    onMouseLeave={resetTilt}
                                    onClick={() => toggleAnnotation(book)}
                                    onKeyDown={(event) => handleBookKeyDown(event, book)}
                                    role={book.annotation ? "button" : undefined}
                                    tabIndex={book.annotation ? 0 : -1}
                                >

                                    <div className="book-cover-wrapper">
                                        <div
                                            className={`book-cover ${selectedBookTitle === book.title ? "book-cover-active" : ""}`}
                                            style={{ backgroundImage: `url(${book.image})` }}
                                        >
                                            {book.annotation && (
                                                <div
                                                    className={`book-annotation ${selectedBookTitle === book.title ? "book-annotation-visible" : ""}`}
                                                >
                                                    {book.annotation.map((paragraph, annotationIndex) => (
                                                        <p key={annotationIndex}>{paragraph}</p>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <h4>{book.title}</h4>

                                    <p>{book.author}</p>

                                    <span>{book.year}</span>

                                </div>

                            </SwiperSlide>
                        ))}

                    </Swiper>

                </div>

                <h3 className="section-title">
                    Books About Women
                </h3>

                <div className="slider-wrapper" data-read-aloud-block="true">

                    <Swiper
                        modules={[Navigation]}
                        slidesPerView={5}
                        spaceBetween={40}
                        navigation
                        loop={true}
                        speed={700}
                        className="book-slider"
                    >

                        {womenStories.map((book, index) => (
                            <SwiperSlide key={index}>

                                <div
                                    className="book-card"
                                    data-read-aloud-block="true"
                                    onMouseMove={handleMouseMove}
                                    onMouseLeave={resetTilt}
                                    onClick={() => toggleAnnotation(book)}
                                    onKeyDown={(event) => handleBookKeyDown(event, book)}
                                    role={book.annotation ? "button" : undefined}
                                    tabIndex={book.annotation ? 0 : -1}
                                >

                                    <div className="book-cover-wrapper">
                                        <div
                                            className={`book-cover ${selectedBookTitle === book.title ? "book-cover-active" : ""}`}
                                            style={{ backgroundImage: `url(${book.image})` }}
                                        >
                                            {book.annotation && (
                                                <div
                                                    className={`book-annotation ${selectedBookTitle === book.title ? "book-annotation-visible" : ""}`}
                                                >
                                                    {book.annotation.map((paragraph, annotationIndex) => (
                                                        <p key={annotationIndex}>{paragraph}</p>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>

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
