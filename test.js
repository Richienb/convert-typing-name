const typingName = require(".")
const test = require("ava")

test("to typing", (t) => {
	t.is(typingName("a"), "@types/a")
	t.is(typingName("@a/b"), "@types/a__b")
})

test("from typing", (t) => {
	t.is(typingName.from("@types/a"), "a")
	t.is(typingName.from("@types/a__b"), "@a/b")
})
