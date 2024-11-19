import TextField from "@mui/material/TextField";
import { useState } from "react";

const InformationForm = (props) => {
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
  return (
    <div className="px-10 py-16">
      <div className="mb-6 font-semibold">
        <input type="radio" name="appointment_type" checked className="mr-2" />
        Gía đặt khám dịch vụ : 100.000 VNĐ
      </div>
      <div className="mb-4 flex gap-1">
        <TextField
          label="Họ và Tên"
          variant="outlined"
          defaultValue={account.name}
          sx={{
            width: "400px",
            borderRadius: "10px",
          }}
        />
        <TextField
          label="CCCD"
          variant="outlined"
          defaultValue={account.cccd}
          sx={{
            width: "400px",
            borderRadius: "10px",
          }}
        />
      </div>

      {account.gender === "male" ? (
        <div className="mb-4">
          <input
            type="radio"
            name="gender"
            id="male"
            className="mr-2"
            checked
          />
          Nam
          <input
            type="radio"
            name="gender"
            id="female"
            className="mr-2 ml-4"
            disabled
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
            disabled
          />
          Nam
          <input
            type="radio"
            name="gender"
            id="female"
            className="mr-2 ml-4"
            checked
            disabled
          />
          Nữ
        </div>
      )}
      <div className="mb-4">
        <input
          type="text"
          value={account.cccd}
          disabled
          className="w-full px-4 py-2 border rounded-md focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          value={account.phone}
          disabled
          className="w-full px-4 py-2 border rounded-md focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          value={account.email}
          disabled
          className="w-full px-4 py-2 border rounded-md focus:outline-none"
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