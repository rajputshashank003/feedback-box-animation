import { useRef } from "react";
import type { FeedbackFormProps } from "./types"
import gsap from 'gsap';
import CustomBounce from "gsap/CustomBounce";

gsap.registerPlugin(CustomBounce);

const FeedbackForm = ({ 
    onSubmit,
    size,
}: FeedbackFormProps) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const textBox = useRef<HTMLDivElement | null>(null);
    const redDot = useRef<HTMLDivElement | null>(null);
    const feedbackHead = useRef<HTMLDivElement | null>(null);
    const textareaBox = useRef<HTMLDivElement | null>(null);

    const handleFeedbackClick = () => {
        const gtl = gsap.timeline({});
        gtl
            .to(textBox.current, {
                opacity: 0,
                duration: '0.2',
            }, 'a1')
            .to(containerRef.current, {
                height: '200px',
                duration: '0.5',
                ease: 'power2.out',
                transformOrigin: 'top',
                width: "300px",
                borderRadius: '12px',
            }, 'a1')
            .fromTo(redDot.current, {
                bottom: '9.5px',
                left: '0',
                duration: 0,
            }, {
                height: '8px',
                width: '8px',
                top: '5px',
                left: '0px',
                duration: '1',
                ease: 'bounce.out',
                delay: '0.04'
            }, 'a1')
            .to(feedbackHead.current, {
                delay:'0.04',
                opacity: 1,
            }, 'a1')
            .to(textareaBox.current, {
                height: 'calc(100% - 40px)',
                width: 'calc(100% - 15px)',
                opacity: 1,
                duration: "0.5",
                ease: 'ease.out',
                transformOrigin: 'top left',
            }, 'a1')
    }

    return (
        <div 
            ref={containerRef}
            onClick={handleFeedbackClick}
            className="bg-zinc-900 border-[1px] border-neutral-600 shadow-[0px_0px_3px] shadow-zinc-950 cursor-pointer w-[160px] h-[34px] rounded-[18px] px-[8px] "
        >
            <div className="flex justify-between items-start pt-[8px] h-[32px]">
                <div className="flex gap-[6px] relative items-center h-full justify-start ">
                    <div ref={redDot} className="bg-red-600 bottom-[9px] absolute h-[14px] w-[14px] rounded-full" />
                    <span ref={textBox} className="mono cursor-pointer absolute w-24 left-[18px] top-[-0.5px] text-[12px] text-zinc-300 font-[600] ">
                        Text Box
                    </span>
                    <span ref={feedbackHead} className="mono cursor-pointer opacity-0 absolute w-24 left-[14px] top-[0px] text-[12px] text-zinc-300 font-[600] ">
                        Feedback
                    </span>
                </div>
                <span className="mono text-[12px] text-zinc-600 font-[500] ">
                    Feedback
                </span>
            </div>
            <textarea 
                ref={textareaBox}
                placeholder="Your feedback..."
                style={{
                    height: '0',
                    width: 'calc(100% - 15px)'
                }}
                className=" opacity-0 absolute bottom-[6px] bg-zinc-800 border-[1px] border-neutral-600 rounded-[8px] px-[8px] py-[6px] text-zinc-300 resize-none focus:outline-none focus:border-zinc-500 font-mono text-[12px] "
            />
        </div>
    )
}

export default FeedbackForm