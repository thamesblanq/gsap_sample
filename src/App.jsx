import Header from "./Header";
import Content from "./Content";
import Images from "./Images";
import { gsap, Power3 } from 'gsap';

function App() {
  let tl = new gsap.timeline();
  let ease = Power3.easeOut();


  return (
    <div className="w-full min-h-screen relative bg-[#242424] overflow-hidden">
      <Header timeline={tl} ease={ease}/>
      <Content />
      <Images />
    </div>
  )
}

export default App
