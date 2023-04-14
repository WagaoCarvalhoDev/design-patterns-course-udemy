# CREATIONAL #########
# Factory method
• As classes instanciadas podem variar na mesma interface.
• Desacoplar código das classes concretas.
• Abstração do produto e variação de subprodutos através de fábricas

device apple  => factory/apple
database adapter => factory/app

# Abstract factory
• As classes instanciadas podem variar na mesma interface.
• Criação dos contextos de categoria de produtos e o agrupamento dos objetos de acordo com o contexto.

device apple  => abstractFactory/apple
database adapter => abstractFactory/app

# Singleton
• Garantir qua a classe possua apenas 1 instância global.

# builder
• Criação de objetos complexos por partes evitando a implementação de vários construtores.

# prototype
• Clonar objetos.

# STRUCTURAL #########
# Adapter

• Adaptar uma interface de uma classe
• Hexagonal Architecture(validar se email existe) 