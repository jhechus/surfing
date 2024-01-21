import axios from "axios";
import HighlightArticule from "../_components/Blog/HighlightArticule";
import SubscribeToNewsletter from "../_components/Blog/SubscribeToNewsletter";
import Featureditems from "../_components/Featureditems/Featureditems";
import { fetchBlogArticles, fetchDatafromStrapi } from "@/utils/strapi.utils";

export default async function Page() {
  const data = await fetchBlogArticles()

    const highlightarticleData = {
        headline: "3 tips for a super fast takeoff",
        excerpt: (
            <>
            Improving your take-off phase in surfing is a fundamental step toward riding waves with more confidence and style. <br /><br />

            Improving your take-off phase is a gradual process, and it may take time to master. Be patient, stay committed to practice, and enjoy the journey of becoming a better surfer. With dedication and persistence, youll see progress and have more enjoyable rides. Here is how:
            </>
        ),
        slug: "/takeoff",
        featureedImage: "/assets/hero-experience.png",
    }

    const featuredArticles = [
      {
        headline: "surfboard shaping and design behind the scenes of crafting the perfect board",
        slug: '/blog/whatever',
        date: 'Monday, June 05, 2023',
        featuredImage: "/assets/hero-experience.png"
      },
      {
        headline: "surfboard shaping and design behind the scenes of crafting the perfect board",
        slug: '/blog/whatever',
        date: 'Monday, June 05, 2023',
        featuredImage: "/assets/hero-experience.png"
      },
      {
        headline: "surfboard shaping and design behind the scenes of crafting the perfect board",
        slug: '/blog/whatever',
        date: 'Monday, June 05, 2023',
        featuredImage: "/assets/hero-experience.png"
      },
      {
        headline: "surfboard shaping and design behind the scenes of crafting the perfect board",
        slug: '/blog/whatever',
        date: 'Monday, June 05, 2023',
        featuredImage: "/assets/hero-experience.png"
      },
    ]

  return (
    <main className="blog-page">
      <HighlightArticule data={highlightarticleData}/>
      <SubscribeToNewsletter />
      <Featureditems items={featuredArticles} />
    </main>
  );
}