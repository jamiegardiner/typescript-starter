import { join } from "ramda";
import { IO } from "funfix";

export const sayHello = (): string => {
  const hello = (): string => "Hello";
  const world = (): string => "World!";
  const sayHello = join(" ", [hello(), world()]);

  const log = IO.of(() => console.log).map((log) => log(sayHello));
  log.run();

  return sayHello;
};
