import { useRef, useEffect } from 'react';
import { gsap, Power3 } from 'gsap';

const Header = () => {
  let tl = new gsap.timeline();
  let ease = Power3.easeOut();
  let logo = useRef(null);
  let menu_item1 = useRef(null);
  let menu_item2 = useRef(null);
  let menu_item3 = useRef(null);

  useEffect(() => {
    tl.from(logo, 1, {
      opacity: 0,
      y: '50'
    });

    tl.from([menu_item1, menu_item2, menu_item3], 2, {
      opacity: 0,
      y: '-50',
      stagger: {
        amount: 0.4
      },
      ease: ease
    });

  });

  return (
    <div className="absolute top-0 flex items-center justify-between px-4 h-[100px] w-full">
        <div><h1 className="text-xl font-bold text-[#f0f0f0] font-kanit logo" ref={el => logo = el}>Logo</h1></div>
        <div className="flex gap-4">
            <a href="#" className="text-white text-sm font-kanit ml-[20px]" ref={el => menu_item1 = el}>About</a>
            <a href="#" className="text-white text-sm font-kanit ml-[20px]" ref={el => menu_item2 = el}>Journal</a>
            <a href="#" className="text-white text-sm font-kanit ml-[20px]" ref={el => menu_item3 = el}>Contact</a>
        </div>
    </div>
  )
}

export default Header