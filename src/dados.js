const lista_rotas = [
  {
    nome_rota: "Rota 1",
    motorista: "Carlos",
    veiculo: "Van x",
    hora_inicio: "11:30",
    status: "Aberta"
  },
  {
    nome_rota: "Rota 2",
    motorista: "Rodrigo",
    veiculo: "Van k",
    hora_inicio: "20:20",
    status: "Aberta"
  },
  {
    nome_rota: "Rota 3",
    motorista: "Matheus",
    veiculo: "Van q",
    hora_inicio: "07:00",
    status: "Aberta"
  },
  {
    nome_rota: "Rota 4",
    motorista: "Paulo",
    veiculo: "Van c",
    hora_inicio: "15:00",
    status: "Aberta"
  },
  {
    nome_rota: "Rota 5",
    motorista: "Rodrigo",
    veiculo: "Van k",
    hora_inicio: "11:30",
    status: "Concluida"
  },
  {
    nome_rota: "Rota 1",
    motorista: "Paulo",
    veiculo: "Van q",
    hora_inicio: "14:45",
    status: "Concluida"
  }
];

const addRota = (nome_rota, motorista, veiculo, hora_inicio) => {
  lista_rotas.push({
    nome_rota: nome_rota,
    motorista: motorista,
    veiculo: veiculo,
    hora_inicio: hora_inicio,
    status: "Aberta"
  });
}

const returnRota = () => {
  return lista_rotas;
}

const alterStatus = (rota) => {
  lista_rotas.splice(lista_rotas.indexOf(rota), 1);
}

const dados = {
  addRota,
  returnRota,
  alterStatus
}

export default dados;