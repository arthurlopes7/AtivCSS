export abstract class Produto {
    protected id: number;
    protected nome: string;
    protected preco: number;

    constructor(id: number, nome: string, preco: number) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }

    abstract toString(): string;

    getId(): number {
        return this.id;
    }

    getNome(): string {
        return this.nome;
    }

    getPreco(): number {
        return this.preco;
    }

    setNome(nome: string): void {
        this.nome = nome;
    }

    setPreco(preco: number): void {
        this.preco = preco;
    }
}
