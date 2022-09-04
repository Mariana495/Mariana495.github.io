import Header from './components/header.js'
import Project from './components/project.js'
import './styles.css'

function App() {
  return (
    <body>
        <Header />
        <div className='div-principal'>
          <Project name = "Website Capa x Capa" 
            image = "capaxcapa-project.PNG"
            alt = "Capa x Capa example"
            link = {event => window.location.href="https://www.w3schools.com/css/css_positioning.asp"}
            text = "Front end development. Use of React, HTML and CSS. This project was created for a social initiative called Capa x Capa, we are still working on it!" />

          <Project name = "Website Grand Tec Auto" 
            image = "gta-project.png"
            alt = "Edit user view GTA web page"
            link = {event => window.location.href="https://github.com/Mariana495/paginaVideojuego"}
            text = "Front end development. Use of Bootstrap, HTML and CSS. The web page ran on a private server and was connected to a unity powered videogame and a database." />

          <Project name = "Syntax Highlighter" 
            imagen = "syntax-highlighter-project.png"
            alt = "Input and Output sample"
            link = {event => window.location.href="https://replit.com/@CheeryChiron/ParallelRS#main.go"}
            text = "Algorithm designer and programmer. First algorithm made with Python and then translated to GoLang. Made following DFA logic." />
        </div>
    </body>
  );
}

export default App;
