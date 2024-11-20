import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";

const InformationForm = (props) => {

    const { name, cccd, gender, phone, email } = props;

    return (
        <div className="px-10 py-16">
            <div className="mb-6 font-semibold">
                <input type="radio" name="appointment_type" checked className="mr-2" />
                Gía đặt khám dịch vụ : 100.000 VNĐ
            </div>
            <div className="mb-4 flex gap-10">
                <TextField
                    label="Họ và Tên"
                    variant="outlined"
                    defaultValue={name}
                    sx={{
                        width: "400px",
                        borderRadius: "10px",
                    }}
                    onChange={(e) => props.setName(e.target.value)}
                />
                <TextField
                    label="CCCD"
                    variant="outlined"
                    defaultValue={cccd}
                    sx={{
                        width: "400px",
                        borderRadius: "10px",
                    }}
                    onChange={(e) => props.setCCCD(e.target.value)}
                />
            </div>

            {gender === "male" ? (
                <div className="mb-4">
                    <input
                        type="radio"
                        name="gender"
                        id="male"
                        className="mr-2"
                        checked
                        onChange={(e) => props.setGender("male")}
                    />
                    Nam
                    <input
                        type="radio"
                        name="gender"
                        id="female"
                        className="mr-2 ml-4"
                        onChange={(e) => props.setGender("female")}
                    // disabled
                    />
                    Nữ
                </div>
            ) : (
                <div className="mb-4">
                    <input
                        type="radio"
                        name="gender"
                        id="male"
                        className="mr-2"
                        onChange={(e) => props.setGender("male")}
                    // disabled
                    />
                    Nam
                    <input
                        type="radio"
                        name="gender"
                        id="female"
                        className="mr-2 ml-4"
                        checked
                        onChange={(e) => props.setGender("female")}
                    // disabled
                    />
                    Nữ
                </div>
            )}
            <div className="mb-4 flex gap-10">
                <TextField
                    label="Số điện thoại"
                    variant="outlined"
                    defaultValue={phone}
                    sx={{
                        width: "400px",
                        borderRadius: "10px",
                    }}
                    onChange={(e) => props.setPhone(e.target.value)}
                />
                <TextField
                    label="Email"
                    variant="outlined"
                    defaultValue={email}
                    sx={{
                        width: "400px",
                        borderRadius: "10px",
                    }}
                    onChange={(e) => props.setEmail(e.target.value)}
                />
            </div>
            <div>
                <div className="mb-4">
                    <input
                        type="radio"
                        name="payment_method"
                        value="offline"
                        checked
                        className="mr-2"
                    />
                    <label>Thanh toán tại bệnh viện</label>
                </div>
            </div>
            <div className="mb-4">
                <div className="flex justify-between py-2">
                    <span>Giá khám</span>
                    <span>100.000 VNĐ</span>
                </div>
                <div className="flex justify-between py-2">
                    <span>Phí đặt lịch</span>
                    <span>0 VNĐ</span>
                </div>
                <div className="flex justify-between py-2 font-bold">
                    <span>Tổng cộng</span>
                    <span>100.000 VNĐ</span>
                </div>
            </div>
            <div className="mb-4 bg-blue-100 p-4 rounded-lg">
                <p className="text-gray-700 font-semibold">LƯU Ý</p>
                <ul className="list-disc pl-5">
                    <li>Vui lòng kiểm tra lại thông tin trước khi ấn "Xác nhận"</li>
                </ul>
            </div>
        </div>
    );
};

export default InformationForm;
