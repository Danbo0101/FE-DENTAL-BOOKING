import { useState } from "react";
import Pagination from '@mui/material/Pagination';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


const SpecialtiesService = (props) => {

    const { listService } = props;

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    const pageCount = Math.ceil(listService.length / itemsPerPage);
    const currentData = listService.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div className="my-5">
            {currentData && currentData.length > 0 ?
                currentData.map((service, index) => {
                    return (
                        <div className="flex items-center border my-5 mx-72 py-5 px-10 drop-shadow rounded-xl bg-slate-100">
                            <div className="flex justify-center items-center w-16 h-16 rounded-full bg-sky-300 drop-shadow">
                                <img src={service.image} className="w-10 h-10" />
                            </div>
                            <div className="ml-5">
                                <div className="font-semibold text-base">{service.name}</div>
                                <div className="font-light text-sm mt-1">Giá khám : {service.price}</div>
                            </div>
                            <div className="flex justify-center items-center font-light text-sm gap-2 ml-72 mt-7">
                                <div>Dịch vụ chi tiết</div>
                                <div className="flex justify-center items-center border rounded-full">
                                    <KeyboardArrowRightIcon
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            fontSize: 16,
                                            borderRadius: 2,
                                            ":hover": {
                                                backgroundColor: "#4C99FF",
                                                color: "white",
                                                cursor: "pointer",
                                            }
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    )
                })
                :
                <></>
            }
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

export default SpecialtiesService;