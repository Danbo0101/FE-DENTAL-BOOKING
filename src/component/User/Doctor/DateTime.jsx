import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { useState } from 'react';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme, active, selected }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    cursor: !active ? 'default' : 'pointer',
    backgroundColor: selected
        ? 'rgba(0, 106, 255, 0.54)'
        : !active ? 'rgba(93, 93, 93, 0.4)' : 'rgba(255, 255, 255, 0.4)',
    color: selected ? 'white' : 'black',
    padding: "10px 0 10px 0",
    borderRadius: "10px",
    boxShadow: "0 0 10 0",
    fontSize: "16px",
    fontWeight: "bold",
    ...(!active
        ? {}
        : {
            ":hover": {
                backgroundColor: 'rgba(224, 224, 224, 0.4)',
                color: 'rgba(255, 255, 255, 0.8)',
            },
        }),
}));

const DateTime = (props) => {

    const { listTime } = props;
    const [selectedId, setSelectedId] = useState(null);

    return (
        <div className="my-10 flex gap-14 items-center">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Box
                    sx={{
                        '.MuiPaper-root': {
                            backgroundColor: 'transparent !important',
                            boxShadow: 'none !important',
                        },
                        '.MuiPickersDay-root': {
                            backgroundColor: 'transparent',
                            fontSize: '16px',
                        },
                        '.MuiDayPicker-root': {
                            backgroundColor: 'transparent',
                        },
                        '.MuiPickerStaticWrapper-root': {
                            backgroundColor: 'transparent',
                        },
                        '.MuiButtonBase-root': {
                            backgroundColor: 'transparent',
                        },
                        '.MuiPickersLayout-root': {
                            backgroundColor: 'rgba(255, 255, 255, 0.4) !important',
                            borderRadius: '20px',
                            width: '500px',
                            paddingY: '10px',
                            boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)',
                        },
                        '.MuiDayCalendar-root': {
                            width: '100%',
                        },
                        '.MuiDayCalendar-weekDayLabel': {
                            fontSize: '16px',
                            width: '100%',
                        },
                        '.MuiDayCalendar-weekContainer': {
                            width: '100%',
                            gap: '5px',
                        },
                        '.MuiPickersCalendarHeader-root': {
                            paddingLeft: "16px",
                            paddingRight: "3px"
                        },
                        '.MuiPickersCalendarHeader-label': {
                            fontSize: '20px',
                            fontWeight: '600',
                            fontFamily: "serif"
                        },
                        '.MuiTypography-root': {
                            fontFamily: "serif"
                        }

                    }}
                >
                    <StaticDatePicker

                        // value={props.selectedDate}
                        onChange={(newValue) => {
                            props.setSelectedDate(newValue);
                        }}
                        defaultValue={dayjs()}
                        orientation="landscape"
                    />
                </Box>
            </LocalizationProvider>
            <Box sx={{
                width: '100%',

            }}>
                <Grid container rowSpacing={4} columnSpacing={5}>
                    {listTime && listTime.length > 0
                        ?
                        listTime.map((item, index) => {
                            return (
                                <Grid size={6} key={item.id}>
                                    <Item
                                        active={item.status === "active"}
                                        selected={selectedId === item.id} // So sánh với ID được chọn
                                        onClick={() => {
                                            if (item.status === "active") {
                                                setSelectedId(item.id); // Cập nhật ID khi nhấp
                                                props.setSelectedTime(item.time);
                                            }
                                        }}
                                    >
                                        {item.time}
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
    );
}

export default DateTime;