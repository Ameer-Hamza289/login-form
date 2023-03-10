import React, { useState } from "react";
// import { FaAlignCenter } from "react-icons/fa";
import { toast } from "react-toastify";
import Header from "../Components/Header";

const HomePage = () => {
  const profilePIcDefault =
    "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg";

    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [Gender, setGender] = useState('');
    const [Img, setImg] = useState();
    const [Terms, setTerms] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    if(Name===""){
      toast.error("Name field is required");
    }else if(Email===""){
      toast.error("Email field is required");
    }else if(Password===""){
      toast.error("Password field is required");
     }
     else if(Terms===false){
      toast.error("You can't proceed further unless you will accept Terms and Conditions");
    }
    else{
      localStorage.setItem("Name",Name);
      localStorage.setItem("Email",Email);
      localStorage.setItem("Password",Password);
      localStorage.setItem("Gender",Gender);
      localStorage.setItem("Terms",Terms);
      localStorage.setItem("Image",Img);
      toast.success("User Added Successfully");

    }
  };

  return (
    <>
      <Header />
      <div className="container content mt-4">
        <h5> 📝 Add New User</h5>
        <div className="row border p-4">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label">
                User Name
              </label>
              <input
                type="text"
                value={Name}
                onChange={e=>setName(e.target.value)}
                className="form-control"
                id="exampleInputName"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                value={Email}
                onChange={e=>setEmail(e.target.value)}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                value={Password}
                onChange={e=>setPassword(e.target.value)}
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            {/* radios button inpput ================== */}
            <div className="d-flex flex-row">
              Gender :
              <div className="form-check ms-2">
                <input
                  className="form-check-input"
                  type="radio"
                  defaultChecked={Gender==='Male'}
                  onClick={e=>setGender(e.target.value)}
                  name="Gender"
                  value="Male"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Male
                </label>
              </div>
              <div className="form-check ms-2">
                <input
                  className="form-check-input"
                  type="radio"
                  defaultChecked={Gender==='Female'}
                  onClick={e=>setGender(e.target.value)}
                  name="Gender"
                  value="Female"
                  id="flexRadioDefault2"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Female
                </label>
              </div>
            </div>
            <div className="form-check mt-3">
              <input
                className="form-check-input"
                type="checkbox"
                checked={Terms}
                onChange={e=>setTerms(e.target.value)}
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                I Acept Terms And Conditions
              </label>
            </div>
            <button
              type="submit"
              className="form__submit-btn"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
          {/* col-md-6 ends */}

          <div className="col-md-4 ">
            <div className="profile_section">
              <p>Select Profile Picture :</p>
              <img
                src={
                  localStorage.getItem("img")
                    ? localStorage.getItem("img")
                    : profilePIcDefault
                }
                alt="profile_pic"
                className="img-thumbnail"
                height={250}
                width={250}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
                Default file input example
              </label>
              <input className="form-control"
              value={Img}
              onChange={e=>setImg(e.target.value)}
              type="file" id="formFile" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
