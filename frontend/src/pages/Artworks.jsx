import { MDBContainer } from "mdb-react-ui-kit";
// import { Swiper, SwiperSlide } from "swiper/swiper-react";
// import { useState } from "react";
import Art from "../components/Art";

function Artworks() {
  // const [art, setArt] = useState();
  // const setInformation = (e) => {
  //   setArt(e.target.value);
  // };

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
        onSlideChange={() => console.info("slide change")}
        onSwiper={(swiper) => console.info(swiper)}
      >
        <SwiperSlide> */}
      <Art />
      {/* </SwiperSlide>
      </Swiper> */}
    </MDBContainer>
  );
}

export default Artworks;
