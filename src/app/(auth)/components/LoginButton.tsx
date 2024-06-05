
interface LoginButtonProps {
    onClick?: () => void;
    type: "button" | "submit" | "reset";
    name: string;
    className?: string;
    icon?: React.ReactNode;
}


export default function LoginButton({ onClick, type, name, className, icon }: LoginButtonProps) {
    return (
        <button onClick={onClick} type={type} className={`p-3 w-full bg-slate-500 text-lg ${className} text-white flex items-center justify-center gap-2`}>
            {icon && <span className="mr-2">{icon}</span>}
            {name}
        </button>
    );
}