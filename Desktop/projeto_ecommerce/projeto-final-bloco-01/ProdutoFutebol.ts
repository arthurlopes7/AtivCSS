import { Produto } from './Produto';

export class ProdutoFutebol extends Produto {
    private tipo: string;

    constructor(id: number, nome: string, preco: number, tipo: string) {
        super(id, nome, preco);
        this.tipo = tipo;
    }

    getTipo(): string {
        return this.tipo;
    }

    toString(): string {
        return `ID: ${this.id} | Nome: ${this.nome} | Preço: R$ ${this.preco.toFixed(2)} | Tipo: ${this.tipo}`;
    }
}
