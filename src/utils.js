export const generateDni = () => {
  const dniNumber = Math.floor(Math.random() * 100000000);
  const letters = "TRWAGMYFPDXBNJZSQVHLCKE";
  const letter = letters[dniNumber % 23];
  return `${("00000000" + dniNumber).slice(-8)}${letter}`;
};

export const generateNie = () => {
  const niePrefixes = ["X", "Y", "Z"];
  const prefix = niePrefixes[Math.floor(Math.random() * niePrefixes.length)];
  const nieNumber = Math.floor(Math.random() * 10000000)
    .toString()
    .padStart(7, "0");
  const nieWithPrefix = prefix + nieNumber;
  const letters = "TRWAGMYFPDXBNJZSQVHLCKE";

  const nieNumerical = nieWithPrefix
    .replace(/^X/, "0")
    .replace(/^Y/, "1")
    .replace(/^Z/, "2");
  const letter = letters[parseInt(nieNumerical, 10) % 23];

  return `${nieWithPrefix}${letter}`;
};

// export function validaDoc(value) {
//   const validChars = "TRWAGMYFPDXBNJZSQVHLCKET";
//   const nifRexp = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]$/i;
//   const nieRexp = /^[XYZ][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKET]$/i;
//   const str = value.toUpperCase();

//   if (!nifRexp.test(str) && !nieRexp.test(str)) return false;

//   const nie = str
//     .replace(/^[X]/, "0")
//     .replace(/^[Y]/, "1")
//     .replace(/^[Z]/, "2");
//   const letter = str.slice(-1);
//   const number = parseInt(nie.slice(0, -1), 10);

//   return validChars.charAt(number % 23) === letter;
// }
