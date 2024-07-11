// Arquivo Produto.ts
export class Produto {
    id: number;
    nome: string;
    preco: number;

    constructor(id: number, nome: string, preco: number) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }

    toString(): string {
        return `ID: ${this.id} | Nome: ${this.nome} | Preço: R$ ${this.preco.toFixed(2)}`;
    }
}
