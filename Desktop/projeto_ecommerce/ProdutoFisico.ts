// Arquivo ProdutoFisico.ts
import { Produto } from './Produto';

export class ProdutoFisico extends Produto {
    private peso: number;

    constructor(id: number, nome: string, preco: number, peso: number) {
        super(id, nome, preco);
        this.peso = peso;
    }

    calcularFrete(): number {
        // Exemplo simples de cálculo de frete baseado no peso
        return this.peso * 0.1; // R$ 0.10 por grama
    }

    toString(): string {
        return `${super.toString()} | Peso: ${this.peso}g`;
    }
}
