"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function slugify(text) {
    const from = "àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìıİłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;";
    const to = "aaaaaaaaaacccddeeeeeeeegghiiiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz--------------";
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
exports.default = slugify;
