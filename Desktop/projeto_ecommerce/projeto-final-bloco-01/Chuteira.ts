import { Produto } from './Produto';

export class Chuteira extends Produto {
    private marca: string;

    constructor(id: number, nome: string, preco: number, marca: string) {
        super(id, nome, preco);
        this.marca = marca;
    }

    getMarca(): string {
        return this.marca;
    }
}
