import { Produto } from './Produto';
import { Camiseta } from './Camiseta';
import { Chuteira } from './Chuteira';

export class ProdutoController {
    private produtos: Produto[];
    private proximoId: number;

    constructor() {
        this.produtos = [];
        this.proximoId = 1; // Inicializando o próximo ID como 1
    }

    private getNextId(): number {
        return this.proximoId++;
    }

    listarTodosOsProdutos(): Produto[] {
        return this.produtos;
    }

    listarProdutoPorId(id: number): Produto | undefined {
        return this.produtos.find(p => p.getID() === id);
    }

    cadastrarCamiseta(nome: string, preco: number, tamanho: string): void {
        const novaCamiseta = new Camiseta(this.getNextId(), nome, preco, tamanho);
        this.produtos.push(novaCamiseta);
    }

    cadastrarChuteira(nome: string, preco: number, marca: string): void {
        const novaChuteira = new Chuteira(this.getNextId(), nome, preco, marca);
        this.produtos.push(novaChuteira);
    }

    atualizarProduto(id: number, produtoAtualizado: Produto): void {
        const index = this.produtos.findIndex(p => p.getID() === id);
        if (index !== -1) {
            this.produtos[index] = produtoAtualizado;
        }
    }

    deletarProduto(id: number): void {
        this.produtos = this.produtos.filter(p => p.getID() !== id);
    }
}


