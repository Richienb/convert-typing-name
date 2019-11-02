"use strict"

const _ = require("lodash")
const parsePackageName = require("parse-pkg-name")
const NamedRegExp = require("named-regexp-groups") // TODO: Remove `named-regexp-groups` in favour of native methods when NodeJS 8.x support ends (December 2019)

module.exports = {
    fromTyping: (name) => {
        if (!_.startsWith(name, "@types/")) return name
        const { name: withoutOrg } = parsePackageName(name)
        const match = withoutOrg.match(new NamedRegExp("(?:(?<org>.+)__)?(?<name>.+)"))
        if (match.groups.org && match.groups.name) return `@${match.groups.org}/${match.groups.name}`
        else return withoutOrg
    },
    toTyping: (name) => {
        if (_.startsWith(name, "@types/")) return name
        const { name: pkgName, org: pkgOrg } = parsePackageName(name)
        if (pkgOrg) return `@types/${pkgOrg}__${pkgName}`
        return `@types/${pkgName}`
    },
}
