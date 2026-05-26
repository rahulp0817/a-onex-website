import HeadingBanner from "@/components/HeadingBanner";
import AboutUsContent from "@/components/aboutus/AboutUsContent";

function AboutUs() {
  return (
    <main className="flex mt-3 bg-white flex-col justify-between ">
      <HeadingBanner
        name="About Us"
        description="Pure hydration thoughtfully crafted for healthier living and everyday refreshment."
      />
      <AboutUsContent />
    </main>
  );
}

export default AboutUs;
