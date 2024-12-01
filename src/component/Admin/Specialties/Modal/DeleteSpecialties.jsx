
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogContent } from '@mui/material';
import Slide from '@mui/material/Slide';
import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { deleteSpecialties, getBookingOfSpecialties } from '../../../../services/specialtiesService';



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const DeleteSpecialties = (props) => {
    const { open, dataDelete } = props;
    const printRef = useRef();

    const [dataSpecialties, setDataSpecialties] = useState([]);

    const handleClose = () => {

        if (reason !== 'backdropClick') {
            onClose(event, reason);
        }

    };

    const resetData = () => {
        props.setDataDelete("");
        props.setOpen(false);
    }

    useEffect(() => {
        fetchDataSpecialties()
    }, [dataDelete])


    const fetchDataSpecialties = async () => {
        let data = await getBookingOfSpecialties(dataDelete.id);
        if (data.ER === 0) {
            setDataSpecialties(data.data);
        }
        else {
            console.log(data.message);
        }
    }


    const handleDeleteSpecialties = async () => {

        let result = await deleteSpecialties(dataDelete.id);
        if (result.ER === 0) {
            toast.success(result.message);
            props.fetchListSpecialties();
            resetData();
        } else {
            toast.error(result.message);
            props.fetchListSpecialties();
            resetData()
        }

    };



    return (
        <>
            {dataDelete ?
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle>{`Vui lòng xác nhận xóa chuyên khoa ${dataDelete.name}?`}</DialogTitle>
                    <DialogContent dividers hidden>
                        <div ref={printRef}>
                            <div className='flex justify-center items-center text-center  text-2xl font-semibold p-5'>
                                Báo cáo xoá chuyên khoa {dataDelete.name}
                            </div>
                            <div className="mx-10 my-5 flex flex-col gap-10">
                                <div className='w-full flex flex-col gap-14 justify-center'>
                                    <div className='flex justify-center gap-10'>
                                        <div className="flex flex-col gap-2 items-center">
                                            <label htmlFor="password">Tổng lượt đặt lịch</label>
                                            <input
                                                className="w-full px-8 py-3 text-center rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                                type="text"
                                                placeholder=""
                                                value={dataSpecialties.totalClinicBookings}
                                                disabled
                                            />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </DialogContent>
                    <DialogActions
                    >
                        <Button onClick={resetData} variant='outlined' color='error'>Không</Button>
                        <Button onClick={handleDeleteSpecialties} variant='outlined' color='success'>Xác nhận</Button>
                    </DialogActions>
                </Dialog>
                :
                <></>
            }

        </>
    )
}


export default DeleteSpecialties;