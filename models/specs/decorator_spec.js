const assert = require('assert')
const Decorator = require('../decorator.js')
const PaintCan = require('../paint_can.js')
const Room = require('../room.js')

describe("Decorator", function() {

    let paintCan1
    let paintCan2
    let paintCan3
    let room
    let decorator

    beforeEach(function(){
        paintCan1 = new PaintCan (3)
        paintCan2 = new PaintCan (10)
        paintCan3 = new PaintCan (7)
        room = new Room (20)
        decorator = new Decorator()
    })

    it("start with empty paint stock", function(){
        const expected = []
        assert.deepStrictEqual(decorator.paintStock, expected)
    })

    it("be able to add a can of paint to paint stock", function(){
        decorator.addCanToPaintStock(paintCan1)
        const expected = [paintCan1]
        assert.deepStrictEqual(decorator.paintStock, expected)
    })

    it("be able to calculate total litres paint it has in stock", function(){
        decorator.addCanToPaintStock(paintCan1)
        decorator.addCanToPaintStock(paintCan2)
        decorator.addCanToPaintStock(paintCan3)
        const expected = 20
        assert.strictEqual(decorator.calculateTotalStock(), expected)
    })

    it("be able to calculate whether is has enough paint to paint a room", function (){
        decorator.addCanToPaintStock(paintCan1)
        decorator.addCanToPaintStock(paintCan2)
        decorator.addCanToPaintStock(paintCan3)        
        const expected = true
        assert.strictEqual(decorator.isThereEnoughPaint, expected)
    })
})