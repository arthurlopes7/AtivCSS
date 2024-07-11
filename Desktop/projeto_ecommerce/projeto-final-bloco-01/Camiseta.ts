import { Produto } from './Produto';

export class Camiseta extends Produto {
    private tamanho: string;

    constructor(id: number, nome: string, preco: number, tamanho: string) {
        super(id, nome, preco);
        this.tamanho = tamanho;
    }

    getTamanho(): string {
        return this.tamanho;
    }
}
