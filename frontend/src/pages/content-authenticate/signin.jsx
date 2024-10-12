import MasterLayout from "../layouts/master";
import { useParams } from "react-router-dom";
import SignupForm from "./forms/signupForm";
import SigninForm from "./forms/signinForm";

const SigninView = () => {

    const { type } = useParams();
    
    return (
        <MasterLayout title={type === "signup" ? 'Sign Up' : 'Sign In'} Navlight={true}>
            <div className={`h-screen w-full flex items-center  xs:flex-col  sm:flex-col  md:flex-colr lg:flex-col `}>
                <div className="w-1/2 h-full flex items-center justify-center p-4 xs:w-full sm:w-full md:w-full lg:w-full">
                    <div className="w-full max-w-[600px] bg-white px-4 py-4 rounded-md xs:w-full xs:py-0 xs:px-0 lg:pt-0">
                        {type === "signup" ? <SignupForm /> : <SigninForm />}
                    </div>
                </div>

                <div className="w-1/2 h-full px-4 py-4 xs:hidden sm:hidden md:hidden lg:hidden">
                    <div className="bg-primary h-full w-full rounded-lg ">

                    </div>
                </div>

            </div>
        </MasterLayout>
    );
};

export default SigninView;