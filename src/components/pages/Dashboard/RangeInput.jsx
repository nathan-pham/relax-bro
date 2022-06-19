import { Input } from "@/components/atoms";

const RangeInput = ({ label, name, ...props }) => (
    <div className="flex items-center gap-4 w-full text-gray-500 text-lg">
        <Input type="range" id={name} name={name} {...props} />
        <label htmlFor={name}>{label}</label>
    </div>
);

export default RangeInput;
