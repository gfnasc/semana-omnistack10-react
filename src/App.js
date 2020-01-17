import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>

          <div className="input-block">
            <label htmlFor="username_github">Usuário do Github</label>
            <input name="username_github" id="username_github" />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/20971282?s=460&v=4" alt="Guilherme Nascimento"/>
              <div className="user-info">
                <strong>Guilherme Nascimento</strong>
                <span>PHP, React, Vuejs</span>
              </div>
            </header>
            <p>Desenvolvedor Web na agência Ataque Propaganda</p>
            <a href="https://github.com/gfnasc">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/20971282?s=460&v=4" alt="Guilherme Nascimento"/>
              <div className="user-info">
                <strong>Guilherme Nascimento</strong>
                <span>PHP, React, Vuejs</span>
              </div>
            </header>
            <p>Desenvolvedor Web na agência Ataque Propaganda</p>
            <a href="https://github.com/gfnasc">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/20971282?s=460&v=4" alt="Guilherme Nascimento"/>
              <div className="user-info">
                <strong>Guilherme Nascimento</strong>
                <span>PHP, React, Vuejs</span>
              </div>
            </header>
            <p>Desenvolvedor Web na agência Ataque Propaganda</p>
            <a href="https://github.com/gfnasc">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/20971282?s=460&v=4" alt="Guilherme Nascimento"/>
              <div className="user-info">
                <strong>Guilherme Nascimento</strong>
                <span>PHP, React, Vuejs</span>
              </div>
            </header>
            <p>Desenvolvedor Web na agência Ataque Propaganda</p>
            <a href="https://github.com/gfnasc">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
