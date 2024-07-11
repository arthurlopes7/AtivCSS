import * as readline from 'readline-sync';
import { Produto } from './Produto';
import { ProdutoFutebol } from './ProdutoFutebol';
import { ProdutoRepository } from './ProdutoRepository';
import { ProdutoRepository2 } from './ProdutoRepository2';

export class Menu {
    private produtoRepository: ProdutoRepository;

    constructor() {
        this.produtoRepository = new ProdutoRepository2(); 
    }

    private colorirMenu(mensagem: string): void {
        console.log(`\x1b[36m${mensagem}\x1b[0m`);
    }

    private listarTodosOsProdutos(): void {
        this.colorirMenu('===== Listar todos os Produtos =====');
        const produtos = this.produtoRepository.listarTodosOsProdutos();
        if (produtos.length === 0) {
            console.log('Nenhum produto cadastrado.');
        } else {
            produtos.forEach(produto => {
                console.log(produto.toString());
            });
        }
        console.log();
    }

    private listarProdutoPorId(): void {
        this.colorirMenu('===== Listar Produto pelo ID =====');
        const id = readline.questionInt('Digite o ID do produto: ');
        const produto = this.produtoRepository.listarProdutoPorId(id);
        if (produto) {
            console.log(produto.toString());
        } else {
            console.log('Produto não encontrado.');
        }
        console.log();
    }

    private cadastrarProduto(): void {
        this.colorirMenu('===== Cadastrar Produto =====');
        const nome = readline.question('Digite o nome do produto: ');
        const preco = readline.questionFloat('Digite o preço do produto: ');
        const tipo = readline.question('Digite o tipo do produto (Ex: Bola, Chuteira): ');

        const novoProduto = new ProdutoFutebol(0, nome, preco, tipo);
        this.produtoRepository.cadastrarProduto(novoProduto);
        console.log('Produto cadastrado com sucesso.');
        console.log();
    }

    private atualizarProduto(): void {
        this.colorirMenu('===== Atualizar Produto =====');
        const id = readline.questionInt('Digite o ID do produto que deseja atualizar: ');
        const produtoExistente = this.produtoRepository.listarProdutoPorId(id);

        if (produtoExistente) {
            const nome = readline.question('Digite o novo nome do produto: ');
            const preco = readline.questionInt('Digite o novo preço do produto: ');
            const tipo = readline.question('Digite o novo tipo do produto: ');

            const produtoAtualizado = new ProdutoFutebol(id, nome, preco, tipo);
            this.produtoRepository.atualizarProduto(id, produtoAtualizado);
            console.log('Produto atualizado com sucesso.');
        } else {
            console.log('Produto não encontrado.');
        }
        console.log();
    }

    private deletarProduto(): void {
        this.colorirMenu('===== Deletar Produto =====');
        const id = readline.questionInt('Digite o ID do produto que deseja deletar: ');
        const produtoExistente = this.produtoRepository.listarProdutoPorId(id);

        if (produtoExistente) {
            this.produtoRepository.deletarProduto(id);
            console.log('Produto deletado com sucesso.');
        } else {
            console.log('Produto não encontrado.');
        }
        console.log();
    }

    iniciarMenu(): void {
        while (true) {
            this.colorirMenu('===== Menu Principal =====');
            console.log('1. Listar todos os Produtos');
            console.log('2. Listar Produto pelo ID');
            console.log('3. Cadastrar Produto');
            console.log('4. Atualizar Produto');
            console.log('5. Deletar Produto');
            console.log('0. Sair');

            const opcao = readline.questionInt('Escolha uma opção: ');

            switch (opcao) {
                case 1:
                    this.listarTodosOsProdutos();
                    break;
                case 2:
                    this.listarProdutoPorId();
                    break;
                case 3:
                    this.cadastrarProduto();
                    break;
                case 4:
                    this.atualizarProduto();
                    break;
                case 5:
                    this.deletarProduto();
                    break;
                case 0:
                    console.log('Saindo...');
                    return;
                default:
                    console.log('Opção inválida!');
            }
        }
    }

    static main(): void {
        const menu = new Menu();
        menu.iniciarMenu();
    }
}

Menu.main();
