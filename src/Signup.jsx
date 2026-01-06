import { Formik, Form, Field, ErrorMessage  } from "formik"
import * as Yup from "yup"


const Signup = () =>{
    const initialValues ={
        name:"",
        age:"",
        email:"",
        phoneNumber:"",
        password:"",
        confirmPassword:""
    }
    const phoneRegex = /^(?:\+234|234|0)[1-9]\d{8,9}$/
    const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#._-])[A-Za-z\d@$!%*?&#._-]{8,}$/


    const validationSchema = Yup.object({
        name:Yup.string("name must be a string")
        .min(3,"Name must be at least three characters")
        .required("Name is required"),
        age:Yup.number("Age must be a number")
        .min(18,"Range should be 18-100")
        .max(100,"Range should be 18-100")
        .required("Age is required"),
        email:Yup.string("email must be in email format")
        .email("Invalid email format")
        .required("Email is required"),
        phoneNumber:Yup.string()
        .matches(phoneRegex, "This is not a valid number")
        .required("Phone number is required"),
        password:Yup.string("Password must be a string")
        .matches(passwordRegex,"Invalid password format")
        .required("password is required"),
        confirmPassword:Yup.string("Confirm Password must be a string")
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required("Confirm password is required")
        
        
    })
    const handleSubmit = (values) =>{
        console(values)
        alert(values)

    }
    return(
        <Formik
        initialValues={initialValues }
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        >
            <Form>
                <div className="p-5">
                    <label>Name:</label>
                    <Field className="border" name="name" type="text"/>
                    <ErrorMessage name="name" component="div"/>
                </div>
                <div className="p-5">
                    <label>Age:</label>
                    <Field className="border" name="age" type="number"/>
                    <ErrorMessage name="age" component="div"/>
                </div>
                <div className="p-5">
                    <label>Email:</label>
                    <Field className="border" name="email" type="email"/>
                    <ErrorMessage name="email" component="div"/>
                </div>
                <div className="p-5">
                    <label>Phone number::</label>
                    <Field className="border" name="phoneNumber" type="tel"/>
                    <ErrorMessage name="phoneNumber" component="div"/>
                </div>
                <div className="p-5">
                    <label>Password:</label>
                    <Field className="border" name="password" type="password"/>
                    <ErrorMessage name="password" component="div"/>
                </div>
                <div className="p-5">
                    <label>Confirm Password:</label>
                    <Field className="border" name="confirmPassword" type="password"/>
                    <ErrorMessage name="confirmPassword" component="div"/>
                </div>
                <button className="m-5  border" type="submit">Sign up</button>

            </Form>
        </Formik>
    )
}
export default Signup