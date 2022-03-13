import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Onboarding, {
    OnboardingVideo,
    OnboardingAlarm,
    OnboardingFinished,
} from "@/pages/Onboarding/";

const Demo = () => {
    return <p>Hello World</p>;
};

const App = () => {
    return (
        <AnimatePresence>
            <BrowserRouter>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Demo />} />
                    <Route path="onboarding">
                        <Route index element={<Onboarding />} />
                        <Route path="video" element={<OnboardingVideo />} />
                        <Route path="alarm" element={<OnboardingAlarm />} />
                        <Route
                            path="finished"
                            element={<OnboardingFinished />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </AnimatePresence>
    );
};

export default App;
