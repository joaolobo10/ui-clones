import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";

function App() {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".c", {
      scrollTrigger: {
        trigger: ".container",
        pin: true, // pin the trigger element while active
        start: "top top", // when the top of the trigger hits the top of the viewport
        end: "+=800", // end after scrolling 500px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        snap: {
          snapTo: "labels", // snap to the closest label in the timeline
          duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
          delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
          ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
        },
      },
      x: 400,
      rotation: 360,
      duration: 3,
    });
  });

  return (
    <>
      <div className="pai">
        <div className="box a">a</div>
        <div className="box b">b</div>
        <div className="box c">c</div>
      </div>
    </>
  );
}

export default App;
