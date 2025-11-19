# Feedback Form

## Description
This project is an animated feedback form.

## Live Demo
You can view the live version of the project at [feedback-animated-box.vercel.app](https://feedback-animated-box.vercel.app)

## Features
- Smooth animations
- Responsive design
- Easy to integrate

## Installation
To run this project locally:
 Copy and paste the command below into your terminal:

```bash
# using npm
npm install feedback-animated-box
``` 
## Usage

- Component - App.tsx
```bash
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

export default App;
