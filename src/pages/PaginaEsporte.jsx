import React from "react";
import "./PaginaInicial.css"
import { useState } from 'react';
import tomate from '../assets/siriguela.png';
import roma from '../assets/roma.png';
import pera from '../assets/pera.png';
import mamao from '../assets/mamao.png';
import manga from '../assets/manga.png';
import morango from '../assets/morango.png';
import { Link } from 'react-router-dom';

const PaginaTerror = () => {
        const [isOpen, setIsOpen] = useState({
                genero: true,
                plataformas: true,
                postagem: true,
                status: true,
        });
        const toggleList = (section) => {
                setIsOpen({ ...isOpen, [section]: !isOpen[section] });
        };
        return (
                <div className="app">
                        <head>
                                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet" />
                        </head>
                        <header className="header">
                                <div className="logo"><img src="https://via.placeholder.com/20" /></div>
                                <nav className="nav">
                                        <a href="#home" style={{ fontSize: '40px' }}>Início</a>
                                        <a href="#games" style={{ fontSize: '40px' }}>Games</a>
                                        <a href="#support" style={{ fontSize: '40px' }}>Suporte</a>
                                </nav>
                                <div className="search"><i className="fas fa-search"></i>
                                        <input type="text" placeholder="Search..." />
                                        <button className="login-btn"><i className="fas fa-user-circle"></i>Log In</button>
                                </div>
                        </header>


                        <main>
                                <section className="D">
                                        <div>
                                                <h1 onClick={() => toggleList('genero')}>
                                                        <span className={`triangle ${isOpen.genero ? 'open' : ''}`}></span>
                                                        Gênero
                                                </h1>
                                                {isOpen.genero && (
                                                        <>
                                                                <a href="" style={{ margin: '3px 10px', padding: '0' }}><i className="fas fa-gamepad"></i>Terror</a>
                                                                <a href="" style={{ margin: '3px 10px', padding: '0' }}><i className="fas fa-gamepad"></i>Esporte</a>
                                                                <a href="" style={{ margin: '3px 10px', padding: '0' }}><i className="fas fa-gamepad"></i>Aventura</a>
                                                                <a href="" style={{ margin: '3px 10px', padding: '0' }}><i className="fas fa-gamepad"></i>Educacional</a>
                                                                <Link to={'/Sobrevivencia'}><a href="" style={{ margin: '3px 10px', padding: '0' }}><i className="fas fa-gamepad"></i>Sobrevivência</a></Link>
                                                                <Link to={'/Cartas'}><a href="" style={{ margin: '3px 10px', padding: '0' }}><i className="fas fa-gamepad"></i>Jogo de cartas</a></Link>
                                                        </>
                                                )}
                                                <h1 onClick={() => toggleList('plataformas')}>
                                                        <span className={`triangle ${isOpen.plataformas ? 'open' : ''}`}></span>
                                                        Plataformas
                                                </h1>
                                                {isOpen.plataformas && (
                                                        <>
                                                                <Link to={'/Windows'}><a href="" style={{ margin: '3px 10px', padding: '0' }}><i className="fab fa-windows"></i>Windows</a></Link>
                                                                <a href="" style={{ margin: '3px 10px', padding: '0' }}><i className="fab fa-apple"></i>Mac OS</a>
                                                                <a href="" style={{ margin: '3px 10px', padding: '0' }}><i className="fab fa-android"></i>Android</a>
                                                                <a href="" style={{ margin: '3px 10px', padding: '0' }}><i className="fab fa-apple"></i>Ios</a>
                                                        </>
                                                )}
                                                <h1 onClick={() => toggleList('postagem')}>
                                                        <span className={`triangle ${isOpen.postagem ? 'open' : ''}`}></span>
                                                        Postagem
                                                </h1>
                                                {isOpen.postagem && (
                                                        <>
                                                                <a href="" style={{ margin: '3px 10px', padding: '0' }}><i className="far fa-clock"></i>Hoje</a>
                                                                <a href="" style={{ margin: '3px 10px', padding: '0' }}><i className="far fa-clock"></i>Essa semana</a>
                                                                <a href="" style={{ margin: '3px 10px', padding: '0' }}><i className="far fa-clock"></i>Esse mês</a>
                                                        </>
                                                )}
                                                <h1 onClick={() => toggleList('status')}>
                                                        <span className={`triangle ${isOpen.status ? 'open' : ''}`}></span>
                                                        Status
                                                </h1>
                                                {isOpen.status && (
                                                        <>
                                                                <a href="" style={{ margin: '3px 10px', padding: '0' }}><i className="fas fa-bolt"></i>Desenvolvido</a>
                                                                <a href="" style={{ margin: '3px 5px', padding: '0' }}><i className="fas fa-play"></i>Desenvolvendo</a>
                                                        </>
                                                )}
                                        </div>
                                </section>
                                <section className="games-section">
                                        <div className="S">
                                                <img src={siriguela} alt="Wheelchair Basktball" />
                                                <a href="">Wheelchair Basktball</a>
                                        </div>
                                        <div className="S">
                                                <img src={roma} alt="Cage fight" />
                                                <a href="">Cage fight</a>
                                        </div>
                                        <div className="S">
                                                <img src={pera} alt="College Slam" />
                                                <a href="">College Slam</a>
                                        </div>
                                        <section className="games-section1">
                                                <div className="S">
                                                        <img src={mamao} alt="Football Drama" />
                                                        <a href="">Football Drama</a>
                                                </div>
                                                <div className="S">
                                                        <img src={manga} alt="Skatebird" />
                                                        <a href="">Skatebird</a>
                                                </div>
                                                <div className="S">
                                                        <img src={morango} alt="Super video Golf" />
                                                        <a href="">Super video Golf</a>
                                                </div>
                                        </section>
                                </section>
                        </main></div>
        );
};
export default PaginaTerror;