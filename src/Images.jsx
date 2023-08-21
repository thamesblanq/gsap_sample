import { useEffect, useRef } from "react";
import { gsap } from 'gsap';


const Images = () => {
  const tl = gsap.timeline();
  const img0ne = useRef(null);
  const imgTwo = useRef(null);
  const imgThree = useRef(null);

  useEffect(() => {
    tl.from(img0ne.current, {
      y: -10, 
      duration: 1, 
      ease: 'power2.out'
    });

    tl.from(imgTwo.current, {
      y: -90, 
      duration: 1, 
      ease: 'power2.out'
    });

    tl.from(imgThree.current, {
      y: -90, 
      duration: 1, 
      ease: 'power2.out'
    });
  })

  return (
    <section>
        <div ref={img0ne} className="absolute top-[80px] right-[300px] bg-no-repeat bg-center bg-cover border border-gray-400 bg-imgOne w-[250px] h-[350px]"></div>

        <div ref={imgTwo} className="absolute top-[300px] right-[570px] bg-no-repeat bg-center bg-cover border border-gray-400 bg-imgTwo w-[250px] h-[350px]"></div>

        <div ref={imgThree} className="absolute top-[320px] right-[30px]  bg-no-repeat bg-center bg-cover border border-gray-400 bg-imgThree w-[250px] h-[350px]"></div>
    </section>
  )
}

export default Images