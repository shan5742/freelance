import { useEffect } from "react";
import Contact from "./components/Contact/Contact";
import Faq from "./components/Faq/Faq";
import Guarantee from "./components/Guarantee/Guarantee";
import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
import Services from "./components/Services/Services";
import You from "./components/You/You";
import { useInView } from "react-intersection-observer";

function App() {
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0,
  });

  useEffect(() => {
    console.log("IV", inView, "ENTRY", entry);
  });

  return (
    <>
      {!inView && <Nav />}
      <Hero viewRef={ref} />
      <You />
      <Services />
      <Guarantee />
      <Faq />
      <Contact />
    </>
  );
}

export default App;
