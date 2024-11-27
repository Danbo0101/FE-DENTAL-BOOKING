import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  getAssignDoctor,
  putUpdateAssignDoctor,
  putUpdateDoctor,
} from "../../../../services/doctorService";
import { getAllSpecialties } from "../../../../services/specialtiesService";
import { getAllClinic } from "../../../../services/clinicService";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const UpdateDoctor = (props) => {
  const { open, dataUpdate } = props;

  const handleClose = () => {
    if (reason !== "backdropClick") {
      onClose(event, reason);
    }
  };

  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [fullName, setFullName] = useState("");
  const [iD_Number, setID_Number] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const checkPhoneNumber = (phoneNumber) => {
    phoneNumber = phoneNumber.replace(/[^\d]/g, "");
    let PhonePattern = /^(0|(\+84))9\d{8}$/;
    return PhonePattern.test(phoneNumber);
  };

  const resetData = () => {
    setFullName("");
    setID_Number("");
    setPhone("");
    setEmail("");
    setGender("");
    setBirthday("");
    setUserName("");
    setPassword("");
    // setNameImage("");
    // setImage("");
    // setPreviewImage("");
    props.setOpen(false);
  };

  useEffect(() => {
    async function fetchData() {
      if (dataUpdate) {
        setFullName(dataUpdate.fullName);
        setID_Number(dataUpdate.iD_Number);
        setPhone(dataUpdate.phone);
        setEmail(dataUpdate.email);
        setGender(dataUpdate.gender);
        setBirthday(dataUpdate.birthday);
        setUserName(dataUpdate.username);
        setPassword(dataUpdate.password);
      }
    }
    fetchData();
  }, [dataUpdate, open]);

  const handleSubmitUpdate = async () => {
    switch (value) {
      case "1":
        if (!fullName) {
          toast.warn("Không được bỏ trống Tên");
          return;
        } else if (!iD_Number) {
          toast.warn("Không được bỏ trống CCCD");
          return;
        } else if (!phone) {
          toast.warn("Không được bỏ trống số điện thoại");
          return;
        } else if (!email) {
          toast.warn("Vui lòng chọn giới email");
          return;
        } else if (!gender) {
          toast.warn("Vui lòng chọn giới tính");
          return;
        } else if (!checkPhoneNumber(phone)) {
          toast.warn("Số điện thoại không hợp lệ");
          return;
        } else if (!birthday) {
          toast.warn("Vui lòng chọn ngày sinh");
          return;
        } else if (!username) {
          toast.warn("Không được bỏ trống tên đăng nhập");
          return;
        } else if (!password) {
          toast.warn("Không được bỏ trống mật khẩu");
          return;
        }

        const data = {
          ...dataUpdate,
          ...{
            fullName,
            email,
            username,
            password,
            iD_Number,
            phone,
            gender,
            birthday,
          },
        };

        delete data.user_Id;

        let result = await putUpdateDoctor(dataUpdate.user_Id, data);
        if (result.success) {
          toast.success("Cập nhật thông tin bác sĩ thành công");
          props.fetchDoctorList();
          resetData();
        } else {
          toast.error(result.message);
        }
      case "2":
      default:
        break;
    }
  };

  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      maxWidth="md"
      fullWidth
    >
      <DialogTitle
        sx={{ m: 0, p: 2, fontSize: "20px", fontWeight: "500" }}
        id="customized-dialog-title"
      >
        <TabContext value={value}>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              gap: "20px",
              borderColor: "divider",
            }}
          >
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              sx={{ width: "100%", display: "flex", paddingLeft: "60px" }}
            >
              <Tab
                label="Sửa thông tin bác sĩ"
                value="1"
                sx={{ width: "50%" }}
              />
              <Tab
                label="Sửa thông tin gán bác sĩ"
                value="2"
                sx={{ width: "50%" }}
              />
            </TabList>
          </Box>
        </TabContext>
      </DialogTitle>
      <DialogContent dividers>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <TabPanel value="1">
              <div className="mx-10 flex flex-col gap-5">
                <input
                  className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="text"
                  placeholder="Họ và Tên"
                  value={fullName}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="text"
                  placeholder="Tên Đăng Nhập"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <input
                  className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="text"
                  placeholder="Mật khẩu"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="flex gap-2">
                  <input
                    type="date"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                    className="block custom-select px-8 py-3 w-1/2 mt-1 bg-gray-100 border border-gray-100 font-medium text-sm text-gray-500  rounded-lg shadow-sm focus:border-gray-400 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                  <select
                    id="gender"
                    name="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="block custom-select px-8 py-3 w-1/2 mt-1 bg-gray-100 border border-gray-100 font-medium text-sm text-gray-500  rounded-lg shadow-sm focus:border-gray-400 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  >
                    <option value="" disabled>
                      Giới tính
                    </option>
                    <option value={true}>Nam</option>
                    <option value={false}>Nữ</option>
                  </select>
                </div>
                <div className="flex gap-2">
                  <input
                    className="w-1/2 px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-1"
                    type="text"
                    placeholder="Số điện thoại"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <input
                    className="w-1/2 px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-1"
                    type="text"
                    placeholder="CCCD"
                    value={iD_Number}
                    onChange={(e) => setID_Number(e.target.value)}
                  />
                </div>
              </div>
            </TabPanel>
            <TabPanel value="2" sx={{ paddingLeft: "70px" }}></TabPanel>
          </TabContext>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          color="success"
          onClick={() => handleSubmitUpdate()}
        >
          Cập nhật
        </Button>
        <Button variant="outlined" color="inherit" onClick={() => resetData()}>
          Đóng
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
};

export default UpdateDoctor;
