import PageTransition from "@/components/animations/PageTransition";

const OnboardingFinished = () => {
    return (
        <PageTransition>
            <div className="h-screen text-center grid place-items-center">
                <div className="max-3-xl">
                    <h1 className="text-blue-600 text-5xl">
                        We're finishing up some things....
                    </h1>

                    <div className="rounded-full w-full h-3 mt-10 bg-gray-200">
                        <div className="w-1/2 h-full rounded-full bg-blue-600"></div>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

export default OnboardingFinished;
