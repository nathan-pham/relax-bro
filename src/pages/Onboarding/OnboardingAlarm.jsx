import { Link } from "react-router-dom";

import PageTransition from "@/components/animations/PageTransition";
import PrimaryButton from "@/components/button/PrimaryButton";
import AlarmButton from "@/components/pages/Onboarding/AlarmButton";

import FilledPin from "@/assets/icons/FilledPin";
import Notification from "@/assets/icons/Notification";
import Plus from "@/assets/icons/Plus";

const OnboardingAlarm = () => {
    return (
        <PageTransition>
            <div className="grid place-items-center h-screen">
                <div className="max-w-3xl">
                    <h1 className="text-5xl text-blue-600">
                        How would you like to be notified?
                    </h1>

                    <div className="grid grid-cols-3 mt-10 gap-6">
                        <AlarmButton
                            icon={<Notification />}
                            text="idk pretty generic"
                        />

                        <AlarmButton
                            icon={<FilledPin />}
                            text="effective but annoying af"
                        />

                        <AlarmButton icon={<Plus />} text="upload your own" />
                    </div>

                    <div className="mt-6 float-right">
                        <Link to="/onboarding/finished">
                            <PrimaryButton text="Sounds good." />
                        </Link>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

export default OnboardingAlarm;
