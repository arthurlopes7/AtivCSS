import * as readlineSync from 'readline-sync';
import { ProdutoController } from './ProdutoController';
import { Camiseta } from './Camiseta';
import { Chuteira } from './Chuteira';

export class Menu {
    private controller: ProdutoController;

    constructor(controller: ProdutoController) {
        this.controller = controller;
    }

    main(): void {
        let opcao: number;

        do {
            console.log("======================");
            console.log("Menu Principal");
            console.log("1. Listar todos os Produtos");
            console.log("2. Listar Produto pelo ID");
            console.log("3. Cadastrar Produto");
            console.log("4. Atualizar Produto");
            console.log("5. Deletar Produto");
            console.log("6. Sair");
            console.log("======================");

            opcao = parseInt(readlineSync.question("Escolha uma opção: "));

            switch (opcao) {
                case 1:
                    this.listarTodosOsProdutos();
                    break;
                case 2:
                    this.listarProdutoPorId();
                    break;
                case 3:
                    this.cadastrarNovoProduto();
                    break;
                case 4:
                    this.atualizarProduto();
                    break;
                case 5:
                    this.deletarProduto();
                    break;
                case 6:
                    console.log("Saindo...");
                    break;
                default:
                    console.log("Opção inválida. Escolha novamente.");
                    break;
            }

        } while (opcao !== 6);
    }

    private listarTodosOsProdutos(): void {
        const produtos = this.controller.listarTodosOsProdutos();
        console.log("\nListando todos os Produtos:");
        if (produtos.length === 0) {
            console.log("Nenhum produto cadastrado.");
        } else {
            produtos.forEach(produto => {
                if (produto instanceof Camiseta) {
                    console.log(`Camiseta - ID: ${produto.getID()}, Nome: ${produto.getNome()}, Preço: ${produto.getPreco()}, Tamanho: ${produto.getTamanho()}`);
                } else if (produto instanceof Chuteira) {
                    console.log(`Chuteira - ID: ${produto.getID()}, Nome: ${produto.getNome()}, Preço: ${produto.getPreco()}, Marca: ${produto.getMarca()}`);
                }
                
            });
        }
        console.log("======================\n");
    }

    private listarProdutoPorId(): void {
        const id = parseInt(readlineSync.question("Digite o ID do produto: "));
        const produto = this.controller.listarProdutoPorId(id);
        if (produto) {
            console.log("\nProduto encontrado:");
            if (produto instanceof Camiseta) {
                console.log(`Camiseta - ID: ${produto.getID()}, Nome: ${produto.getNome()}, Preço: ${produto.getPreco()}, Tamanho: ${produto.getTamanho()}`);
            } else if (produto instanceof Chuteira) {
                console.log(`Chuteira - ID: ${produto.getID()}, Nome: ${produto.getNome()}, Preço: ${produto.getPreco()}, Marca: ${produto.getMarca()}`);
            }
        } else {
            console.log(`\nProduto com ID ${id} não encontrado.`);
        }
        console.log("======================\n");
    }

    private cadastrarNovoProduto(): void {
        const tipoProduto = parseInt(readlineSync.question("Digite o tipo de produto (1 - Camiseta, 2 - Chuteira): "));
        const nome = readlineSync.question("Digite o nome do produto: ");
        const preco = parseFloat(readlineSync.question("Digite o preço do produto: "));
        if (tipoProduto === 1) {
            const tamanho = readlineSync.question("Digite o tamanho da camiseta: ");
            this.controller.cadastrarCamiseta(nome, preco, tamanho);
        } else if (tipoProduto === 2) {
            const marca = readlineSync.question("Digite a marca da chuteira: ");
            this.controller.cadastrarChuteira(nome, preco, marca);
        } else {
            console.log("Tipo de produto inválido.");
        }
        console.log("\nProduto cadastrado com sucesso.");
        console.log("======================\n");
    }

    private atualizarProduto(): void {
        const id = parseInt(readlineSync.question("Digite o ID do produto que deseja atualizar: "));
        const produtoExistente = this.controller.listarProdutoPorId(id);
        if (produtoExistente) {
            const nome = readlineSync.question("Digite o novo nome do produto: ");
            const preco = parseFloat(readlineSync.question("Digite o novo preço do produto: "));
            if (produtoExistente instanceof Camiseta) {
                const tamanho = readlineSync.question("Digite o novo tamanho da camiseta: ");
                const produtoAtualizado = new Camiseta(id, nome, preco, tamanho);
                this.controller.atualizarProduto(id, produtoAtualizado);
            } else if (produtoExistente instanceof Chuteira) {
                const marca = readlineSync.question("Digite a nova marca da chuteira: ");
                const produtoAtualizado = new Chuteira(id, nome, preco, marca);
                this.controller.atualizarProduto(id, produtoAtualizado);
            }
            console.log("\nProduto atualizado com sucesso.");
        } else {
            console.log(`\nProduto com ID ${id} não encontrado.`);
        }
        console.log("======================\n");
    }

    private deletarProduto(): void {
        const id = parseInt(readlineSync.question("Digite o ID do produto que deseja deletar: "));
        const produtoExistente = this.controller.listarProdutoPorId(id);
        if (produtoExistente) {
            this.controller.deletarProduto(id);
            console.log("\nProduto deletado com sucesso.");
        } else {
            console.log(`\nProduto com ID ${id} não encontrado.`);
        }
        console.log("======================\n");
    }
}

// Execução do programa
const controller = new ProdutoController();
const menu = new Menu(controller);
menu.main();
