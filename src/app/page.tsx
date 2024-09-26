import Header from '@/components/header';
import Hero from '@/components/hero';
import About from '@/components/about';
import Footer from '@/components/footer';
import News from '@/components/news'
import Contact from '@/components/contact';


const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <News />
      <Contact/>
      <Footer />
    </div>
  );
};

export default Home;