import { useState, useEffect } from "react"
import "./FeminismPage.css"
import todayBg from "../images/feminism/today-bg.jpg"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, EffectFade, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"

import bg1 from "../images/feminism/background/bg1.jpg"
import bg2 from "../images/feminism/background/bg2.jpg"
import bg3 from "../images/feminism/background/bg3.jpg"
import bg4 from "../images/feminism/background/bg4.jpg"

import early1 from "../images/feminism/early/early1.jpg"
import early2 from "../images/feminism/early/early2.jpg"
import early3 from "../images/feminism/early/early3.jpg"

import en1 from "../images/feminism/enlightenment/en1.jpg"
import en2 from "../images/feminism/enlightenment/en2.jpg"
import en3 from "../images/feminism/enlightenment/en3.jpg"

import fourth1 from "../images/feminism/fourthwave/fow1.jpg"
import fourth2 from "../images/feminism/fourthwave/fow2.jpg"
import fourth3 from "../images/feminism/fourthwave/fow3.jpg"
import fourth4 from "../images/feminism/fourthwave/fow4.jpg"

import tw2 from "../images/feminism/thirdwave/tw2.jpg"

import sw1 from "../images/feminism/secondwave/sw1.jpg"
import sw2 from "../images/feminism/secondwave/sw2.jpg"
import sw3 from "../images/feminism/secondwave/sw3.jpg"
import sw4 from "../images/feminism/secondwave/sw4.jpg"

import fw1 from "../images/feminism/firstwave/fw1.jpg"
import fw2 from "../images/feminism/firstwave/fw2.jpg"
import fw3 from "../images/feminism/firstwave/fw3.jpg"
import fw4 from "../images/feminism/firstwave/fw4.jpg"

function FeminismPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const events = [
        {
            year: "Before the 15th Century",
            title: "Background",
            preview: "Women had very limited rights in most societies, and early thinkers openly feared equality for women.",
            images: [bg1, bg2, bg3, bg4],
            content: [
                {
                    type: "paragraph",
                    text: "For a long time, women were limited to domestic activities."
                },
                {
                    type: "paragraph",
                    text: "They were mostly unable to own property, study, or participate in public life."
                },
                {
                    type: "paragraph",
                    text: "In many countries, they had the right to conduct business only with a male representative, be it a father, brother, husband, or even a son."
                },
                {
                    type: "quote",
                    text: "\"If they win now, what won't they try to do?\" exclaimed Marcus Portius Cato."
                },
                {
                    type: "quote",
                    text: "\"As soon as they become equal to you, they will also become your superiors.\""
                },
                {
                    type: "paragraph",
                    text: "This period demonstrates the deep historical roots of gender inequality."
                }
            ]
        },
        {
            year: "Late 14th - 16th Century",
            title: "Early Feminist Thought",
            preview: "Christine de Pizan and Laura Cereta challenged old ideas and defended women's access to education.",
            images: [early1, early2, early3],
            content: [
                {
                    type: "paragraph",
                    text: "In the late 14th and early 15th century in France, the first feminist philosopher, Christine de Pizan, challenged the dominant views of women and boldly called for women's education. Her legacy was picked up later by others."
                },
                {
                    type: "paragraph",
                    text: "Laura Cereta, a Venetian of the 15th century, published her works. Epistolae familiares (1488; \"Personal Letters\"; English translation: \"Collection of Letters of a Feminist of the Renaissance\") is a collection of letters devoted to many complaints from women, from the refusal of education and marital oppression to the frivolity of women's clothing."
                },
                {
                    type: "paragraph",
                    text: "By the end of the 16th century, the protection of women's rights had become a separate literary subgenre, where early feminists gave long lists of brave and outstanding women and proclaimed that women would be intellectually equal to men if they were given equal access to education."
                }
            ]
        },
        {
            year: "18th Century",
            title: "Influence Enlightenment",
            titleClassName: "modal-title-wide",
            preview: "Olympe de Gouges and Mary Wollstonecraft argued for women's equality in education, work and politics.",
            images: [en1, en2, en3],
            content: [
                {
                    type: "paragraph",
                    text: "Olympe de Gouges, a famous playwright, published the \"Declaration of the Rights of Woman and of the Female Citizen\" (1791), in which she proclaimed women not only equal to men, but also to their partners."
                },
                {
                    type: "paragraph",
                    text: "The following year, Mary Wollstonecraft's \"A Vindication of the Rights of Woman\" (1792), a fundamental English-language feminist work, was published in England. Contesting the idea that women exist only to please men, she proposed to provide women and men with equal opportunities in education, work and politics."
                },
                {
                    type: "quote",
                    text: "\"Women are as rational by nature as men. If they are stupid, it's only because society accustomed them to being useless.\""
                }
            ]
        },
        {
            year: "19th Century - Early 20th Century",
            title: "First Wave Feminism",
            preview: "The first wave focused on formal equality, legal status and especially women's right to vote.",
            images: [fw1, fw2, fw3, fw4],
            content: [
                {
                    type: "paragraph",
                    text: "The well-known Seneca Falls Conference in 1848 marked the beginning of the first appearance of feminism."
                },
                {
                    type: "paragraph",
                    text: "At this event, Elizabeth Cady Stanton and Lucretia Mott presented a \"Declaration of Feelings\" that proclaimed equality between men and women and demanded the right to vote."
                },
                {
                    type: "highlight",
                    text: "The main focus of the movement was the struggle for the political and legal power of women, primarily for the right to vote."
                },
                {
                    type: "paragraph",
                    text: "As a result, under the influence of both American and British activists, including Emmeline Pankhurst and Alice Paul, the movement intensified and led to the adoption of the 19th Amendment to the U.S. Constitution in 1920."
                },
                {
                    type: "highlight",
                    text: "This gave women the most important thing: the right to vote, because first-wave feminism mainly advocated formal equality."
                }
            ]
        },
        {
            year: "Early 1960s - Early 1980s",
            title: "Second Wave Feminism",
            preview: "The second wave expanded feminism to family, work, sexuality, reproductive rights and everyday inequality.",
            images: [sw1, sw2, sw3, sw4],
            content: [
                {
                    type: "paragraph",
                    text: "The civil rights movement and protests against the Vietnam War served as the engine for the emergence of the Second Wave of feminism (1963-1980-ies)."
                },
                {
                    type: "highlight",
                    text: "This time, the wave covered a broader range of issues: discrimination at work, unequal pay, the role of women in the family, and control over their bodies."
                },
                {
                    type: "quote",
                    text: "\"The personal is the political.\""
                },
                {
                    type: "paragraph",
                    text: "As a result, important laws were passed, such as the Equal Pay Act (1963) and the Civil Rights Act (1964), which included provisions prohibiting discrimination based on gender."
                },
                {
                    type: "paragraph",
                    text: "There were several movements in feminism, including liberal, radical, and cultural feminism, each of which interpreted the ways to achieve equality differently."
                },
                {
                    type: "paragraph",
                    text: "Moreover, there was increased attention to the problems of Black women who faced racism and sexism at the same time."
                },
                {
                    type: "paragraph",
                    text: "These issues were addressed by Black feminists, including Michelle Wallace, Mary Ann Weathers, bell hooks, Alice Walker, and Bettina Aptheker."
                },
                {
                    type: "paragraph",
                    text: "In 1973, at the first conference of the National Organization of Black Feminists, African-American and white feminists established an effective working relationship."
                },
                {
                    type: "highlight",
                    text: "These efforts led to a more comprehensive understanding of inequality."
                },
                {
                    type: "highlight",
                    text: "However, no single unified ideology, disputes between feminists, and the different concepts of \"liberation\" led to the transition to the third wave."
                }
            ]
        },
        {
            year: "Early 1990s - 2010s",
            title: "Third Wave Feminism",
            preview: "Third-wave feminism introduced new currents such as intersectionality, transfeminism and postmodern feminism.",
            images: [tw2],
            content: [
                {
                    type: "paragraph",
                    text: "In the 1960s and 70s, mass media developed rapidly in industrialized countries. The new wave later became possible because women of the second wave had gained greater economic independence, professional opportunities, and social status."
                },
                {
                    type: "highlight",
                    text: "Third-wave feminists reinterpreted traditional ideas about gender, promoted the idea of a gender continuum, and actively used pop culture, language, and irony to challenge stereotypes."
                },
                {
                    type: "paragraph",
                    text: "These tools were often used ironically as a way to resist patriarchy and question fixed ideas about femininity."
                },
                {
                    type: "paragraph",
                    text: "This period saw the emergence of new feminist movements and theories such as intersectionality, sex-positive attitudes, vegetarian ecofeminism, transfeminism, and postmodern feminism."
                },
                {
                    type: "paragraph",
                    text: "Images of smart, strong, and independent girls and women began to appear more often in pop culture: Disney characters such as Mulan (1998) and Helen Parr with her daughter Violet from The Incredibles (2004), Dora the Explorer (2000-2014, 2019), Carly and Sam from iCarly (2007-2012), and many products labeled \"Girl Power.\""
                }
            ]
        },
        {
            year: "2012 - Present",
            title: "Fourth Wave Feminism",
            preview: "The fourth wave emphasizes empowerment, internet activism, intersectionality and gender norms.",
            images: [fourth1, fourth2, fourth3, fourth4],
            content: [
                {
                    type: "paragraph",
                    text: "In 2012, a new and more familiar wave began that focused on deeper areas like combating sexual violence, harassment, body-shaming, and rape culture."
                },
                {
                    type: "paragraph",
                    text: "In this period, social media became a key tool of activism."
                },
                {
                    type: "highlight",
                    text: "Factors contributing to the strengthening of the movement:"
                },
                {
                    type: "paragraph",
                    text: "- the mass protests after the rape in India in 2012;"
                },
                {
                    type: "paragraph",
                    text: "- the GamerGate campaign promoted stereotypical views of women;"
                },
                {
                    type: "paragraph",
                    text: "- the 2017 Women's March, which was attended by up to 4.6 million people."
                },
                {
                    type: "paragraph",
                    text: "The #MeToo movement gained special significance in 2017. After the Harvey Weinstein scandal, this movement became widely publicized and allowed millions of women around the world to speak openly about their experiences of violence."
                },
                {
                    type: "paragraph",
                    text: "People across social media began sharing their own stories and experiences using #MeToo."
                },
                {
                    type: "highlight",
                    text: "In general, the fourth wave is characterized by globalism, digital activism, and the pursuit of social justice and equality."
                },
                {
                    type: "paragraph",
                    text: "By connecting through hashtags and online interactions, women can share their voice and generate collective community action for social change."
                }
            ]
        }
    ]

    const [active, setActive] = useState(null)

    return (
        <div className="feminism-page">
            <section className="feminism-hero">
                <div className="hero-overlay"></div>

                <div className="hero-content">
                    <h1>The History of Feminism</h1>
                    <p>From early struggles for rights to modern global movements</p>
                </div>
            </section>

            <div className="timeline-wrapper">
                <div className="timeline">
                    <div className="timeline-line"></div>

                    {events.map((event, index) => (
                        <div className="timeline-row" key={index}>
                            <div className="timeline-year">
                                {event.year}
                            </div>

                            <div
                                className={`timeline-card ${index % 2 === 0 ? "left" : "right"}`}
                                onClick={() => setActive(index)}
                            >
                                <h3>{event.title}</h3>
                                <p>{event.preview}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <details className="history-sources">
                    <summary>Sources</summary>

                    <div className="history-sources-links">
                        <a
                            href="https://www.britannica.com/topic/gender-equality"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Britannica: Gender Equality
                        </a>

                        <a
                            href="https://en.wikipedia.org/wiki/History_of_feminism"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Wikipedia: History of Feminism
                        </a>
                    </div>
                </details>
            </div>

            {active !== null && (
                <div className="modal">
                    <div className="modal-content">
                        <button
                            className="close"
                            onClick={() => setActive(null)}
                        >
                            x
                        </button>

                        <Swiper
                            modules={[Navigation, EffectFade, Autoplay]}
                            autoplay={{ delay: 4000 }}
                            navigation={true}
                            loop={true}
                            grabCursor={true}
                            effect="fade"
                            fadeEffect={{ crossFade: true }}
                            speed={800}
                            className="swiper"
                        >
                            {events[active].images.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <div
                                        className="modal-slide"
                                        style={{ backgroundImage: `url(${img})` }}
                                    >
                                        <div className="modal-gradient"></div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <div className="modal-text">
                            <h2 className={events[active].titleClassName || ""}>
                                {events[active].title}
                            </h2>

                            <div className="modal-text-scroll">
                                {events[active].content.map((item, index) => (
                                    item.type === "quote" ? (
                                        <blockquote className="modal-quote" key={index}>
                                            {item.text}
                                        </blockquote>
                                    ) : item.type === "highlight" ? (
                                        <p className="modal-highlight" key={index}>
                                            {item.text}
                                        </p>
                                    ) : (
                                        <p key={index}>{item.text}</p>
                                    )
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <section
                className="feminism-today"
                style={{ backgroundImage: `url(${todayBg})` }}
            >
                <div className="today-overlay"></div>

                <h2>Feminism Today</h2>

                <div className="today-grid">
                    <a
                        className="today-card today-card-link"
                        href="https://data.unicef.org/topic/gender/gender-disparities-in-education/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="today-icon">🎓</div>
                        <h3>Education</h3>
                        <p>Globally, the number of girls out of school has decreased by 39 percent, reflecting the immense gains made in girls' schooling over the past three decades. However, almost 4 out of 10 young women still do not receive a full secondary education.</p>
                    </a>

                    <a
                        className="today-card today-card-link"
                        href="https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/women-in-the-workplace"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="today-icon">👩‍💼</div>
                        <h3>Leadership</h3>
                        <p>Women occupy about 29% of senior management positions worldwide, but existing gender bias, motherhood penalty, the selection system, and other factors reduce the chances of promotion.</p>
                    </a>

                    <a
                        className="today-card today-card-link"
                        href="https://journals.openedition.org/cidades/10315?lang=en"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="today-icon">🌐</div>
                        <h3>Digital Activism</h3>
                        <p>By connecting through hashtags and online interactions, women can share their voice and generate collective community action for social change.</p>
                    </a>
                </div>
            </section>
        </div>
    )
}

export default FeminismPage
