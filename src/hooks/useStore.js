import create from "zustand";

const useStore = create((set) => ({
    alarmMethod: 0,
    setAlarmMethod: (alarmMethod) => set((state) => ({ alarmMethod })),
}));

export default useStore;
