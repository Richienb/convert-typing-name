import test from "ava"
import { fromTyping, toTyping } from "."

test("from typing", (t) => {
    t.is(fromTyping("@types/a"), "a")
    t.is(fromTyping("@types/a__b"), "@a/b")
})

test("to typing", (t) => {
    t.is(toTyping("a"), "@types/a")
    t.is(toTyping("@a/b"), "@types/a__b")
})
