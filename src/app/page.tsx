import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Caroeusel from "@/components/carouesel/Carousel"
import Category from "@/components/category/Category";
import Information from "@/components/information/Information";
import Recommend from "@/components/recommended/Recommend";
export default function Home() {
  return (
    <main>
      <Header />
      <Caroeusel />
      <Category/>
      <Recommend/>
      <Information/>
      <Footer/>
    </main>
  );
}
