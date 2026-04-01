import lessons from "../images/books/lessons-chemistry.jpg"
import secret from "../images/books/secret-history.jpg"
import purple from "../images/books/color-purple.jpg"
import malala from "../images/books/malala.jpg"
import suns from "../images/books/splendid-suns.jpg"
import handmaid from "../images/books/handmaids-tale.jpg"

import oroonoko from "../images/books/oroonoko.jpg"
import vindication from "../images/books/vindication.jpg"
import wuthering from "../images/books/wuthering-heights.jpg"
import yellow from "../images/books/yellow-wallpaper.jpg"
import dalloway from "../images/books/mrs-dalloway.jpg"
import theirEyes from "../images/books/their-eyes.jpg"
import secondSex from "../images/books/second-sex.jpg"
import bellJar from "../images/books/bell-jar.jpg"
import bloodyChamber from "../images/books/bloody-chamber.jpg"
import beloved from "../images/books/beloved.jpg"
import americanah from "../images/books/americanah.jpg"
import circe from "../images/books/circe.jpg"
import becoming from "../images/books/becoming.jpg"
import tomorrow from "../images/books/tomorrow-tomorrow.jpg"
import paperThinSkin from "../images/books/paper-thin-skin.jpg"

export const internationalBooks = [
    { title: "Oroonoko", author: "Aphra Behn", year: "1678", image: oroonoko },
    { title: "A Vindication of the Rights of Woman", author: "Mary Wollstonecraft", year: "1792", image: vindication },
    { title: "Wuthering Heights", author: "Emily Bronte", year: "1847", image: wuthering },
    { title: "The Yellow Wallpaper", author: "Charlotte Perkins Gilman", year: "1892", image: yellow },
    { title: "Mrs Dalloway", author: "Virginia Woolf", year: "1925", image: dalloway },
    { title: "Their Eyes Were Watching God", author: "Zora Neale Hurston", year: "1937", image: theirEyes },
    { title: "The Second Sex", author: "Simone de Beauvoir", year: "1949", image: secondSex },
    { title: "The Bell Jar", author: "Sylvia Plath", year: "1963", image: bellJar },
    { title: "The Bloody Chamber", author: "Angela Carter", year: "1979", image: bloodyChamber },
    { title: "Beloved", author: "Toni Morrison", year: "1987", image: beloved },
    { title: "Americanah", author: "Chimamanda Ngozi Adichie", year: "2013", image: americanah },
    { title: "Circe", author: "Madeline Miller", year: "2018", image: circe },
    { title: "Becoming", author: "Michelle Obama", year: "2018", image: becoming },
    { title: "Tomorrow and Tomorrow and Tomorrow", author: "Gabrielle Zevin", year: "2022", image: tomorrow },
    { title: "Paper-Thin Skin", author: "Aigerim Tazhi", year: "2019", image: paperThinSkin }
]

export const womenStories = [
    { title: "The Secret History", author: "Donna Tartt", year: 1992, image: secret },
    { title: "The Color Purple", author: "Alice Walker", year: 1982, image: purple },
    {
        title: "I Am Malala",
        author: "Malala Yousafzai",
        year: 2013,
        image: malala,
        annotation: {
            en: ["An inspiring autobiographical story about a schoolgirl from Pakistan's Swat Valley who opposed the Taliban's ban on girls' education."],
            ru: ["Вдохновляющая автобиографическая история школьницы из долины Сват в Пакистане, выступившей против запрета Талибана на образование девочек."],
            kz: ["Пәкістанның Сват аңғарындағы мектеп оқушысы қыздың тәліптердің қыздарға білім алуға тыйым салуына қарсы шыққан әсерлі өмірбаяны."]
        }
    },
    { title: "A Thousand Splendid Suns", author: "Khaled Hosseini", year: 2007, image: suns },
    { title: "The Handmaid's Tale", author: "Margaret Atwood", year: 1985, image: handmaid },
    { title: "Lessons in Chemistry", author: "Bonnie Garmus", year: 2022, image: lessons }
]
