interface Van {
	id: integer,
	placa: string,
	der: string,
	vagas: integer,
	modelo: string,
	cor: string
};

interface ListaCaracteristicas {
	id: integer,
	vanId: (integer) Van,
	caracteristicaId: (integer) Caracteristica
};

interface Caracteristica {
	id: integer,
	nome: string
};

interface Rota {
	id: integer,
	vanId: (integer) Van,
	bairroId: (integer) Bairro
};

interface Bairro {
	id: integer,
	nome: string
};
