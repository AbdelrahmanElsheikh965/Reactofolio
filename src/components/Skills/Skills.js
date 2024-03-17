import React from "react";

function Skills() {

    const skillsArray_1 = [
        {title: 'C/C++', ratio: '60',  style: {width: '60%', height: '8px'}},
        {title: 'PHP', ratio: '80'   , style: {width: '80%', height: '8px'}},
        {title: 'Java', ratio: '100' , style: {width: '100%', height: '8px'}},
        {title: 'Js', ratio: '70'    , style: {width: '70%', height: '8px'}},
    ];

    const skillsArray_2 = [
        {title: 'Nodejs', ratio: '65',  style: {width: '65%', height: '8px'}},
        {title: 'Laravel', ratio: '85',  style: {width: '85%', height: '8px'}},
        {title: 'Nginx', ratio: '60',  style: {width: '60%', height: '8px'}},
        {title: 'Docker', ratio: '70',  style: {width: '70%', height: '8px'}},
    ];

  return <section id="skills" class="skills">
  <div class="skill-content">
      <div class="section-heading text-center">
          <h2>skills</h2>
      </div>
      <div class="container">
          <div class="row">
              <div class="col-md-6">
                  <div class="single-skill-content">
                    
                    {skillsArray_1.map((skill) => (
                         <div class="barWrapper">
                         <span class="progressText">{skill.title}</span>
                         <div class="single-progress-txt">
                             <div class="progress ">
                                 <div class="progress-bar" role="progressbar" aria-valuenow="90" 
                                       aria-valuemin="10" aria-valuemax="100" style={skill.style} >
                                 </div>
                             </div>
                             <h3>{skill.ratio}%</h3>	
                         </div>
                     </div> 
                    ))}

                     

                  </div>
              </div>
              <div class="col-md-6">
                  <div class="single-skill-content">

                  {skillsArray_2.map((skill) => (
                         <div class="barWrapper">
                         <span class="progressText">{skill.title}</span>
                         <div class="single-progress-txt">
                             <div class="progress ">
                                 <div class="progress-bar" role="progressbar" aria-valuenow="90" 
                                       aria-valuemin="10" aria-valuemax="100" style={skill.style} >
                                 </div>
                             </div>
                             <h3>{skill.ratio}%</h3>	
                         </div>
                     </div> 
                    ))}
                      
                  </div>
              </div>
          </div>
      </div>		
  </div>
</section>;
}

export default Skills;