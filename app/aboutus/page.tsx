import AboutUsContent from "@/components/aboutus/AboutUsContent";
import AboutusBanner from "@/components/aboutus/AboutusBanner";

function AboutUs() {
  return (
    <main className="flex mt-3 bg-white flex-col justify-between ">
      <AboutusBanner />
      <AboutUsContent />
    </main>
  );
}

export default AboutUs;
