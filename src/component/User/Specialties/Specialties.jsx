import AliceCarousel from "react-alice-carousel";
import Button from "@mui/material/Button";
import "react-alice-carousel/lib/alice-carousel.css";
import imgtest from "../../../assets/images/teeth-1.png";
import imgdoctortest from "../../../assets/images/doctor1.png";
import { useState } from "react";
import SpecialtiesDoctor from "./SpecialtiesDoctor";
import SpecialtiesService from "./SpecialtiesService";

const ListSpecialties = (props) => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const specialty = [
    <div
      className="item h-96 w-96 flex justify-center items-center cursor-pointer"
      data-value="1"
    >
      <div className="flex w-4/5 h-60 flex-col justify-center items-center px-8 rounded-2xl bg-white hover:bg-sky-200 drop-shadow-md">
        <div className="flex justify-center items-center w-14 h-14 rounded-full bg-sky-300 drop-shadow">
          <img src={imgtest} className="w-8 h-8" />
        </div>
        <div className="font-serif font-semibold text-xl mt-4">
          Nha khoa trẻ em
        </div>
        <div className="text-center font-extralight text-sm mt-2">
          Khám, điều trị và tư vấn về răng miệng cho trẻ, đồng thời giáo dục trẻ
          em và phụ huynh về cách chăm sóc răng miệng
        </div>
      </div>
    </div>,
    <div
      className="item h-96 w-96 flex justify-center items-center cursor-pointer"
      data-value="1"
    >
      <div className="flex w-4/5 h-60 flex-col justify-center items-center px-8 rounded-2xl bg-white hover:bg-sky-200 drop-shadow-md">
        <div className="flex justify-center items-center w-14 h-14 rounded-full bg-sky-300 drop-shadow">
          <img src={imgtest} className="w-8 h-8" />
        </div>
        <div className="font-serif font-semibold text-xl mt-4">
          Nha khoa trẻ em
        </div>
        <div className="text-center font-extralight text-sm mt-2">
          Khám, điều trị và tư vấn về răng miệng cho trẻ, đồng thời giáo dục trẻ
          em và phụ huynh về cách chăm sóc răng miệng
        </div>
      </div>
    </div>,
    <div
      className="item h-96 w-96 flex justify-center items-center cursor-pointer"
      data-value="1"
    >
      <div className="flex w-4/5 h-60 flex-col justify-center items-center px-8 rounded-2xl bg-white hover:bg-sky-200 drop-shadow-md">
        <div className="flex justify-center items-center w-14 h-14 rounded-full bg-sky-300 drop-shadow">
          <img src={imgtest} className="w-8 h-8" />
        </div>
        <div className="font-serif font-semibold text-xl mt-4">
          Nha khoa trẻ em
        </div>
        <div className="text-center font-extralight text-sm mt-2">
          Khám, điều trị và tư vấn về răng miệng cho trẻ, đồng thời giáo dục trẻ
          em và phụ huynh về cách chăm sóc răng miệng
        </div>
      </div>
    </div>,
    <div
      className="item h-96 w-96 flex justify-center items-center cursor-pointer"
      data-value="1"
    >
      <div className="flex w-4/5 h-60 flex-col justify-center items-center px-8 rounded-2xl bg-white hover:bg-sky-200 drop-shadow-md">
        <div className="flex justify-center items-center w-14 h-14 rounded-full bg-sky-300 drop-shadow">
          <img src={imgtest} className="w-8 h-8" />
        </div>
        <div className="font-serif font-semibold text-xl mt-4">
          Nha khoa trẻ em
        </div>
        <div className="text-center font-extralight text-sm mt-2">
          Khám, điều trị và tư vấn về răng miệng cho trẻ, đồng thời giáo dục trẻ
          em và phụ huynh về cách chăm sóc răng miệng
        </div>
      </div>
    </div>,
    <div
      className="item h-96 w-96 flex justify-center items-center cursor-pointer"
      data-value="1"
    >
      <div className="flex w-4/5 h-60 flex-col justify-center items-center px-8 rounded-2xl bg-white hover:bg-sky-200 drop-shadow-md">
        <div className="flex justify-center items-center w-14 h-14 rounded-full bg-sky-300 drop-shadow">
          <img src={imgtest} className="w-8 h-8" />
        </div>
        <div className="font-serif font-semibold text-xl mt-4">
          Nha khoa trẻ em
        </div>
        <div className="text-center font-extralight text-sm mt-2">
          Khám, điều trị và tư vấn về răng miệng cho trẻ, đồng thời giáo dục trẻ
          em và phụ huynh về cách chăm sóc răng miệng
        </div>
      </div>
    </div>,
  ];

  const listDoctor = [
    {
      image: imgdoctortest,
      name: "Dr. Hùng Phúc",
      specialty: "Chuyên khoa răng miệng",
      schedule: "Mon - Sun",
    },
    {
      image: imgdoctortest,
      name: "Dr. Hùng Phúc",
      specialty: "Chuyên khoa răng miệng",
      schedule: "Mon - Sun",
    },
    {
      image: imgdoctortest,
      name: "Dr. Hùng Phúc",
      specialty: "Chuyên khoa răng miệng",
      schedule: "Mon - Sun",
    },
    {
      image: imgdoctortest,
      name: "Dr. Hùng Phúc",
      specialty: "Chuyên khoa răng miệng",
      schedule: "Mon - Sun",
    },
    {
      image: imgdoctortest,
      name: "Dr. Hùng Phúc",
      specialty: "Chuyên khoa răng miệng",
      schedule: "Mon - Sun",
    },
    {
      image: imgdoctortest,
      name: "Dr. Hùng Phúc",
      specialty: "Chuyên khoa răng miệng",
      schedule: "Mon - Sun",
    },
    {
      image: imgdoctortest,
      name: "Dr. Hùng Phúc",
      specialty: "Chuyên khoa răng miệng",
      schedule: "Mon - Sun",
    },
    {
      image: imgdoctortest,
      name: "Dr. Hùng Phúc",
      specialty: "Chuyên khoa răng miệng",
      schedule: "Mon - Sun",
    },
    {
      image: imgdoctortest,
      name: "Dr. Hùng Phúc",
      specialty: "Chuyên khoa răng miệng",
      schedule: "Mon - Sun",
    },
    {
      image: imgdoctortest,
      name: "Dr. Hùng Phúc",
      specialty: "Chuyên khoa răng miệng",
      schedule: "Mon - Sun",
    },
    {
      image: imgdoctortest,
      name: "Dr. Hùng Phúc",
      specialty: "Chuyên khoa răng miệng",
      schedule: "Mon - Sun",
    },
    {
      image: imgdoctortest,
      name: "Dr. Hùng Phúc",
      specialty: "Chuyên khoa răng miệng",
      schedule: "Mon - Sun",
    },
    {
      image: imgdoctortest,
      name: "Dr. Hùng Phúc",
      specialty: "Chuyên khoa răng miệng",
      schedule: "Mon - Sun",
    },
    {
      image: imgdoctortest,
      name: "Dr. Hùng Phúc",
      specialty: "Chuyên khoa răng miệng",
      schedule: "Mon - Sun",
    },
    {
      image: imgdoctortest,
      name: "Dr. Hùng Phúc",
      specialty: "Chuyên khoa răng miệng",
      schedule: "Mon - Sun",
    },
    {
      image: imgdoctortest,
      name: "Dr. Hùng Phúc",
      specialty: "Chuyên khoa răng miệng",
      schedule: "Mon - Sun",
    },
    {
      image: imgdoctortest,
      name: "Dr. Hùng Phúc",
      specialty: "Chuyên khoa răng miệng",
      schedule: "Mon - Sun",
    },
    {
      image: imgdoctortest,
      name: "Dr. Hùng Phúc",
      specialty: "Chuyên khoa răng miệng",
      schedule: "Mon - Sun",
    },
  ];

  const listService = [
    {
      image: imgtest,
      name: "Khám răng tuyến tinh",
      price: "100.000 VNĐ - 200.00 VNĐ",
    },
    {
      image: imgtest,
      name: "Khám răng tuyến tinh",
      price: "100.000 VNĐ - 200.00 VNĐ",
    },
    {
      image: imgtest,
      name: "Khám răng tuyến tinh",
      price: "100.000 VNĐ - 200.00 VNĐ",
    },
    {
      image: imgtest,
      name: "Khám răng tuyến tinh",
      price: "100.000 VNĐ - 200.00 VNĐ",
    },
    {
      image: imgtest,
      name: "Khám răng tuyến tinh",
      price: "100.000 VNĐ - 200.00 VNĐ",
    },
    {
      image: imgtest,
      name: "Khám răng tuyến tinh",
      price: "100.000 VNĐ - 200.00 VNĐ",
    },
    {
      image: imgtest,
      name: "Khám răng tuyến tinh",
      price: "100.000 VNĐ - 200.00 VNĐ",
    },
    {
      image: imgtest,
      name: "Khám răng tuyến tinh",
      price: "100.000 VNĐ - 200.00 VNĐ",
    },
    {
      image: imgtest,
      name: "Khám răng tuyến tinh",
      price: "100.000 VNĐ - 200.00 VNĐ",
    },
    {
      image: imgtest,
      name: "Khám răng tuyến tinh",
      price: "100.000 VNĐ - 200.00 VNĐ",
    },
  ];

  const [isActive, setIsActive] = useState(true);

  return (
    <div className="flex flex-col">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="text-center font-serif font-bold text-4xl mt-20">
          Chuyên khoa
        </div>
        <div className="w-2/5 text-center font-light text-sm mt-3">
          Hệ thống đặt lịch khám của chúng tôi mang đến cho bạn trải nghiệm tiện
          lợi và chuyên nghiệp, giúp bạn dễ dàng lựa chọn các chuyên khoa phù
          hợp với nhu cầu sức khỏe.
        </div>
      </div>
      <div className="mt-10 mx-36 w-4/5">
        <AliceCarousel
          mouseTracking
          items={specialty}
          responsive={responsive}
          controlsStrategy="alternate"
        />
      </div>
      <hr className="mx-40 border-black-500" />
      <div className="w-full flex justify-center gap-40">
        <Button
          variant="outlined"
          href="#outlined-buttons"
          sx={{
            padding: "10px 30px",
            fontSize: "14px",
            fontFamily: "Roboto Slab, serif",
            fontWeight: "600",
            borderRadius: "10px",
            marginTop: "30px",
            backgroundColor: isActive ? "#FFFFFF" : "#4C99FF",
            color: isActive ? "black" : "white",
            transform: isActive ? "scale(0.98)" : "none",
            cursor: isActive ? "default" : "pointer",
            "&:hover": !isActive && {
              color: "black",
            },
          }}
          onClick={(e) => !isActive && setIsActive(true)}
        >
          Bác Sĩ
        </Button>
        <Button
          variant="outlined"
          href="#outlined-buttons"
          sx={{
            padding: "10px 30px",
            fontSize: "14px",
            fontFamily: "Roboto Slab, serif",
            fontWeight: "600",
            borderRadius: "10px",
            marginTop: "30px",
            backgroundColor: !isActive ? "#FFFFFF" : "#4C99FF",
            color: !isActive ? "black" : "white",
            transform: !isActive ? "scale(0.98)" : "none",
            cursor: !isActive ? "default" : "pointer",
            "&:hover": isActive && {
              color: "black",
            },
          }}
          onClick={(e) => isActive && setIsActive(false)}
        >
          Dịch vụ
        </Button>
      </div>
      {isActive ? (
        <SpecialtiesDoctor listDoctor={listDoctor} />
      ) : (
        <SpecialtiesService listService={listService} />
      )}
    </div>
  );
};

export default ListSpecialties;
