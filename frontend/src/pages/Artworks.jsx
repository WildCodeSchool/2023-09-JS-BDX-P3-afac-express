import { MDBContainer } from "mdb-react-ui-kit";
import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
import "../App.scss";
// import "swiper/css/navigation"; // Navigation module styles
// import "swiper/css/pagination"; // Pagination module styles
// import "swiper/css/scrollbar"; // Scrollbar module styles// Scrollbar module styles
// import SwiperCore, { Navigation, Pagination, Scrollbar } from "swiper";
import Art from "../components/Art";

// SwiperCore.use([Navigation, Pagination, Scrollbar]);

function Artworks() {
  return (
    <MDBContainer fluid className="pt-5 pb-5">
      <h3
        className="fs-1 text text-center fw-bold pt-5"
        style={{ color: "#7b273d" }}
      >
        Patrimoine iconographique de l'océan indien
      </h3>
      {/* <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      > */}
      {/* <SwiperSlide> */}
      <Art />
      {/* </SwiperSlide>
      </Swiper> */}
    </MDBContainer>
  );
}

export default Artworks;
