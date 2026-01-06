import React, {useState} from "react"
import OtpInput from "react-otp-input"


const About = () =>{
    const [otp,setOtp] = useState("");
    return(
        <div>This is the about Page
            <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={4}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input className="border" {...props} />}
      inputStyle={"border p-5 rounded ml-3"}
    />
        </div>
    )
}

export default About