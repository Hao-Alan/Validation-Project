import React, { useState } from "react";
import "./BaiTapForm.css";
import Swal from "sweetalert2";
const BaiTapForm = () => {
  const [onchageInput, setonchageInput] = useState({
    values: {
      FirstName: "",
      LastName: "",
      userName: "",
      Email: "",
      password: "",
      passwordConfirm: "",
    },

    error: {
      FirstName: "",
      LastName: "",
      userName: "",
      Email: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const handleChange = (event) => {
    let { name, value, type } = event.target;
    let newValues = { ...onchageInput.values, [name]: value };
    let errorTemp = { ...onchageInput.error };

    if (value.trim() === "") {
      errorTemp[name] = name + " không được bỏ trống";
    } else {
      errorTemp[name] = "";
    }

    if (type === "email") {
      const regexEmail =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      console.log(errorTemp.Email);
      if (!regexEmail.test(value)) {
        errorTemp.Email = "Email invalid !!";
      } else {
        errorTemp.Email = "";
      }
    }

    if (name === "passwordConfirm") {
      if (value === newValues.password) {
        errorTemp.passwordConfirm = "";
      } else {
        errorTemp.passwordConfirm = "passwordConfirm khong matching";
      }
    }

    setonchageInput({ values: newValues, error: errorTemp });
  };

  const handleSubmit = (event) => {
    // cản không cho trình duyệt submit
    event.preventDefault();
    //xet điều kiện khi submit
    let { values, error } = onchageInput;
    let valid = true;
    let contentSuccess = "";
    let contentError = "";

    for (const key in values) {
      contentSuccess += `<p class="text-success " >${key}: <bold class="text-danger"> ${values[key]}</bold></p>`;
      if (values[key] === "") {
        valid = false;
      }
    }
    for (const key in error) {
      if (error[key] !== "") {
        contentError += `<p class = "text-danger">${key}: ${error[key]}</p>`;
        valid = false;
      }
    }

    if (!valid) {
      Swal.fire({
        title: "Thất Bại!",
        html: contentError,
        icon: "error",
        confirmButtonText: "Submit Failed",
      });
      return;
    }
    // alert("THÀNH CÔNG!!!");
    Swal.fire({
      title: "Thành công!",
      html: contentSuccess,
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
    <div className="container BaiTapForm mt-0">
      <h2>User Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-6 ">
            <div className="group">
              <input
                type="text"
                required
                name="FirstName"
                onChange={handleChange}
                // onBlur={handleBlur}
                value={onchageInput.values.FirstName}
              />
              <span className="highlight" />
              <span className="bar" />
              <label>FirstName</label>
              <span className="text-danger">
                {onchageInput.error.FirstName}
              </span>
            </div>
          </div>
          <div className="col-6">
            <div className="group">
              <input
                value={onchageInput.values.LastName}
                type="text"
                required
                name="LastName"
                onChange={handleChange}
                // onBlur={handleBlur}
              />
              <span className="highlight" />
              <span className="bar" />
              <label>LastName</label>
              <span className="text-danger">{onchageInput.error.LastName}</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 ">
            <div className="group">
              <input
                value={onchageInput.values.userName}
                type="text"
                required
                name="userName"
                onChange={handleChange}
                // onBlur={handleBlur}
              />
              <span className="highlight" />
              <span className="bar" />
              <label>userName</label>
              <span className="text-danger">{onchageInput.error.userName}</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 ">
            <div className="group">
              <input
                value={onchageInput.values.Email}
                type="email"
                required
                name="Email"
                onChange={handleChange}
                // onBlur={handleBlur}
              />
              <span className="highlight" />
              <span className="bar" />
              <label>Email</label>
              <span className="text-danger">{onchageInput.error.Email}</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6 ">
            <div className="group">
              <input
                value={onchageInput.values.password}
                type="password"
                required
                name="password"
                onChange={handleChange}
                // onBlur={handleBlur}
              />
              <span className="highlight" />
              <span className="bar" />
              <label>Password</label>
              <span className="text-danger">{onchageInput.error.password}</span>
            </div>
          </div>
          <div className="col-6">
            <div className="group">
              <input
                value={onchageInput.values.passwordConfirm}
                type="password"
                required
                name="passwordConfirm"
                onChange={handleChange}
                // onBlur={handleBlur}
              />
              <span className="highlight" />
              <span className="bar" />
              <label>passwordConfirm</label>
              <span className="text-danger">
                {onchageInput.error.passwordConfirm}
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 ">
            <div className="group">
              <button className="btn btn-dark text-light w-100 p-2">
                XÁC NHẬN
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BaiTapForm;
