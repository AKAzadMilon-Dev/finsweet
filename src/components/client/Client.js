import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./client.css";

const Client = () => {
  return (
    <>
      <section className="client">
        <div className="container">
          <div className="box">
            <div className="about">
              <h2>What our clients say about us</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
              </p>
            </div>
            <div className="clientreview">
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, A11y]}
                    // spaceBetween={50}
                    slidesPerView={1}
                    navigation={true}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log("slide change")}
                >
                <SwiperSlide>
                    <h3>
                        "The best agency we’ve worked with so far. They understand
                        our product and are able to add new features with a great
                        focus."
                    </h3>
                    <div className="clientright">
                        <div className="clientinner">
                        <img src="assets/images/clientimg.png" alt="clientimg" />
                        <div className="clientdescription">
                            <h5>Jenny Wilson</h5>
                            <p>Vice President</p>
                        </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <h3>
                        "The best agency we’ve worked with so far. They understand
                        our product and are able to add new features with a great
                        focus."
                    </h3>
                    <div className="clientright">
                        <div className="clientinner">
                        <img src="assets/images/clientimg.png" alt="clientimg" />
                        <div className="clientdescription">
                            <h5>Jenny Wilson</h5>
                            <p>Vice President</p>
                        </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <h3>
                        "The best agency we’ve worked with so far. They understand
                        our product and are able to add new features with a great
                        focus."
                    </h3>
                    <div className="clientright">
                        <div className="clientinner">
                        <img src="assets/images/clientimg.png" alt="clientimg" />
                        <div className="clientdescription">
                            <h5>Jenny Wilson</h5>
                            <p>Vice President</p>
                        </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <h3>
                        "The best agency we’ve worked with so far. They understand
                        our product and are able to add new features with a great
                        focus."
                    </h3>
                    <div className="clientright">
                        <div className="clientinner">
                        <img src="assets/images/clientimg.png" alt="clientimg" />
                        <div className="clientdescription">
                            <h5>Jenny Wilson</h5>
                            <p>Vice President</p>
                        </div>
                        </div>
                    </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Client;
