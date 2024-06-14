
export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="flex w-full min-h-screen bg-[#f5f5f5]" >
            <div className="left w-[30%] min-h-screen bg-[#2D3B48]">

            </div>
            <div className="right w-[70%] min-h-screen">
                <div className="flex flex-col gap-4 h-full w-full items-center justify-center">
                    <div>
                        <div className="text-4xl">
                            <h2 className="text-primary-100 font-bold ">Shop.</h2>
                            <p>Build with <span className="text-primary-100 underline font-black">Foreman</span> today</p>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}