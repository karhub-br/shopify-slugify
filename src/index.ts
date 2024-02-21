export function slugify(text: string): string {
  const from =
    "àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìıİłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;";
  const to =
    "aaaaaaaaaacccddeeeeeeeegghiiiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz--------------";
  const textToCompare = new RegExp(from.split("").join("|"), "g");

  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(textToCompare, (c) => to.charAt(from.indexOf(c))) // Replace special characters
    .replace(/[&.]/g, "-") // Replace DOT with -
    .replace(/[^\w-º]+/g, "") // Remove all non-word characters, except for º and -
    .replace(/--+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}