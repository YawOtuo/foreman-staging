import { HTMLInputTypeAttribute, useState } from "react";

interface FormInputProps {
    label: string;
    type: HTMLInputTypeAttribute;
    placeholder: string;
    value: string;
    name?: string;
    required?: boolean;
}

export default function FormInput({ label, type, placeholder, value, name, required }: FormInputProps) {
    const [_value, setValue] = useState(value);



    return (
        <div className="w-full max-w-[600px] flex flex-col items-start gap-1">
            <label htmlFor={label}>{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                value={_value}
                onChange={(e) => setValue(e.target.value)}
                className="w-full p-2 border border-gray-300"
                name={name}
                required={required}
            />
        </div>
    );
}