import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom';
import Header from "../Header"


test('renders logo', () => {
    render(<Header/>)
    const logo = screen.getByAltText('disney logo')
    expect(logo).toBeInTheDocument();
})