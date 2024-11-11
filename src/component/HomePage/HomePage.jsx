import ClinicSlide from "./ClinicSlide";
import DoctorSlide from "./DoctorSlide";
import ImageSlide from "./ImageSlide";
import Specialties from "./Specialties";
import img4 from "../../assets/images/4.jpeg";
import { useEffect, useState } from "react";
import { getSpecialtiesPagination } from "../../services/specialtiesService";
import { getAllDoctor } from "../../services/doctorService";
import { getAllClinic } from "../../services/clinicService";
import {
  Button,
  Card,
  CardContent,
  Typography,
  Grid,
  Container,
} from "@mui/material";
import { Phone } from "@mui/icons-material";
import HomePage1 from "../../assets/images/Homepage-1.png";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";

const HomePage = (props) => {
  return (
    <div className="flex px-48 mx-10 mt-10  border-solid border-2">
      <div className="w-3/5 flex flex-col gap-4">
        <div className="font-serif text-6xl font-medium">
          Sức khỏe răng miệng của bạn lịch hẹn chỉ cách một chạm!
        </div>
        <div className="w-3/4 font-roboto font-light ">
          Chúng tôi chỉ sử dụng những vật liệu chất lượng cao nhất để mang đến
          sự chăm sóc tốt nhất cho bệnh nhân. Vì vậy, hãy yên tâm và đặt lịch
          hẹn ngay hôm nay
        </div>
        <div className="mt-5 flex ">
          <Button
            variant="outlined"
            href="#outlined-buttons"
            sx={{
              color: "white",
              backgroundColor: "#4C99FF",
              padding: "0px 25px",
              fontSize: "14px",
              fontFamily: "Roboto Slab, serif",
              fontWeight: "600",
              borderRadius: "10px",
              "&:hover": {
                color: "black",
              },
            }}
          >
            Đặt lịch ngay
          </Button>
          <div className="flex">
            <PhoneInTalkOutlinedIcon
              sx={{
                border: "solid 1px",
              }}
            />
            <div>
              <div>Dental 24H Emergency</div>
              <div>0900-78601</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img className="w-96" src={HomePage1} />
      </div>
    </div>
  );
};

export default HomePage;
