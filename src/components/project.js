import React, {useState, useRef, useEffect} from "react"
import "../sass/components/project.scss"
import buttons from "../sass/components/buttons.module.scss"
import 'font-awesome/css/font-awesome.min.css'





const Project = ({project}) => {

  const [visible, setVisible] = useState(false)
  const toggle = () => setVisible(!visible)

  function useOutsideAlerter(ref) {
    // Thanks to Ben Bud
    // https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          //alert("You clicked outside of me!");
          setVisible(false)
        }
      }
      function escKeyPressed(event){
        if(event.keyCode === 27){
          setVisible(false)
        }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", escKeyPressed)
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }


  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);


  const techs = project.tech.map((tech) =>
    <li className="projectTech">{tech.name}</li>
  )

  return (
    <>
       <div className="flipCard">
        <div className="flipCardInner">
          <div className="flipCardFront">
            <h3>{project.title}</h3>
            <img src={project.img} alt="project overview" />
          </div>
          <div className="flipCardBack">
            <p>{project.info}</p>
            <button className={buttons.standardButton} onClick={toggle}>View Project</button>
          </div>
        </div>
      </div> 

      {visible ? 
        (<div>
          <div className="fadeBackground">
            <div ref={wrapperRef} className="projectCard">
              <div className="imagePosition">
                <img className="projectImage" src={project.img} alt="project overview" />
              </div>
              <div className="projectInformationPosition">
                <h3 class="projectName">{project.title}</h3>
                <ul class="projectTechs">
                  {techs}
                </ul>
                <div class="projectAboutLabel">About</div>
                <div class="projectInfo">
                  <p>{project.info}</p>
                  <a class={buttons.standardButton} target="_blank" href={project.src}><i className="fa fa-code"></i> View Code</a>
                </div>
              </div>
            </div>
          </div>
        </div>) : null
      }
    </>
  );
};

export default Project;