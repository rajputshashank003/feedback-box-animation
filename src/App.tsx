import FeedbackForm from "./components/FeedbackForm"

const App = () => {
    const handleSubmit = (feedback: string) => { 
        console.log("Feedback submitted:", feedback)
    }
    
    return (
        <div className="bg-zinc-800 h-screen w-screen relative">
            <div className="absolute bottom-[50%] left-[50%] -translate-x-[50%] ">
                <FeedbackForm onSubmit={handleSubmit} />
            </div>
        </div>
    )
}

export default App