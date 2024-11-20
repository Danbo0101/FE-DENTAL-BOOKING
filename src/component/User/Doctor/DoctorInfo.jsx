import imgtest from "../../../assets/images/doctor1.png";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from "react";
import dayjs from 'dayjs';
import * as React from "react";
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DateTime from "./DateTime";
import InformationForm from "./InformationForm";

const DoctorInfo = (props) => {
  const steps = ["Chọn thời gian", "Điền thông tin", "Hoàn thành"];
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  const [listTime, setListTime] = useState([
    {
      id: 1,
      time: "7:00 AM",
      status: "active",
    },
    {
      id: 2,
      time: "8:00 AM",
      status: "inactive",
    },
    {
      id: 3,
      time: "9:00 AM",
      status: "inactive",
    },
    {
      id: 4,
      time: "10:00 AM",
      status: "active",
    },
    {
      id: 5,
      time: "11:00 AM",
      status: "active",
    },
    {
      id: 6,
      time: "13:00 PM",
      status: "active",
    },
    {
      id: 7,
      time: "14:00 PM",
      status: "active",
    },
    {
      id: 8,
      time: "15:00 PM",
      status: "active",
    },
    {
      id: 9,
      time: "16:00 PM",
      status: "active",
    },
    {
      id: 10,
      time: "17:00 PM",
      status: "active",
    },
  ])

  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedTime, setSelectedTime] = useState('');

  const [name, setName] = useState("");
  const [cccd, setCCCD] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const account = {
    name: "John Doe",
    cccd: "1234567890",
    gender: "male",
    phone: "0987654321",
    email: "john.doe@example.com",
  };


  useEffect(() => {
    setName(account.name);
    setCCCD(account.cccd);
    setGender(account.gender);
    setPhone(account.phone);
    setEmail(account.email);
  }, [activeStep])

  // console.log(selectedTime, selectedDate)


  const handleNext = () => {
    let newSkipped = skipped;
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };


  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex items-center justify-center gap-8 mt-20">
        <img src={imgtest} className="w-32 h-32 rounded-full" />
        <div className="flex flex-col gap-3 ">
          <div className="text-3xl font-serif font-semibold">
            Bác sĩ : tên bác sĩ
          </div>
          <div className="flex items-center gap-2 text-sm font-light">
            <LocalPharmacyIcon />
            Chuyên khoa : tên chuyên khoa
          </div>
          {activeStep === 1 ?
            <div className="flex items-center gap-2 text-sm font-light">
              <CalendarMonthIcon />
              {dayjs(selectedDate).format("DD/MM/YYYY")} - {selectedTime}
            </div>
            :
            <></>
          }

        </div>
      </div>
      <div className="text-2xl font-serif font-semibold my-16">
        Dịch vụ .....
      </div>
      <Box sx={{
        width: '100%',
        paddingX: "150px"
      }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              {activeStep === 0 ? (
                <div>
                  <DateTime
                    listTime={listTime}
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                    setSelectedTime={setSelectedTime}
                  />
                </div>
              ) : activeStep === 1 ? (
                <div>
                  <InformationForm
                    name={name}
                    setName={setName}
                    phone={phone}
                    setPhone={setPhone}
                    cccd={cccd}
                    setCCCD={setCCCD}
                    email={email}
                    setEmail={setEmail}
                    gender={gender}
                    setGender={setGender}
                  />
                </div>
              ) : activeStep === 2 ? (
                <div>
                  success
                </div>
              ) : null}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              {activeStep === 0
                ?
                <></>
                :
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{
                    borderRadius: "5px",
                    padding: "10px 20px",
                    backgroundColor: "white",
                    color: "black",
                    fontFamily: "serif",
                    fontWeight: "bold",
                  }}
                >
                  Quay lại
                </Button>
              }
              <Box sx={{ flex: '1 1 auto' }} />
              <Button
                onClick={handleNext}
                sx={{
                  borderRadius: "5px",
                  padding: "10px 20px",
                  backgroundColor: "white",
                  color: "black",
                  fontFamily: "serif",
                  fontWeight: "bold",
                }}
              >
                {activeStep === steps.length - 1 ? 'Đặt Lịch' : 'Tiếp Theo'}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </div>
  );
};

export default DoctorInfo;
