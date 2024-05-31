  /**
   * Write a function that converts HTML entities to their corresponding characters.
   * @param {string} str The string to convert.
   * @return {string} The string with HTML entities converted to their corresponding characters.
   */

  // ENTITY OBJECT
  const entities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };

function stringConverter(str) {
   let fixed = str;
  
   for (const entity in entities) {
     fixed = fixed.split(entities[entity]).join(entity);
   }
  
   return fixed;
}

  console.log(stringConverter("&amp; &lt; &gt; &quot; &apos;"))