export default function WidthDiv({height="4/6", content}: any) {
    return(
        <>
            <div className={`w-screen h-4/6 sm:h-screen`}>
                <div className={`container mx-auto h-${height}`}>
                    {content}
                </div>
            </div>
        </>
    )
}
