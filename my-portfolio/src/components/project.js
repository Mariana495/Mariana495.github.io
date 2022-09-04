import '../styles.css'
import Button from './button.js'

function Project(props) {
    return (
        <div class = "div-project">
            <div> 
                <h2> {props.name} </h2> <br/>
                <p class = "texto-izq"> {props.text} </p>
                <Button onClick={props.link}/>

            </div>
            <img
                className='img-project'
                src={require(`../media/${props.imagen}`)}
                alt={props.alt} />
        </div>
    );
  }
  
  export default Project;