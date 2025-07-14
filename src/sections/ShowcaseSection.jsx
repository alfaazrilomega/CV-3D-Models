import { useRef } from "react"
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);
    
    useGSAP(()=>{
        
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];
        projects.forEach((card, index)=>{
            gsap.fromTo(
                card,
                {
                    y:50, opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100',
                    }
                }
    
            )
        })
        gsap.fromTo(
            sectionRef.current,
            {opacity: 0 }, 
            {opacity: 1, duration: 1.5}
        )
    },[]);
    return (
        <section id="work" ref={sectionRef} className='app-showcase' >
        <div className='w-full'>
            <div className='showcaselayout'>
                {/* LEFT */}
                <div className='first-project-wrapper' ref={project1Ref}>
                    <div className='image-wrapper'>
                        <img src="/images/UI/Sign Up Page.png" alt="APP VILLAGE" />
                    </div>
                    <div className="text-content">
                        <h2>
                            Community Engagement App for Village Leaders
                        </h2>
                        <p className="text-white-50 md:text-xl">
                            An app built with React Native, Supabese & TailwindCSS for a fast, user-friendly experience.
                        </p>
                    </div>
                </div>
                {/* RIGTH */}
                <div className="project-list-wrapper overflow-hidden">
                    <div className="project" ref={project2Ref}>
                        <div className="image-wrapper bg-[#ffefdb]">
                            <img src="/images/UI/Home Section (Layout 2).png" alt="APP 3R"/>
                        </div>
                        <h2> A Personal Site That Supports Going green and Doing Good </h2>
                    </div>

                    <div className="project" ref={project3Ref}>
                        <div className="image-wrapper bg-[#ffe7eb]">
                            <img src="/images/UI/SkinTiq.jpeg" alt="APP STORE"/>
                        </div>
                        <h2>A Digital Task From School, Turned Into Something More</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ShowcaseSection