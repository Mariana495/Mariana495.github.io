import '../styles.css'
import Button from './button.js'
import imageProject from '../media/capaxcapa-project.PNG'

function Project(props) {
    return (
        <div class = "div-project">
            <div> 
                <h2> {props.name} </h2> <br/>
                <p class = "texto-izq"> {props.text} </p>
                <Button onClick={event => window.location.href='{props.link}'}/>

            </div>
            <img class="img-project" src={imageProject}/>
        </div>
    );
  }
  
  export default Project;