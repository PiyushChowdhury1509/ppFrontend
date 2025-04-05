import Page from "../components/sections/Page"

import Header from "../components/sections/Header";
import Navigation from "../components/sections/Navigation";
import Hero from "../components/sections/Hero";
import Reviews from "../components/sections/Reviews";

import Main from "../components/sections/Main";
import Logos from "../components/sections/Logos";
import Features from "../components/sections/Features";
import FAQs from "../components/sections/FAQs/FAQs";
import Testimonials from "../components/sections/Tesimonials/Testimonials";

import Footer from "../components/sections/Footer";

import Modal from "../components/sections/Modal/Modal";
import SignUpModal from "../components/sections/Modal/SignUpModal";
import { ModalContextProvider } from "../contexts/ModalContext";

import MobileMenu from "../components/sections/MobileMenu/MobileMenu";
import { MobileMenuContextProvider } from "../contexts/MobileMenuContext";

function LandingPage() {
  return (
    <ModalContextProvider>
      <MobileMenuContextProvider>
        <Page>
          <Header>
            <Navigation />
            <Hero />
            <Reviews />
          </Header>
          <Main>
            <Logos />
            <Features />
            <FAQs />
            <Testimonials />
          </Main>
          <Footer />

          <Modal modal="sign-up">
            <SignUpModal />
          </Modal>

          <MobileMenu />
        </Page>
      </MobileMenuContextProvider>
    </ModalContextProvider>
  );
}

export default LandingPage;
