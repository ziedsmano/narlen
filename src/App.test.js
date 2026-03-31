import { render, screen } from "@testing-library/react"

jest.mock("react-router-dom", () => ({
    MemoryRouter: ({ children }) => children,
    Routes: ({ children }) => children,
    Route: ({ element }) => element,
    Link: ({ children, to, ...props }) => <a href={to} {...props}>{children}</a>,
    NavLink: ({ children, to, ...props }) => <a href={to} {...props}>{children}</a>,
    useNavigate: () => jest.fn(),
    useLocation: () => ({ pathname: "/" })
}), { virtual: true })

jest.mock("swiper/react", () => ({
    Swiper: ({ children }) => <div>{children}</div>,
    SwiperSlide: ({ children }) => <div>{children}</div>
}), { virtual: true })

jest.mock("swiper/modules", () => ({
    Navigation: {},
    EffectFade: {},
    Autoplay: {}
}), { virtual: true })

jest.mock("swiper/css", () => ({}), { virtual: true })
jest.mock("swiper/css/navigation", () => ({}), { virtual: true })

const { MemoryRouter } = require("react-router-dom")
const { LanguageProvider } = require("./context/LanguageContext")
const App = require("./App").default

test("renders site logo", () => {
    render(
        <LanguageProvider>
            <MemoryRouter>
                <App />
            </MemoryRouter>
        </LanguageProvider>
    )

    expect(screen.getByText("NAR.LEN")).toBeInTheDocument()
})
