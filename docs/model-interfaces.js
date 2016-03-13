Command : "sequelize model:create --name Van --attributes placa:string,der:string,vagas:integer,modelo:string,cor:string"
interface Van {
	id: integer,
	placa: string,
	der: string,
	vagas: integer,
	modelo: string,
	cor: string
};

Command : "sequelize model:create --name ListaCaracteristicas --attributes vanId:integer,caracteristicaId:integer"
interface ListaCaracteristicas {
	id: integer,
	vanId: (integer) Van,
	caracteristicaId: (integer) Caracteristica
};

Command : "sequelize model:create --name Caracteristica --attributes nome:string"
interface Caracteristica {
	id: integer,
	nome: string
};

Command : "sequelize model:create --name Rota --attributes vanId:integer,bairroId:integer"
interface Rota {
	id: integer,
	vanId: (integer) Van,
	bairroId: (integer) Bairro
};

Command : "sequelize model:create --name Bairro --attributes nome:string"
interface Bairro {
	id: integer,
	nome: string
};
