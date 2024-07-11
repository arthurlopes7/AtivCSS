// Arquivo ProdutoRepository.ts
import { Produto } from './Produto';

export interface ProdutoRepository {
    listarTodosOsProdutos(): Produto[];
    listarProdutoPorId(id: number): Produto | undefined;
    cadastrarProduto(produto: Produto): void;
    atualizarProduto(id: number, produto: Produto): void;
    deletarProduto(id: number): void;
}
