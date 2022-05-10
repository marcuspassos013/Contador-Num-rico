// programa para checar se um número é ou não primo.
for (let i = 0; i <= 100; i++) {
    number = i;
    let primo = true;
    verificar();

    function verificar() {

        // verifica se o número é igual a 1
        if (number === 1) {
            console.log("1 não é um número primo e nem é composto.");
        } else if (number > 1) {


            for (let i = 2; i < number; i++) {
                if (number % i == 0) {
                    primo = false;
                    break;
                }
            }



            if (primo) {
                console.log(`${number} é um número primo`);
            } else if (number % 2 === 0) {
                console.log(`${number} é um número par`);
            } else {
                console.log(`${number} é um número ímpar`);
            }

        }
    }
}