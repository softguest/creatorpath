// app/page.tsx
import Navigation from "@/components/bootcamp/navigation";
import Hero from "@/components/bootcamp/hero";
import TrustBar from "@/components/bootcamp/trust-bar";
import StoryTimeline from "@/components/bootcamp/story-timeline";
import SystemSection from "@/components/bootcamp/system-section";
import BootcampTimeline from "@/components/bootcamp/bootcamp-timeline";
import WorkflowSection from "@/components/bootcamp/workflow-section";
import ProcessLoop from "@/components/bootcamp/process-loop";
import PricingCards from "@/components/bootcamp/pricing-cards";
import AcceleratorSection from "@/components/bootcamp/accelerator-section";
import AudienceGrid from "@/components/bootcamp/audience-grid";
import EquipmentSection from "@/components/bootcamp/equipment-section";
import Outcomes from "@/components/bootcamp/outcomes";
import Instructor from "@/components/bootcamp/instructor";
import FAQ from "@/components/bootcamp/faq";
import FinalCTA from "@/components/bootcamp/final-cta";
import Footer from "@/components/bootcamp/footer";

export default function Home() {
  return (
    <main className="bg-[#050505] text-white">
      <Navigation />
      <StoryTimeline />
      <SystemSection />
      <BootcampTimeline />
      <WorkflowSection />
      <ProcessLoop />
      {/* <PricingCards />
      <AcceleratorSection />
      <AudienceGrid />
      <EquipmentSection />
      <Outcomes />
      <Instructor />
      <FAQ />
      <FinalCTA /> */}
      <Footer />
    </main>
  );
}