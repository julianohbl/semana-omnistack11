import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import LogoImg from '../../assets/logo.svg';

export default function NewIncident() {
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={LogoImg} alt="Be The Hero" />

                    <h1>Cadastrar novo incidente</h1>
                    <p>Descreva o caso para encontrar um herói para resolver isso.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#e02041" />
                        Voltar para home
                </Link>
                </section>

                <form>
                    <input type="text" placeholder="Título do caso" />
                    <textarea placeholder="Descrição" />
                    <input type="text" placeholder="Valor em reais" />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}