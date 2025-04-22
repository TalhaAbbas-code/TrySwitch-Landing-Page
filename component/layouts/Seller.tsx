import React from 'react'
import AnimatedSection from "../AnimationSection";
import DownloadButton from "../DownloadButton";

const Seller = () => {
 return (
   <div className="mt-10  section-padding    ">
     <AnimatedSection
       title="For Seller"
       description="Beneath the quiet glow of the evening sky, the world seemed to pause in a moment of calm. Trees swayed gently as if whispering secrets to the wind. A distant dog barked, breaking the stillness with a touch of life. Everything felt both familiar and strangely magical, like a memory you can almost remember.Beneath the quiet glow of the evening sky, the world seemed to pause in a moment of calm. Trees swayed gently as if whispering secrets to the wind. A distant dog barked, breaking the stillness with a touch of life. Everything felt both familiar and strangely magical, like a memory you can almost remember."
       videoSrc="/videos/investor-animation.webm"
       reverse={true}
     >
       <div className=" mt-10">
         <DownloadButton />
       </div>
     </AnimatedSection>
   </div>
 );
}

export default Seller