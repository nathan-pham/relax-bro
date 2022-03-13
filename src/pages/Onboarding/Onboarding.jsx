import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import PrimaryButton from "@/components/button/PrimaryButton";
import PageTransition from "@/components/animations/PageTransition";

const Onboarding = () => {
    return (
        <PageTransition>
            <div className="h-screen w-screen grid place-items-center">
                <div className="max-w-3xl text-center">
                    <h1 className="text-5xl text-blue-600">
                        Let's get started.
                    </h1>
                    <p className="mt-5 text-lg text-gray-700">
                        How do you think you should sit? Ideally, your face
                        should be 20 - 40 inches away from the monitor. We'll
                        let you whenever you deviate from this position.
                    </p>

                    <div className="mt-10">
                        <Link to="/onboarding/video">
                            <PrimaryButton text="Ok." />
                        </Link>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

export default Onboarding;
