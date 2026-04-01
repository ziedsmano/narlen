import "./RecommendedBooksModal.css"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"

import { useEffect, useState } from "react"
import { useLanguage } from "../context/LanguageContext"

import { internationalBooks, womenStories } from "../data/books"

const copy = {
    en: {
        close: "Close dialog",
        title: "Recommended Books",
        sectionOne: "International Women Writers",
        sectionTwo: "Books About Women"
    },
    ru: {
        close: "Закрыть окно",
        title: "Рекомендуемые книги",
        sectionOne: "Писательницы мира",
        sectionTwo: "Книги о женщинах"
    },
    kz: {
        close: "Терезені жабу",
        title: "Ұсынылатын кітаптар",
        sectionOne: "Әлем жазушы әйелдері",
        sectionTwo: "Әйелдер туралы кітаптар"
    }
}

function RecommendedBooksModal({ isOpen, onClose }) {
    const { language } = useLanguage()
    const text = copy[language]
    const [selectedBookTitle, setSelectedBookTitle] = useState(null)

    useEffect(() => {
        if (!isOpen) {
            setSelectedBookTitle(null)
        }
    }, [isOpen])

    if (!isOpen) return null

    const handleMouseMove = (event) => {
        const card = event.currentTarget
        const rect = card.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        const rotateX = -(y - centerY) / 10
        const rotateY = (x - centerX) / 10

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.08)`
    }

    const resetTilt = (event) => {
        event.currentTarget.style.transform = "rotateX(0) rotateY(0) scale(1)"
    }

    const toggleAnnotation = (book) => {
        if (!book.annotation?.[language]?.length) return

        setSelectedBookTitle((currentTitle) => currentTitle === book.title ? null : book.title)
    }

    const handleBookKeyDown = (event, book) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault()
            toggleAnnotation(book)
        }
    }

    const renderSlider = (books) => (
        <div className="slider-wrapper" data-read-aloud-block="true">
            <Swiper
                modules={[Navigation]}
                slidesPerView={5}
                spaceBetween={40}
                breakpoints={{
                    0: { slidesPerView: 1.2, spaceBetween: 12 },
                    480: { slidesPerView: 1.55, spaceBetween: 16 },
                    768: { slidesPerView: 3, spaceBetween: 20 },
                    1024: { slidesPerView: 4, spaceBetween: 28 },
                    1280: { slidesPerView: 5, spaceBetween: 40 }
                }}
                navigation
                loop
                speed={700}
                className="book-slider"
            >
                {books.map((book, index) => (
                    <SwiperSlide key={`${book.title}-${index}`}>
                        <div
                            className="book-card"
                            data-read-aloud-block="true"
                            onMouseMove={handleMouseMove}
                            onMouseLeave={resetTilt}
                            onClick={() => toggleAnnotation(book)}
                            onKeyDown={(event) => handleBookKeyDown(event, book)}
                            role={book.annotation?.[language]?.length ? "button" : undefined}
                            tabIndex={book.annotation?.[language]?.length ? 0 : -1}
                        >
                            <div className="book-cover-wrapper">
                                <div
                                    className={`book-cover ${selectedBookTitle === book.title ? "book-cover-active" : ""}`}
                                    style={{ backgroundImage: `url(${book.image})` }}
                                >
                                    {book.annotation?.[language]?.length ? (
                                        <div className={`book-annotation ${selectedBookTitle === book.title ? "book-annotation-visible" : ""}`}>
                                            {book.annotation[language].map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                                        </div>
                                    ) : null}
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
    )

    return (
        <div className="modal-overlay app-modal-overlay" onClick={onClose}>
            <div
                className="books-modal app-modal-shell app-modal-content"
                onClick={(event) => event.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby="recommended-books-title"
                data-read-aloud-target="true"
            >
                <button className="close-btn app-modal-close" onClick={onClose} aria-label={text.close} data-read-aloud-ignore="true">
                    ×
                </button>

                <h2 id="recommended-books-title" className="modal-title">{text.title}</h2>
                <h3 className="section-title">{text.sectionOne}</h3>
                {renderSlider(internationalBooks)}

                <h3 className="section-title">{text.sectionTwo}</h3>
                {renderSlider(womenStories)}
            </div>
        </div>
    )
}

export default RecommendedBooksModal
