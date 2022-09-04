import '../styles.css'
import imageProject from '../media/capaxcapa-project.PNG'

function Project(props) {
    return (
        <div class = "div-principal">
            <div> 
                <h2> {props.name} </h2> <br/>
                <p class = "texto-izq"> {props.text} </p>
            </div>
            <img class="img-project" src={imageProject}/>
        </div>
    );
  }
  
  export default Project;