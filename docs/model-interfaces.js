model:create --name Van --attributes placa:string,der:string,vagas:int,modelo:string,cor:string,listaCaracteristicasId:int,rotaId:int --force
interface Van {
	id: int,
	placa: string,
	der: string,
	vagas: int,
	modelo: string,
	cor: string,
	listaCaracteristicasId: ListaCaracteristicas,
	rotaId: Rota
};

interface ListaCaracteristicas {
	id: int,
	vanId: Van,
	caracteristicaId: Caracteristica
};

interface Caracteristica {
	id: int,
	nome: string
};

interface Rota {
	id: int,
	vanId: Van,
	bairros: Bairro
};

interface Bairro {
	id: int,
	nome: string
};
