const assert = require('assert')
const PaintCan = require('../paint_can.js')

describe("PaintCan", function () {

    let paintCan

    beforeEach(function() {
        paintCan = new PaintCan(3)
    })

    it("have a number of litres of paint", function () {
        const expected = 3
        assert.strictEqual(paintCan.litresOfPaint, expected)
    })

    it("be able to check if paint can is empty", function(){
        paintCan.emptySelfOfPaint()
        const expected = 0
        assert.strictEqual(paintCan.emptySelfOfPaint(), expected)
    })

    it("check if paint has reduced by correct ammount", function(){
        const actual = paintCan.reducePaint(2)
        const expected = 1
        assert.strictEqual(actual, expected)
    })
})