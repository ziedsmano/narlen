import { useCallback, useEffect, useRef, useState } from "react"

const MODAL_SELECTORS = [
    "[role='dialog'][aria-modal='true']",
    ".modal-overlay",
    ".women-overlay",
    ".brain-overlay",
    ".sleep-overlay",
    ".water-overlay",
    ".women-modal",
    ".brain-modal",
    ".sleep-modal",
    ".water-modal",
    ".modal"
]

const READABLE_BLOCK_SELECTORS = [
    "[data-read-aloud-target]",
    "[data-read-aloud-block]",
    ".writer-info",
    ".brain-text",
    ".sleep-text",
    ".water-text",
    ".name-overlay",
    ".overlay",
    ".timeline-year",
    ".history-card",
    ".fact-card",
    ".brain-card",
    ".sleep-card",
    ".water-card",
    ".writer-card",
    ".bio-card",
    ".women-card",
    ".women-modal",
    ".brain-modal",
    ".sleep-modal",
    ".water-modal",
    ".today-card",
    ".timeline-card",
    ".card",
    ".stat",
    ".quiz-card",
    ".book-card",
    ".video-card",
    ".hero-text",
    ".bio-hero-text",
    ".history-text",
    ".modal-text",
    ".women-container",
    ".brain-container",
    ".sleep-container",
    ".water-container",
    ".writers-title",
    ".section-title",
    "section",
    "article"
]

const TEXT_SELECTORS = [
    "h1",
    "h2",
    "h3",
    "h4",
    "p",
    "li",
    "blockquote",
    "button",
    "a",
    "[data-read-aloud-text]"
]

function getOpenModal() {
    for (const selector of MODAL_SELECTORS) {
        const matches = Array.from(document.querySelectorAll(selector))

        for (let index = matches.length - 1; index >= 0; index -= 1) {
            const element = matches[index]

            if (element && element.isConnected) {
                return element
            }
        }
    }

    return null
}

function getReadableRoot(rootSelector) {
    const modalRoot = getOpenModal()

    if (modalRoot) {
        return modalRoot
    }

    return document.querySelector(rootSelector)
}

function getReadableTarget(target, root) {
    if (!target || !root) {
        return null
    }

    const candidates = []
    let current = target

    while (current && current !== root.parentElement) {
        if (
            current.matches?.(READABLE_BLOCK_SELECTORS.join(",")) &&
            root.contains(current)
        ) {
            const text = getTextFromRoot(current)

            if (text.length >= 12) {
                const rect = current.getBoundingClientRect()

                candidates.push({
                    element: current,
                    area: Math.max(rect.width * rect.height, 1),
                    textLength: text.length
                })
            }
        }

        if (current === root) {
            break
        }

        current = current.parentElement
    }

    if (!candidates.length) {
        return null
    }

    candidates.sort((first, second) => {
        if (first.area !== second.area) {
            return first.area - second.area
        }

        return second.textLength - first.textLength
    })

    return candidates[0].element
}

function getTextFromRoot(root) {
    if (!root) {
        return ""
    }

    const nodes = [
        ...(root.matches?.(TEXT_SELECTORS.join(",")) ? [root] : []),
        ...Array.from(root.querySelectorAll(TEXT_SELECTORS.join(",")))
    ]

    const parts = nodes
        .filter((node) => !node.closest("[data-read-aloud-ignore]"))
        .filter((node) => node.textContent.replace(/\s+/g, " ").trim().length >= 2)
        .map((node) => node.textContent.replace(/\s+/g, " ").trim())
        .filter(Boolean)

    return Array.from(new Set(parts)).join(". ")
}

function getPreferredVoice(voices) {
    const preferredVoice = voices.find((voice) =>
        ["en", "en-US", "ru", "ru-RU", "kk", "kk-KZ"].some((lang) =>
            voice.lang?.toLowerCase().startsWith(lang.toLowerCase())
        )
    )

    return preferredVoice || voices[0] || null
}

export function useReadAloud(rootSelector = "#main-content") {
    const utteranceRef = useRef(null)
    const [isSupported, setIsSupported] = useState(false)
    const [isSpeaking, setIsSpeaking] = useState(false)
    const [isSelecting, setIsSelecting] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        if (typeof window === "undefined") {
            return undefined
        }

        const supported = "speechSynthesis" in window && "SpeechSynthesisUtterance" in window
        setIsSupported(supported)

        return () => {
            if (supported) {
                window.speechSynthesis.cancel()
            }
        }
    }, [])

    const stop = useCallback(() => {
        if (!isSupported) {
            return
        }

        window.speechSynthesis.cancel()
        utteranceRef.current = null
        setIsSpeaking(false)
        setIsSelecting(false)
    }, [isSupported])

    const speakText = useCallback((text, lang) => {
        if (!isSupported) {
            setError("Read aloud is not supported in this browser.")
            return
        }

        if (!text) {
            setError("No readable text found in this block.")
            return
        }

        setError("")
        window.speechSynthesis.cancel()

        const utterance = new SpeechSynthesisUtterance(text)
        const voices = window.speechSynthesis.getVoices()
        const voice = getPreferredVoice(voices)

        if (voice) {
            utterance.voice = voice
            utterance.lang = lang || voice.lang
        } else {
            utterance.lang = lang || document.documentElement.lang || "en-US"
        }

        utterance.rate = 1
        utterance.pitch = 1

        utterance.onstart = () => {
            setIsSpeaking(true)
            setIsSelecting(true)
        }

        utterance.onend = () => {
            utteranceRef.current = null
            setIsSpeaking(false)
        }

        utterance.onerror = () => {
            utteranceRef.current = null
            setIsSpeaking(false)
            setError("Unable to play read aloud for this page.")
        }

        utteranceRef.current = utterance
        window.speechSynthesis.speak(utterance)
    }, [isSupported])

    const startSelectionMode = useCallback(() => {
        if (!isSupported) {
            setError("Read aloud is not supported in this browser.")
            return
        }

        setError("")
        setIsSelecting(true)
        setIsSpeaking(false)
    }, [isSupported])

    useEffect(() => {
        if (!isSupported || !isSelecting) {
            return undefined
        }

        const handleClick = (event) => {
            if (!(event.target instanceof Element)) {
                return
            }

            if (
                event.target.closest(
                    "[data-read-aloud-ignore], button, a, input, textarea, select, label, [role='button']"
                )
            ) {
                return
            }

            const readableRoot = getReadableRoot(rootSelector)

            if (!readableRoot) {
                return
            }

            if (!readableRoot.contains(event.target)) {
                return
            }

            const targetBlock = getReadableTarget(event.target, readableRoot)

            const fallbackBlock = targetBlock || readableRoot
            const text = getTextFromRoot(fallbackBlock)

            if (!text) {
                setError("Choose a text block, card, section, or modal to listen to.")
                return
            }

            event.preventDefault()
            event.stopPropagation()

            speakText(text, fallbackBlock.lang || readableRoot.lang)
        }

        document.addEventListener("click", handleClick, true)

        return () => {
            document.removeEventListener("click", handleClick, true)
        }
    }, [isSelecting, isSupported, rootSelector, speakText])

    useEffect(() => stop, [rootSelector, isSupported, stop])

    useEffect(() => {
        const root = document.querySelector(rootSelector)

        if (!root) {
            return undefined
        }

        root.dataset.readAloudMode = isSelecting ? "active" : "inactive"

        return () => {
            delete root.dataset.readAloudMode
        }
    }, [isSelecting, rootSelector])

    return {
        error,
        isSpeaking,
        isSelecting,
        isSupported,
        startSelectionMode,
        stop
    }
}
