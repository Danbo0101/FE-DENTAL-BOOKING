import { Button } from "@mui/material";
import teethImg from "../../assets/images/teeth-1.png";
import HomePage1 from "../../assets/images/Homepage-1.png";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";

const HomePage = (props) => {
  return (
    <div>
      <div className="flex px-48 mx-10 mt-10 ">
        <div className="w-3/5 flex flex-col gap-4">
          <div className="font-serif text-6xl font-medium">
            Sức khỏe răng miệng của bạn lịch hẹn chỉ cách một chạm!
          </div>
          <div className="w-3/4 font-roboto font-light ">
            Chúng tôi chỉ sử dụng những vật liệu chất lượng cao nhất để mang đến
            sự chăm sóc tốt nhất cho bệnh nhân. Vì vậy, hãy yên tâm và đặt lịch
            hẹn ngay hôm nay
          </div>
          <div className="mt-5 flex gap-16">
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
            <div className="flex justify-center items-center gap-3">
              <div className="border-solid w-12 h-12 border rounded-xl border-sky-400 flex justify-center items-center">
                <PhoneInTalkOutlinedIcon
                  sx={{
                    borderRadius: "10px",
                    backgroundColor: "#E6F6FE",
                    color: "#1376F8",
                    fontSize: "34px",
                    padding: "5px",
                  }}
                />
              </div>
              <div>
                <div className="text-base font-roboto text-blue-500">Dental 24H Emergency</div>
                <div className="font-roboto text-sm font-medium">0900-78601</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img className="w-96" src={HomePage1} />
        </div>
      </div>
      <div className="flex px-24 mx-10 mt-5">
        <div className="flex justify-center items-center w-full gap-12 px-12 rounded-md bg-sky-200">
          <div className="flex w-1/3 h-72 flex-col justify-center items-center pt-4 pb-12 px-8 rounded-2xl my-10 bg-white">
            <div className="flex justify-center items-center w-14 h-14 rounded-full bg-sky-300">
              <img src={teethImg} className="w-8 h-8" />
            </div>
            <div className="font-serif font-semibold text-xl mt-4">
              Nha khoa tổng quát
            </div>
            <div className="text-center font-extralight text-sm mt-2">
              Khám, chẩn đoán và điều trị các vấn đề răng miệng cơ bản, đồng thời tư vấn về cách chăm sóc răng miệng
            </div>
          </div>
          <div className="flex w-1/3 h-72 flex-col justify-center items-center pt-4 pb-12 px-8 rounded-2xl my-10 bg-white">
            <div className="flex justify-center items-center w-14 h-14 rounded-full bg-sky-300">
              <img src={teethImg} className="w-8 h-8" />
            </div>
            <div className="font-serif font-semibold text-xl mt-4">
              Nha khoa tổng quát
            </div>
            <div className="text-center font-extralight text-sm mt-2">
              Khám, chẩn đoán và điều trị các vấn đề răng miệng cơ bản, đồng thời tư vấn về cách chăm sóc răng miệng
            </div>
          </div>
          <div className="flex w-1/3 h-72 flex-col justify-center items-center pt-4 pb-12 px-8 rounded-2xl my-10 bg-white">
            <div className="flex justify-center items-center w-14 h-14 rounded-full bg-sky-300">
              <img src={teethImg} className="w-8 h-8" />
            </div>
            <div className="font-serif font-semibold text-xl mt-4">
              Nha khoa tổng quát
            </div>
            <div className="text-center font-extralight text-sm mt-2">
              Khám, chẩn đoán và điều trị các vấn đề răng miệng cơ bản, đồng thời tư vấn về cách chăm sóc răng miệng
            </div>
          </div>
        </div>
      </div>
      <div className="flex px-24 mx-10 mt-5">

      </div>
    </div>

  );
};

export default HomePage;
