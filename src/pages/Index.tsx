import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import SocialProof from "@/components/SocialProof";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import HomeServices from "@/components/HomeServices";
import WhoWeHelp from "@/components/WhoWeHelp";
import MiniContact from "@/components/MiniContact";

const Index = () => (
  <>
    <Navbar />
    <HeroSection />
    <ProblemSection />
    <HomeServices />
    <WhoWeHelp />
    <HowItWorks />
    <WhyChooseUs />
    <SocialProof />
    <MiniContact />
    <CTASection />
    <Footer />
  </>
);

export default Index;
