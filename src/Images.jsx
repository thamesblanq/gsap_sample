//import imgOne from './images/img1.jpg';
//import imgTwo from './images/img2.jpg';
//import imgThree from './images/img3.jpg';

const Images = () => {
  return (
    <section>
        <div className="absolute top-[80px] right-[300px] bg-no-repeat bg-center bg-cover border border-gray-400 bg-imgOne w-[250px] h-[350px]"></div>

        <div className="absolute top-[300px] right-[570px] bg-no-repeat bg-center bg-cover border border-gray-400 bg-imgTwo w-[250px] h-[350px]"></div>

        <div className="absolute top-[320px] right-[30px]  bg-no-repeat bg-center bg-cover border border-gray-400 bg-imgThree w-[250px] h-[350px]"></div>
    </section>
  )
}

export default Images