import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom/cjs/react-router-dom";
import NavBar from "../NavBar";
import { CurrentUserProvider } from "../../contexts/CurrentUserContext";

test("renders NavBar", () => {

    render(
        <Router>
            <NavBar />
        </Router>
    );

    //   screen.debug();
    const signInLink = screen.getByRole("link", { name: "Sign in" });
    expect(signInLink).toBeInTheDocument();
});

test("renders link to the user profile for a logged in user", async () => {

    render(
        <Router>
            <CurrentUserProvider>
                <NavBar />
            </CurrentUserProvider>
        </Router>
    );

        const profileAvatar = await screen.findByText('Profile')
        expect(profileAvatar).toBeInTheDocument();
});

test("renders Sign in and Sign up buttons again on log out", async() => {
    render(
        <Router>
            <CurrentUserProvider>
                <NavBar /> 
            </CurrentUserProvider>
        </Router>
    )
    const signOutLink = await screen.findByRole('link', {name: 'Sign out'})
    fireEvent.click(signOutLink)

    const signUpLink = await screen.findByRole('link', {name: 'Sign up'})
    const signInLink = await screen.findByRole('link', {name: 'Sign in'})

    expect(signInLink).toBeInTheDocument();
    expect(signUpLink).toBeInTheDocument();
})

test("renders Feed and Liked buttons on navbar", async() => {
    render(
        <Router>
            <CurrentUserProvider>
                <NavBar /> 
            </CurrentUserProvider>
        </Router>
    )
        const feedLink = await screen.findByRole('link', {name: 'Feed'})
        expect(feedLink).toBeInTheDocument()
        const feedLiked = await screen.findByRole('link', {name: 'Liked'})
        expect(feedLiked).toBeInTheDocument()
})

test("renders Add Post on navbar", async() => {
    render(
        <Router>
            <CurrentUserProvider>
                <NavBar/>
            </CurrentUserProvider>
        </Router>
    )
    const addPost = await screen.findByRole('link', {name: 'Add Post'})
    expect(addPost).toBeInTheDocument()
})