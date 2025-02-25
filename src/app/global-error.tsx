"use client"

export default function Error({
    error,
    reset,
}:{
    error:Error;
    reset: () => void;
}){
    return <>
        <div className="flex flex-col gap-2">
            <h2>{error.message}</h2>
            <button onClick={reset} className="bg-slate-800 hower:opacity-50">
                try Again
            </button>
        </div>
    </>
}