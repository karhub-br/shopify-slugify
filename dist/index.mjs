// src/index.ts
function slugify(text) {
  const from = "\xE0\xE1\xE2\xE4\xE6\xE3\xE5\u0101\u0103\u0105\xE7\u0107\u010D\u0111\u010F\xE8\xE9\xEA\xEB\u0113\u0117\u0119\u011B\u011F\u01F5\u1E27\xEE\xEF\xED\u012B\u012F\xEC\u0131\u0130\u0142\u1E3F\xF1\u0144\u01F9\u0148\xF4\xF6\xF2\xF3\u0153\xF8\u014D\xF5\u0151\u1E55\u0155\u0159\xDF\u015B\u0161\u015F\u0219\u0165\u021B\xFB\xFC\xF9\xFA\u016B\u01D8\u016F\u0171\u0173\u1E83\u1E8D\xFF\xFD\u017E\u017A\u017C+\xB7/_,:;";
  const to = "aaaaaaaaaacccddeeeeeeeegghiiiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz--------------";
  const textToCompare = new RegExp(
    from.split("").join("|").replace(/\+/g, "\\+"),
    "g"
  );
  return text.toString().toLowerCase().replace("&", "-38-").replace(/\s+/g, "-").replace(textToCompare, (c) => to.charAt(from.indexOf(c))).replace(/[&.]/g, "-").replace(/[^\w-º+]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
}
export {
  slugify
};
//# sourceMappingURL=index.mjs.map