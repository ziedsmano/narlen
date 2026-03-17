import React from "react"
import "./LiteraturePage.css"

import { useState } from "react"
import RecommendedBooksModal from "./RecommendedBooksModal"
import { internationalBooks, womenStories } from "../data/books"

import girl from "../images/literature-girl.png"

import austen from "../images/women-books/austen.png"
import bronte from "../images/women-books/bronte.png"
import morrison from "../images/women-books/morrison.jpg"
import rowling from "../images/women-books/rowling.jpg"

import fariza from "../images/women-books/fariza.jpg"
import sara from "../images/women-books/sara.jpg"
import marfuga from "../images/women-books/marfuga.jpg"
import kanipa from "../images/women-books/kanipa.jpg"

import sappho from "../images/women-books/sappho.jpg"
import shelley from "../images/women-books/shelley.jpg"
import christie from "../images/women-books/christie.jpg"
import mistral from "../images/women-books/mistral.jpg"

import atwood from "../images/women-books/atwood.jpg"
import alexievich from "../images/women-books/alexievich.jpg"
import beauvoir from "../images/women-books/beauvoir.jpg"
import nazipa from "../images/women-books/nazipa.jpg"


function LiteraturePage() {

    const [openModal, setOpenModal] = useState(false)

    return (

        <div className="literature-page">


            {/* HERO */}

            <section className="literature-hero-section">

                <div className="literature-hero-bg"></div>

                <div className="literature-hero-container">

                    <div className="literature-hero">

                        <div className="hero-text">

                            <h1>Women in Literature</h1>

                            <p>
                                Discover the voices and stories of influential women writers.
                            </p>

                            <button
                                className="books-btn"
                                onClick={() => setOpenModal(true)}
                            >
                                Recommended Books
                            </button>

                        </div>

                        <img
                            src={girl}
                            alt="reading girl"
                            className="hero-img"
                        />

                    </div>

                </div>

            </section>



            {/* VIDEOS */}

            <section className="videos">

                <h2>Watch Video Series</h2>

                <div className="video-grid">

                    <div className="video-card">
                        <iframe
                            src="https://www.youtube.com/embed/VIDEO1"
                            title="video"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <div className="video-card">
                        <iframe
                            src="https://www.youtube.com/embed/VIDEO2"
                            title="video"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <div className="video-card">
                        <iframe
                            src="https://www.youtube.com/embed/VIDEO3"
                            title="video"
                            allowFullScreen
                        ></iframe>
                    </div>

                </div>

            </section>



            {/* WRITERS */}

            <section className="writers">

                <h2 className="writers-title">Famous Women Writers</h2>

                <div className="writers-container">

                    <div className="writers-grid">


                        <div className="writer-card">
                            <img src={austen} alt="Jane Austen"/>

                            <div className="writer-info">
                                <h3>Jane Austen</h3>
                                <p>Author of Pride and Prejudice and one of the most influential English novelists.</p>
                            </div>
                        </div>


                        <div className="writer-card">
                            <img src={bronte} alt="Charlotte Bronte"/>

                            <div className="writer-info">
                                <h3>Charlotte Brontë</h3>
                                <p>Author of Jane Eyre and an important figure in Victorian literature.</p>
                            </div>
                        </div>


                        <div className="writer-card">
                            <img src={morrison} alt="Toni Morrison"/>

                            <div className="writer-info">
                                <h3>Toni Morrison</h3>
                                <p>Nobel Prize winning American novelist known for Beloved.</p>
                            </div>
                        </div>


                        <div className="writer-card">
                            <img src={rowling} alt="J.K. Rowling"/>

                            <div className="writer-info">
                                <h3>J.K. Rowling</h3>
                                <p>Author of the Harry Potter series.</p>
                            </div>
                        </div>


                        <div className="writer-card">
                            <img src={fariza} alt="Fariza Ongarsynova"/>

                            <div className="writer-info">
                                <h3>Fariza Ongarsynova</h3>
                                <p>Famous Kazakh poet known for lyrical and patriotic poetry.</p>
                            </div>
                        </div>


                        <div className="writer-card">
                            <img src={sara} alt="Sara Mynzhasarova"/>

                            <div className="writer-info">
                                <h3>Sara Mynzhasarova</h3>
                                <p>Kazakh writer contributing to modern Kazakh literature.</p>
                            </div>
                        </div>


                        <div className="writer-card">
                            <img src={marfuga} alt="Marfuga Aitkhozina"/>

                            <div className="writer-info">
                                <h3>Marfuga Aitkhozina</h3>
                                <p>Kazakh poet known for philosophical and emotional works.</p>
                            </div>
                        </div>


                        <div className="writer-card">
                            <img src={kanipa} alt="Kanipa Bugybayeva"/>

                            <div className="writer-info">
                                <h3>Kanipa Bugybayeva</h3>
                                <p>Educator and author who contributed to literature teaching.</p>
                            </div>
                        </div>


                        <div className="writer-card">
                            <img src={sappho} alt="Sappho"/>

                            <div className="writer-info">
                                <h3>Sappho</h3>
                                <p>Ancient Greek poet known for lyric poetry.</p>
                            </div>
                        </div>


                        <div className="writer-card">
                            <img src={shelley} alt="Mary Shelley"/>

                            <div className="writer-info">
                                <h3>Mary Shelley</h3>
                                <p>Author of Frankenstein and pioneer of science fiction.</p>
                            </div>
                        </div>


                        <div className="writer-card">
                            <img src={christie} alt="Agatha Christie"/>

                            <div className="writer-info">
                                <h3>Agatha Christie</h3>
                                <p>Queen of detective fiction and creator of Hercule Poirot.</p>
                            </div>
                        </div>


                        <div className="writer-card">
                            <img src={mistral} alt="Gabriela Mistral"/>

                            <div className="writer-info">
                                <h3>Gabriela Mistral</h3>
                                <p>Chilean poet and Nobel Prize laureate.</p>
                            </div>
                        </div>


                        <div className="writer-card">
                            <img src={atwood} alt="Margaret Atwood"/>

                            <div className="writer-info">
                                <h3>Margaret Atwood</h3>
                                <p>Author of The Handmaid's Tale.</p>
                            </div>
                        </div>


                        <div className="writer-card">
                            <img src={alexievich} alt="Svetlana Alexievich"/>

                            <div className="writer-info">
                                <h3>Svetlana Alexievich</h3>
                                <p>Nobel Prize winning Belarusian investigative writer.</p>
                            </div>
                        </div>


                        <div className="writer-card">
                            <img src={beauvoir} alt="Simone de Beauvoir"/>

                            <div className="writer-info">
                                <h3>Simone de Beauvoir</h3>
                                <p>French philosopher and feminist author of The Second Sex.</p>
                            </div>
                        </div>


                        <div className="writer-card">
                            <img src={nazipa} alt="Nazipa Kulzhanova"/>

                            <div className="writer-info">
                                <h3>Nazipa Kulzhanova</h3>
                                <p>Kazakh educator, writer and cultural activist.</p>
                            </div>
                        </div>


                    </div>

                </div>

            </section>







            {/* MODAL */}

            <RecommendedBooksModal
                isOpen={openModal}
                onClose={() => setOpenModal(false)}
            />

        </div>

    )
}

export default LiteraturePage