import type { CardProps } from "./types/types";

/*

Q:- Why import type CardProps from "./types/types" instead of just import CardProps?
Answer:-


The import type syntax is used in TypeScript to explicitly import only types, not runtime values. 
This is especially important when the verbatimModuleSyntax or isolatedModules compiler option is enabled, 
as it helps TypeScript differentiate between imports that affect JavaScript output and those that don’t. 
By using import type, you ensure that the imported type (like CardProps) is stripped out during 
transpilation, resulting in cleaner, more optimized JavaScript code. It also avoids potential
 issues like circular dependencies and unnecessary bundling of code that's never used at runtime.
  It's a best practice in type-safe, modular codebases.

*/

const Card = ({
  style,
  onclickcard,
  onkeydown,
  cardTitle,
  cardImg,
  cardContent,
}: CardProps) => {
  return (
    <div
      onMouseEnter={() => onkeydown(5)}
      style={style}
      className="h-[30rem] hover:text-shadow-violet-950 space-y-2 p-5 
    w-80 rounded-xl shadow-2xl bg-blue-200"
      onClick={onclickcard}
    >
      <img src={cardImg} className="h-1/2 object-cover w-full" alt="" />
      <h3 className="text-3xl text-center">{cardTitle}</h3>
      <p className="">{cardContent}</p>
    </div>
  );
};

export default Card;
