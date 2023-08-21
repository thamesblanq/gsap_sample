import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Header = () => {
  let tl = gsap.timeline();
  let logo = useRef(null);
  let menu_item1 = useRef(null);
  let menu_item2 = useRef(null);
  let menu_item3 = useRef(null);

  useEffect(() => {
    tl.from(logo.current, {
      x: '100',
      duration: 1,
      ease: "power3.out"
    });

    tl.from([menu_item1.current, menu_item2.current, menu_item3.current], {
      duration: 1,
      x: '-100',
      ease: "power3.out"
    }, "+=1");

  });

  return (
    <div className="absolute top-0 flex items-center justify-between px-4 h-[100px] w-full overflow-hidden">
        <div><h1 className="text-xl font-bold text-[#f0f0f0] font-kanit logo" ref={logo}>Logo</h1></div>
        <div className="flex gap-8">
            <a href="#" className="text-white text-sm font-kanit" ref={menu_item1}>About</a>
            <a href="#" className="text-white text-sm font-kanit" ref={menu_item2}>Journal</a>
            <a href="#" className="text-white text-sm font-kanit" ref={menu_item3}>Contact</a>
        </div>
    </div>
  )
}

export default Header