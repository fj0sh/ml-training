/**
 * Write a function that converts HTML entities to their corresponding characters.
 * @param {string} str The string to convert.
 * @return {string} The string with HTML entities converted to their corresponding characters.
 */

// ENTITY OBJECT

// type EntityMap = {
//   [key: string]: string;
// };

type EntityMap = {
  "&": string;
  "<": string;
  ">": string;
  '"': string;
  "'": string;
};

const ent: EntityMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;",
};

function strConverter(str: string): string {
  let fixed: string = str;

  for (const entity in ent) {
    fixed = fixed.split(ent[entity]).join(entity);
  }

  return fixed;
}

console.log(strConverter("&amp; &lt; &gt; &quot; &apos;"));
