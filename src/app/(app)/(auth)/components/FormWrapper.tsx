"use client";
interface FormWrapperProps {
    children: React.ReactNode;
    title: string;
    description: string;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    className?: string;
}

export default function FormWrapper({ children, title, description, onSubmit, className }: FormWrapperProps) {
    return (
        <div className="w-full flex flex-col items-center justify-center gap-10">
            <form action="#" onSubmit={(e) => onSubmit(e)} className={className} method="POST">
                <h1 className="text-4xl font-bold">{title}</h1>
                <p className="text-lg">{description}</p>
                {children}
            </form>
        </div>
    );
}