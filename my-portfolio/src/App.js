import Header from './components/header.js'
import Project from './components/project.js'
import './styles.css'

function App() {
  return (
    <body style = {{backgroundColor: "#D3D0CB"}}>
      <div className="App">
        <Header />
        <Project name = "Website Capa x Capa" text = "Front end development. Use of React, HTML and CSS. This project isn't finished yet!" />
      </div>
    </body>
  );
}

export default App;
