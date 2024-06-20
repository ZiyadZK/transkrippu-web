export default function LoginPage() {
    return (
        <div className="w-full h-screen relative overflow-hidden bg-zinc-50">
            <div className="absolute top-0 left-0 w-full flex justify-center z-[1]">
                <div className="w-[10rem] h-[10rem] md:w-[30rem] md:h-[30rem] rounded-full bg-red-500 blur-3xl md:blur-[12rem] -translate-y-[50%]"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-full flex justify-center z-[1]">
                <div className="w-[10rem] h-[10rem] md:w-[30rem] md:h-[30rem] rounded-full bg-violet-500 blur-3xl md:blur-[12rem] translate-y-[50%]"></div>
            </div>
            <div className="absolute top-0 left-0 w-full h-screen flex flex-col md:flex-row justify-between md:items-center md:justify-center z-[2]">
                <div className="w-full bg-white p-5 rounded-full md:shadow-2xl"></div>
            </div>
        </div>
    )
}