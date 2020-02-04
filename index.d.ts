declare const convertTypingName: {
    /**
     * Convert the name of a npm package to it's Typescript typings package counterpart.
     * @param name The npm package name to convert.
     * @example
     * ```
     * const typingName = require("convert-typing-name");
     *
     * typingName("a");
     * //=> "@types/a"
     *
     * typingName("@a/b");
     * //=> "@types/a__b"
     * ```
    */
    (name: string): string

    /**
    * Convert the name of a Typescript typings package to it's npm package counterpart.
    * @param name The typings package name to convert.
    * @example
    * ```
    * const typingName = require("convert-typing-name");
    *
    * typingName.from("@types/a");
    * //=> "a"
    *
    * typingName.from("@types/a__b");
    * //=> "@a/b"
    * ```
    */
    from(name: string): string
}

export = convertTypingName
