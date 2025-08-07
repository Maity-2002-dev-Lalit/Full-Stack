import React from 'react';
import { useForm } from "react-hook-form";
import "./inputform.css"
 

const InputForm = ({ setCityError,selectedCity  }) => {

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
          
        
        if (!selectedCity) {
            setCityError("Please Select Your City first");
        }
           

console.log("Form Data:", data);
        }

         
    

    return (
        <div className='container-box'>
            <form onSubmit={handleSubmit(onSubmit)} className='d-flex align-items-start gap-2' id='form'>
            <div className="boxes"> 
                

                <input
                    className="form-control"

                    type="datetime-local"
                    placeholder='Enter date'
                    {...register("start", {
                        required: "Please select receive date",
                        min: {
                            value: "2023-01-01T00:00",
                            message: "Date is too early",
                        },
                        max: {
                            value: "2025-12-31T23:59",
                            message: "Date exceeds allowed range",
                        },
                    })}
                    id='input'
                />
                 {errors.start && (
                <div style={{ color: "red" }} className='"error-msg"'>{errors.start.message}</div>)}
</div>
<div className="bixt"> 
<label htmlFor="text">Select your Ride End Date</label>
                <input
                    className="form-control"

                    type="datetime-local"
                    placeholder='Enter date'
                    {...register("end", {
                        required: "Please select Ride End date",
                        min: {
                            value: "2023-01-01T00:00",
                            message: "Date is too early",
                        },
                        max: {
                            value: "2025-12-31T23:59",
                            message: "Date exceeds allowed range",
                        },
                    })}
                    id='input'
                />
                {errors.end && (
                <div style={{ color: "red" }} className='"error-msg"'>{errors.end.message}</div>)}
                </div>

                    <input type="submit" className='btn btn-outline-primary  btn-sm' id='submitbutton' />
                
            </form>
            <br />
         
             

        </div>
    );
};

export default InputForm;



