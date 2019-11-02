/**
 * Convert the name of a Typescript typings package to it's npm package counterpart.
 * @param name The typings package name to convert.
 * @example
 * ```
 * const { fromTyping } = require("convert-typing-name")
 *
 * fromTyping("@types/a")
 * //=> "a"
 *
 * fromTyping("@types/a__b")
 * //=> "@a/b"
 * ```
*/
declare function fromTyping(name: string): string;

/**
 * Convert the name of a npm package to it's Typescript typings package counterpart.
 * @param name The npm package name to convert.
 * @example
 * ```
 * const { toTyping } = require("convert-typing-name")
 *
 * toTyping("a")
 * //=> "@types/a"
 *
 * toTyping("@a/b")
 * //=> "@types/a__b"
 * ```
*/
declare function toTyping(name: string): string;

export = { fromTyping, toTyping };
