import Header from '@/components/header';
import Hero from '@/components/hero';
import Overview from '@/components/overview';
import Projects from '@/components/projects';
import Footer from '@/components/footer';

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Overview />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;