import { useEffect, useState } from "react"

const quotes = [
    {
        text: "If you know you are on the right track, if you have this inner knowledge, then nobody can turn you off... no matter what they say.",
        author: "Barbara McClintock"
    },
    {
        text: "Don't let anyone rob you of your imagination, your creativity, or your curiosity. It's your place in the world; it's your life. Go on and do all you can with it, and make it the life you want to live.",
        author: "Mae Jemison"
    },
    {
        text: "What you do makes a difference, and you have to decide what kind of difference you want to make.",
        author: "Jane Goodall"
    },
    {
        text: "We can do no great things, only small things with great love.",
        author: "Mother Teresa"
    },
    {
        text: "When anyone tells me I can't do anything, I'm just not listening anymore.",
        author: "Florence Griffith Joyner"
    },
    {
        text: "Be brave, not perfect.",
        author: "Reshma Saujani"
    },
    {
        text: "Define success on your own terms, achieve it by your own rules, and build a life you're proud to live.",
        author: "Anne Sweeney"
    },
    {
        text: "A girl should be two things: who and what she wants.",
        author: "Coco Chanel"
    },
    {
        text: "There is no limit to what we, as women, can accomplish.",
        author: "Michelle Obama"
    },
    {
        text: "Girls should never be afraid to be smart.",
        author: "Emma Watson"
    },
    {
        text: "I want every girl to know that her voice can change the world.",
        author: "Malala Yousafzai"
    },
    {
        text: "Being confident and believing in your own self-worth is necessary to achieving your potential.",
        author: "Sheryl Sandberg"
    },
    {
        text: "Think like a queen. A queen is not afraid to fail. Failure is another stepping stone to greatness.",
        author: "Oprah Winfrey"
    },
    {
        text: "You can carve your own path. Be your own kind of leader.",
        author: "Jacinda Ardern"
    },
    {
        text: "Fight for the things that you care about, but do it in a way that will lead others to join you.",
        author: "Ruth Bader Ginsburg"
    },
    {
        text: "No one can make you feel inferior without your consent.",
        author: "Eleanor Roosevelt"
    },
    {
        text: "At the end of the day, we can endure much more than we think we can.",
        author: "Frida Kahlo"
    },
    {
        text: "When life seems hard, the courageous do not lie down and accept defeat; instead, they are all the more determined to struggle for a better future.",
        author: "Queen Elizabeth II"
    },
    {
        text: "You can waste your lives drawing lines. Or you can live your life crossing them.",
        author: "Shonda Rhimes"
    },
    {
        text: "If you don't like the road you're walking, start paving another one.",
        author: "Dolly Parton"
    },
    {
        text: "You might not be able to control your circumstances, but you can control your response to your circumstances.",
        author: "Condoleezza Rice"
    },
    {
        text: "Women are the real architects of society.",
        author: "Cher"
    },
    {
        text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        author: "Mother Teresa"
    },
    {
        text: "No matter what happens in life, be good to people. Being good to people is a wonderful legacy to leave behind.",
        author: "Taylor Swift"
    },
    {
        text: "If you don't get out of the box you've been raised in, you won't understand how much bigger the world is.",
        author: "Angelina Jolie"
    },
    {
        text: "Behind every great woman is another great woman.",
        author: "Kate Hodges"
    },
    {
        text: "Women, whether subtly or vociferously, have always been a tremendous power in the destiny of the world.",
        author: "Eleanor Roosevelt"
    },
    {
        text: "My mother told me to be a lady. And for her, that meant be your own person, be independent.",
        author: "Ruth Bader Ginsburg"
    }
]

function QuoteBar() {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % quotes.length)
        }, 12000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="quote-bar">
            <p className="quote-text">
                "{quotes[index].text}"
                <span className="quote-author"> - {quotes[index].author}</span>
            </p>
        </div>
    )
}

export default QuoteBar
