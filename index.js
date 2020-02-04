"use strict"

const parsePackageName = require("parse-pkg-name")
const { default: ow } = require("ow")

module.exports = (name) => {
	ow(name, ow.string)

	if (name.startsWith("@types/")) return name
	const { name: pkgName, org: pkgOrg } = parsePackageName(name)

	if (pkgOrg) return `@types/${pkgOrg}__${pkgName}`
	return `@types/${pkgName}`
}

module.exports.from = (name) => {
	ow(name, ow.string)

	if (!name.startsWith("@types/")) return name

	const { name: withoutOrg } = parsePackageName(name)
	const match = withoutOrg.match(/(?:(?<org>.+)__)?(?<name>.+)/)

	if (match.groups.org && match.groups.name) return `@${match.groups.org}/${match.groups.name}`
	return withoutOrg
}
