import React from 'react';
import { Link } from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';

import './styles.css';
import '../../global.css';

import logoImg from '../../assets/logo.svg';
import herosImg from '../../assets/heroes.png';

export default function Logon() {
    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Logo Be The Hero" />

                <form>
                    <h1>Faça seu Logon</h1>

                    <input placeholder="Seu ID" />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            
            <img src={herosImg} alt="Uma desenho de pessoas abra�as, de costas, pulando" />
        </div>
    );
}