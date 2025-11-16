import { useState } from 'react';
import './ChallengeComponent.css';

const ChallengeComponent = () => {
  const [dado1, setDado1] = useState(50);
  const [dado2, setDado2] = useState(50);
  const [resultado, setResultado] = useState(100);

  const somarValores = () => {
    const soma = Number(dado1) + Number(dado2);
    setResultado(soma);
    console.log(`A soma de ${dado1} + ${dado2} é igual a ${soma}`);
  };

  return (
    <div className="challenge-container">
      <h2>Calculadora de Soma</h2>
      <div className="input-group">
        <label htmlFor="dado1">Dado 1:</label>
        <input
          id="dado1"
          type="number"
          value={dado1}
          onChange={(e) => setDado1(e.target.value)}
          placeholder="Digite o primeiro número"
        />
      </div>
      <div className="input-group">
        <label htmlFor="dado2">Dado 2:</label>
        <input
          id="dado2"
          type="number"
          value={dado2}
          onChange={(e) => setDado2(e.target.value)}
          placeholder="Digite o segundo número"
        />
      </div>
      <div className="resultado">
        <p className="resultado-texto">Resultado: <span className="resultado-valor">{resultado}</span></p>
      </div>
      <button onClick={somarValores}>
        Calcular Soma
      </button>
    </div>
  );
};

export default ChallengeComponent;

