import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { postCreateNewDoctor } from "../../../../services/doctorService";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
        padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
        padding: theme.spacing(1),
    },
}));

const CreateDoctor = (props) => {
    const { open, pageCount, doctorIds } = props;

    const handleClose = () => {
        if (reason !== "backdropClick") {
            onClose(event, reason);
        }
    };

    const [fullName, setFullName] = useState("");
    const [iD_Number, setID_Number] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [DOB, setDOB] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [image, setImage] = useState("");
    const [nameImage, setNameImage] = useState("");
    const [previewImage, setPreviewImage] = useState("");

    const handleUploadImage = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setNameImage(event.target.files[0].name);
            setPreviewImage(URL.createObjectURL(event.target.files[0]));
            setImage(event.target.files[0]);
        }
    };

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
        setDOB("");
        setUserName("");
        setPassword("");
        setImage("");
        setNameImage("");
        setPreviewImage("");
        props.setOpen(false);
    };



    const handleSubmitCreate = async () => {

        if (!fullName) {
            toast.warn("Vui lòng nhập Tên");
            return;
        } else if (!email) {
            console.log(1);
            toast.warn("Vui lòng nhập Email");
            return;
        } else if (!userName) {
            toast.warn("Vui lòng nhập Tên đăng nhập");
            return;
        } else if (!password) {
            toast.warn("Vui lòng nhập mật khẩu");
            return;
        } else if (!DOB) {
            toast.warn("Vui lòng chọn ngày sinh");
            return;
        } else if (!gender) {
            toast.warn("Vui lòng chọn giới tính");
            return;
        } else if (!checkPhoneNumber(phone)) {
            toast.warn("Số điện thoại không hợp lệ");
            return;
        } else if (!phone) {
            toast.warn("Vui lòng nhập số điện thoại");
            return;
        } else if (!iD_Number) {
            toast.warn("Vui lòng nhập CCCD");
            return;
        } else if (!image) {
            toast.warn("Vui lòng upload ảnh");
            return;
        }

        const data = {
            fullName,
            email,
            userName,
            password,
            birthday: DOB,
            gender: gender === "true" ? true : false,
            phone,
            iD_Number,
            role_Id: doctorIds,
            Image_Url: "image"

        }

        let result = await postCreateNewDoctor(data);
        // console.log(result)
        if (result.success) {
            toast.success("Thêm Bác Sĩ Thành Công");
            props.fetchDoctorList();
            props.setCurrentPage(pageCount);
            resetData();
        } else {
            toast.error(result.message);
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
                Tạo mới Bác sĩ
            </DialogTitle>
            <DialogContent dividers>
                <div className="mx-10 flex flex-col gap-5">
                    <input
                        className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        type="text"
                        placeholder="Họ và Tên"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
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
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <input
                        className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        type="password"
                        placeholder="Mật khẩu"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="flex gap-2">
                        <input
                            type="date"
                            value={DOB}
                            onChange={(e) => setDOB(e.target.value)}
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
                    <div className="flex item-center text-sm">
                        <label className='"form-label label-upload' htmlFor="labelUpload">
                            <AddPhotoAlternateIcon
                                sx={{
                                    fontSize: "30px",
                                    color: "deepskyblue",
                                    cursor: "pointer",
                                }}
                            />
                            {nameImage ? nameImage : "Thêm hình ảnh"}
                        </label>
                        <input
                            type="file"
                            id="labelUpload"
                            hidden
                            onChange={(event) => handleUploadImage(event)}
                        />
                    </div>
                    <div className="w-full flex justify-center outline-dotted outline-slate-200">
                        {previewImage ? (
                            <img src={previewImage} className="w-32 h-32 p-2" />
                        ) : (
                            <></>
                        )}
                        {/* <span>Preview Image</span> */}
                    </div>
                </div>
            </DialogContent>
            <DialogActions>
                <Button
                    variant="outlined"
                    color="success"
                    onClick={() => handleSubmitCreate()}
                >
                    Tạo mới
                </Button>
                <Button variant="outlined" color="inherit" onClick={() => resetData()}>
                    Đóng
                </Button>
            </DialogActions>
        </BootstrapDialog>
    );
};

export default CreateDoctor;
