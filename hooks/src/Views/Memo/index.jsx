import React, { useState, useMemo } from 'react';

function SomaNumeros({ numero }) {

  const [numeroUsuario, setNumeroUsuario] = useState(numero);

  const resultadoCalculado = useMemo(() => {
    console.log('Calculando a soma...');
    let soma = 0;
    for (let i = 1; i <= numeroUsuario; i++) {
      soma += i;
    }
    return soma;
  }, [numeroUsuario]);

  return (
    <div>
      <p>Número: {numeroUsuario}</p>
      <p>Soma: {resultadoCalculado}</p>
      <button onClick={() => setNumeroUsuario(numeroUsuario + 1)}>Incrementar</button>
    </div>
  );
}

export default SomaNumeros;
