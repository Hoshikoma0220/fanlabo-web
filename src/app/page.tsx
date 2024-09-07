import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Overview from '@/components/overview';
import Projects from '@/components/projects';
import Footer from '@/components/Footer';

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