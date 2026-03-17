import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import App from "./App"

test("renders site logo", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  )

  expect(screen.getByText("NAR.LEN")).toBeInTheDocument()
})
