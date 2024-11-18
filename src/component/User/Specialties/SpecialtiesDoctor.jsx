import { useState } from "react";
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import Grid from '@mui/material/Grid2';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    cursor: 'pointer',
    backgroundColor: '#fff',
    padding: "10px",
    borderRadius: "10px",
    boxShadow: "0 0 10 0",
    ":hover": {
        backgroundColor: '#f1f3f5',
    },
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));


const SpecialtiesDoctor = (props) => {

    const { listDoctor } = props;

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const pageCount = Math.ceil(listDoctor.length / itemsPerPage);
    const currentData = listDoctor.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <>
            <div className="w-full flex justify-center">
                <Box sx={{
                    width: '100%',
                    paddingY: '50px',
                    paddingX: '200px',
                }}>
                    <Grid container rowSpacing={2} columnSpacing={5}>
                        {currentData && currentData.length > 0
                            ?
                            currentData.map((doctor, index) => {
                                return (
                                    <Grid size={6}>
                                        <Item>
                                            <img
                                                src={doctor.image}
                                                className="w-24 h-24 rounded-full mx-5"
                                            />
                                            <div className=''>
                                                <div className='font-bold text-xl'>Bác sĩ {doctor.name}</div>
                                                <div className='text-sm font-light'>Chuyên khoa {doctor.specialty}</div>
                                                <div className='text-sm font-light'>Lịch khám : {doctor.schedule}</div>
                                            </div>
                                        </Item>
                                    </Grid>
                                )
                            })
                            :
                            <></>
                        }
                    </Grid>
                </Box>
            </div >
            <div className=' flex items-center justify-center'>
                <Pagination
                    count={pageCount}
                    color="primary"
                    page={currentPage}
                    onChange={(e, value) => setCurrentPage(value)}
                />
            </div>
        </>
    )
}

export default SpecialtiesDoctor;