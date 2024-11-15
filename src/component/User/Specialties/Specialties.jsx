import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const ListSpecialties = (props) => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const items = [
    <div className="item" data-value="1">
      1
    </div>,
    <div className="item" data-value="2">
      2
    </div>,
    <div className="item" data-value="3">
      3
    </div>,
    <div className="item" data-value="4">
      4
    </div>,
    <div className="item" data-value="5">
      5
    </div>,
  ];
  return (
    <div className="flex flex-col">
      <div>
        <div className="text-center font-serif font-bold text-5xl">
          Chuyên khoa
        </div>
        <div>
          Hệ thống đặt lịch khám của chúng tôi mang đến cho bạn trải nghiệm tiện
          lợi và chuyên nghiệp, giúp bạn dễ dàng lựa chọn các chuyên khoa phù
          hợp với nhu cầu sức khỏe.
        </div>
      </div>
      {/* <div>
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
        />
      </div> */}
    </div>
  );
};

export default ListSpecialties;
