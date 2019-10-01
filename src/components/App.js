import React from 'react';
import PlacarConteiner from './PlacarConteiner';

const dados = {
    partida: {
        estadio: "Pacaembu-SP",
        data: "30/09/2018",
        horario: "16 h",
    },

    casa:
    {
        nome: "Corinthians",
    },

    visitante:
    {
        nome: "Vasco",
    }
};

export default class App extends React.Component
{
    render()
    {
            return <PlacarConteiner {...dados} tempo={92}/>; //evita repetições {partida.dados}, {casa.dados}, {visitante.dados}
    }
}