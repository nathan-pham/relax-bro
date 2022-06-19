import create from "zustand";

const useStore = create((set) => ({
    alarmMethod: 0,
    setAlarmMethod: (alarmMethod) => set((state) => ({ alarmMethod })),

    faceDistance: 60,
    setFaceDistance: (faceDistance) => set((state) => ({ faceDistance })),
}));

export default useStore;
