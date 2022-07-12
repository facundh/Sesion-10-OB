import { suma, multiplica } from "./modulos/controller.js";
import chalk from "chalk";
const resultadoSum = suma(1,2);
console.log(chalk.blue(resultadoSum));

const resultadoMul = multiplica(4,5);
console.log(chalk.green(resultadoMul));