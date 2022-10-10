// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
// import "swiper/css/scrollbar";

// import required modules
import { FreeMode, Mousewheel } from "swiper";

const Scroller = ({ children, direction, customStyle }) => {
  return (
    <Swiper
      direction={direction}
      slidesPerView={"auto"}
      freeMode={true}
      mousewheel={true}
      modules={[FreeMode, Mousewheel]}
    >
      <SwiperSlide className={customStyle}>{children}</SwiperSlide>
    </Swiper>
  );
};

export default Scroller;
