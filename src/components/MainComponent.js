import { Component } from 'react';
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./partials/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Skills from './pages/Skills';

class MainComponent extends Component {
    state = {}
    render() {
        return(
            <>
                <Header />
                <main id='home'>
                    <Hero />
                    <About />
                    <Skills />
                    <Services />
                    <Projects />
                </main>
                <Footer />
            </>
        );
    }
}
export default MainComponent;