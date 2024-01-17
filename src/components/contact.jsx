import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    
    {/* replace below with your own Service ID, Template ID and Public Key from your EmailJS account */ }
    
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div id="footer">
        <div className="container text-center">
          <h4>✉️ cornell.exam@gmail.com</h4>
          <p>
            Disclaimer: Cornell Exam Schedule Viewer is an independent service NOT officially affiliated with Cornell University. It aims to provide accurate exam schedule information for Cornell students by parsing data from the registrar's website. However, it is NOT a substitute for official announcements by the university or instructors. Users should NOT rely solely on this service for exam-related information. In case of discrepancies between information by this service and official university communications, the information issued by Cornell University shall prevail. For any issues or concerns, users are advised to promptly contact the developer at cornell.exam@gmail.com.
          </p>
        </div>
      </div>
    </div>
  );
};
