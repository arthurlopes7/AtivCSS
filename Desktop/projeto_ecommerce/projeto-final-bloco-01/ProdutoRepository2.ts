
import { Produto } from './Produto';
import { ProdutoRepository } from './ProdutoRepository';

export class ProdutoRepository2 implements ProdutoRepository {
    private produtos: Produto[] = [];
    private proximoId: number = 1;

    listarTodosOsProdutos(): Produto[] {
        return this.produtos;
    }

    listarProdutoPorId(id: number): Produto | undefined {
        return this.produtos.find(p => p.getId() === id);
    }

    cadastrarProduto(produto: Produto): void {
        produto.getId();
        this.produtos.push(produto);
        this.proximoId++;
    }

    atualizarProduto(id: number, produto: Produto): void {
        const index = this.produtos.findIndex(p => p.getId() === id);
        if (index !== -1) {
            this.produtos[index] = produto;
        }
    }

    deletarProduto(id: number): void {
        const index = this.produtos.findIndex(p => p.getId() === id);
        if (index !== -1) {
            this.produtos.splice(index, 1);
        }
    }
}
