import Header from './components/header.js'
import Project from './components/project.js'
import './styles.css'

function App() {
  return (
    <body>
      <div className="App">
        <Header />
        <div className='div-principal'>
          <Project name = "Website Capa x Capa" 
            text = "Front end development. Use of React, HTML and CSS. This project was created for a social initiative called Capa x Capa, we are still working on it!" />
        </div>
      </div>
    </body>
  );
}

export default App;
