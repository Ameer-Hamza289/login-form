import React from "react";
import Header from "../Components/Header";
// import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';


const UersList = () => {
  const profilePIcDefault =
    "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg";
  return (
    <div>
      <Header />
      <div className="container content">
        <div className="border mt-4 p-4">
          <h3 className="text-center bg-info p-2 mb-3">
            Welcome To User Management System
          </h3>
          <div className="row">
            <div className="col-md-4">
              <div className="d-flex flex-column align-items-center ">
                <img
                  src={
                    localStorage.getItem("Img")
                      ? localStorage.getItem("Img")
                      : profilePIcDefault
                  }
                  alt="profile_pic"
                  className="img-thumbnail"
                  height={200}
                  width={200}
                />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div className="ms-4">
                <h4>
                  Name :{" "}
                  {localStorage.getItem("Name")
                    ? localStorage.getItem("Name")
                    : "NA"}
                </h4>
                <h4>
                  Email :{" "}
                  {localStorage.getItem("Email")
                    ? localStorage.getItem("Email")
                    : "NA"}
                </h4>
                <h4>
                  Gender :{" "}
                  {localStorage.getItem("Gender")
                    ? localStorage.getItem("Gender")
                    : "NA"}
                </h4>
                <p>
                  Accepted Terms And Conditions :{" "}
                  {localStorage.getItem("Terms") ? "YES" : "No"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UersList;
