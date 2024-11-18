import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Pagination from '@mui/material/Pagination';
import Button from '@mui/material/Button';
import imgdoctortest from "../../../assets/images/doctor1.png";


const ListService = (props) => {

    const listDoctor = [
        {
            image: imgdoctortest,
            name: "Dr. Hùng Phúc",
            specialty: "Chuyên khoa răng miệng",
            schedule: "Mon - Sun"
        },
        {
            image: imgdoctortest,
            name: "Dr. Hùng Phúc",
            specialty: "Chuyên khoa răng miệng",
            schedule: "Mon - Sun"
        },
        {
            image: imgdoctortest,
            name: "Dr. Hùng Phúc",
            specialty: "Chuyên khoa răng miệng",
            schedule: "Mon - Sun"
        },
        {
            image: imgdoctortest,
            name: "Dr. Hùng Phúc",
            specialty: "Chuyên khoa răng miệng",
            schedule: "Mon - Sun"
        },
        {
            image: imgdoctortest,
            name: "Dr. Hùng Phúc",
            specialty: "Chuyên khoa răng miệng",
            schedule: "Mon - Sun"
        },
        {
            image: imgdoctortest,
            name: "Dr. Hùng Phúc",
            specialty: "Chuyên khoa răng miệng",
            schedule: "Mon - Sun"
        },
        {
            image: imgdoctortest,
            name: "Dr. Hùng Phúc",
            specialty: "Chuyên khoa răng miệng",
            schedule: "Mon - Sun"
        },
        {
            image: imgdoctortest,
            name: "Dr. Hùng Phúc",
            specialty: "Chuyên khoa răng miệng",
            schedule: "Mon - Sun"
        },
        {
            image: imgdoctortest,
            name: "Dr. Hùng Phúc",
            specialty: "Chuyên khoa răng miệng",
            schedule: "Mon - Sun"
        },
        {
            image: imgdoctortest,
            name: "Dr. Hùng Phúc",
            specialty: "Chuyên khoa răng miệng",
            schedule: "Mon - Sun"
        },
        {
            image: imgdoctortest,
            name: "Dr. Hùng Phúc",
            specialty: "Chuyên khoa răng miệng",
            schedule: "Mon - Sun"
        },
        {
            image: imgdoctortest,
            name: "Dr. Hùng Phúc",
            specialty: "Chuyên khoa răng miệng",
            schedule: "Mon - Sun"
        },
        {
            image: imgdoctortest,
            name: "Dr. Hùng Phúc",
            specialty: "Chuyên khoa răng miệng",
            schedule: "Mon - Sun"
        },
        {
            image: imgdoctortest,
            name: "Dr. Hùng Phúc",
            specialty: "Chuyên khoa răng miệng",
            schedule: "Mon - Sun"
        },
        {
            image: imgdoctortest,
            name: "Dr. Hùng Phúc",
            specialty: "Chuyên khoa răng miệng",
            schedule: "Mon - Sun"
        },
        {
            image: imgdoctortest,
            name: "Dr. Hùng Phúc",
            specialty: "Chuyên khoa răng miệng",
            schedule: "Mon - Sun"
        },
        {
            image: imgdoctortest,
            name: "Dr. Hùng Phúc",
            specialty: "Chuyên khoa răng miệng",
            schedule: "Mon - Sun"
        },
        {
            image: imgdoctortest,
            name: "Dr. Hùng Phúc",
            specialty: "Chuyên khoa răng miệng",
            schedule: "Mon - Sun"
        }
    ]

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const pageCount = Math.ceil(listDoctor.length / itemsPerPage);
    const currentData = listDoctor.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div className="flex flex-col">
            <div className="w-full flex flex-col justify-center items-center">
                <div className="text-center font-serif font-bold text-4xl mt-20">
                    Khám Tổng Quát
                </div>
                <div className="w-2/5 text-center font-light text-sm mt-3">
                    Khám, chẩn đoán và điều trị các vấn đề răng miệng cơ bản, đồng thời tư vấn về cách chăm sóc răng miệng.
                </div>
            </div>
            <div className="my-10">
                {currentData && currentData.length > 0 ?
                    currentData.map((doctor, index) => {
                        return (
                            <div className="flex items-center mx-40 mt-10 border rounded-xl px-10 py-5 bg-white drop-shadow">
                                <img src={doctor.image} className="w-28 h-28 rounded-full" />
                                <div className="flex flex-col gap-1 ml-4">
                                    <div className="text-xl font-semibold font-serif">{doctor.name}</div>
                                    <div className="text-base font-extralight"> {doctor.specialty} </div>
                                    <div className="text-base font-extralight ">Lịch Khám : {doctor.schedule}</div>
                                </div>
                                <div className="mt-16 ml-96">
                                    <Button
                                        variant="outlined"
                                        href="#outlined-buttons"
                                        sx={{
                                            color: "white",
                                            backgroundColor: "#4C99FF",
                                            padding: "6px 25px",
                                            fontSize: "10px",
                                            fontFamily: "Roboto Slab, serif",
                                            fontWeight: "600",
                                            borderRadius: "10px",
                                            marginLeft: "220px",
                                            "&:hover": {
                                                color: "black",
                                            },
                                        }}
                                    >
                                        Đặt lịch
                                    </Button>
                                </div>
                            </div>
                        )
                    })
                    :
                    <></>
                }

            </div>
            <div className=' flex items-center justify-center'>
                <Pagination
                    count={pageCount}
                    color="primary"
                    page={currentPage}
                    onChange={(e, value) => setCurrentPage(value)}
                />
            </div>
        </div>
    )
}

export default ListService;