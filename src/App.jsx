import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Onboarding, {
    OnboardingVideo,
    OnboardingAlarm,
    OnboardingFinished,
} from "@/pages/Onboarding/";

const Demo = () => {
    return (
        <div>
            <Link to="/onboarding">Onboarding</Link>
        </div>
    );
};

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Demo />} />
                <Route path="/onboarding" element={<Onboarding />} />
                <Route path="/onboarding/video" element={<OnboardingVideo />} />
                <Route path="/onboarding/alarm" element={<OnboardingAlarm />} />
                <Route
                    path="/onboarding/finished"
                    element={<OnboardingFinished />}
                />
            </Routes>
        </Router>
    );
};

export default App;
