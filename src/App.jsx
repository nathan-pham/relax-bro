import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages
import Onboarding, {
    OnboardingVideo,
    OnboardingAlarm,
    OnboardingFinished,
} from "@/pages/Onboarding/";

import Redirect from "@/pages/Redirect";
import Dashboard from "@/pages/Dashboard";

const App = () => {
    return (
        <AnimatePresence>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Redirect />} />
                    <Route path="dashboard" element={<Dashboard />} />
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
