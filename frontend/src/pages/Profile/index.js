import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import './styles.css';
import '../../global.css';

import logoImg from '../../assets/logo.svg';

export default function Profile() {
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Logo Be the Hero" />
                <span>Bem Vinda, APAD</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>

            <h1>Casos Cadastrados</h1>

            <ul>
                <li>
                    <strong>CASO:</strong>
                    <p>caso teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>valor teste</p>

                    <button>
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>caso teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>valor teste</p>

                    <button>
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>caso teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>valor teste</p>

                    <button>
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>caso teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>valor teste</p>

                    <button>
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
            </ul>
        </div>
    );
}