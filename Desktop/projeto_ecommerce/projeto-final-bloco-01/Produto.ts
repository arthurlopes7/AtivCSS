export abstract class Produto {
    protected id: number;
    protected nome: string;
    protected preco: number;

    constructor(id: number, nome: string, preco: number) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }

    getID(): number {
        return this.id;
    }

    getNome(): string {
        return this.nome;
    }

    getPreco(): number {
        return this.preco;
    }
}
