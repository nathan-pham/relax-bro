import { Link } from "react-router-dom";
import PrimaryButton from "@/components/Button/PrimaryButton";

const Onboarding = () => {
    return (
        <div className="h-screen w-screen grid place-items-center">
            <div className="max-w-3xl text-center">
                <h1 className="text-5xl text-blue-600">Let's get started.</h1>
                <p className="mt-5 text-lg text-gray-700">
                    How do you normally sit? We'll warn you whenever you deviate
                    from this position (getting to close to the screen, for
                    example).
                </p>

                <div className="mt-10">
                    <Link to="/onboarding/video">
                        <PrimaryButton text="Ok." />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Onboarding;
