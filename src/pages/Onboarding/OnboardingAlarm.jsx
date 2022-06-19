import { Link } from "react-router-dom";

import PageTransition from "@/components/animations/PageTransition";
import AlarmMethods from "@/components/pages/Onboarding/AlarmMethods";
import { Button } from "@/components/atoms";

const OnboardingAlarm = () => {
    return (
        <PageTransition>
            <div className="grid place-items-center h-screen">
                <div className="max-w-3xl">
                    <h1 className="text-5xl text-blue-600">
                        How would you like to be notified?
                    </h1>

                    <AlarmMethods />

                    <div className="mt-6 float-right">
                        <Link to="/onboarding/finished">
                            <Button>Sounds good.</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

export default OnboardingAlarm;
