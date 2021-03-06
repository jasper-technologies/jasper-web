import Button from "components/Button"
import Input from "components/Input"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"

const Login = () => {


    const { register, handleSubmit } = useForm()
    const [ loading, setLoading ] = useState(false)

    const onSubmit = (data:any) => {
        setLoading(true)
        console.log(data)
    }

    return(
        <div className="login text-center mt-24 lg:mt-52">
            <h3>Welcome Back!</h3>
            <p className="text-grey_text my-4" >We've missed you. Sign In to access <br /> your account</p>
            <hr className="w-2/3 mx-auto my-12" />

            <form className="text-left mt-10 max-w-[450px] mx-auto relative" onSubmit={handleSubmit(onSubmit)}>
                <Input 
                    placeholder="Enter your email" 
                    name="email" 
                    label="Email" 
                    register={register} 
                    required />

                <Input 
                    name="password" 
                    placeholder="Enter your password" 
                    type="password" 
                    label="Password" 
                    register={register} 
                    required />
                    
                <p className="-mt-6 absolute right-0 cursor-pointer text-grey_text hover:text-primary" > <Link to='/forgot_password'>Forget password?</Link> </p>


                <Button title="Sign In" loading={loading} />
            </form>
        </div>
    )
}

export default Login