const Room = require("./room")

const Decorator = function () {
    this.paintStock = []
}

Decorator.prototype.addCanToPaintStock = function (paintCan) {
    this.paintStock.push(paintCan)
}

Decorator.prototype.calculateTotalStock = function () {
    let totalStock = 0

    for (let paintCan of this.paintStock){
        totalStock += paintCan.litresOfPaint
    }
    return totalStock
}

Decorator.prototype.isThereEnoughPaint = function (room){
    for (let room of this.areaInSquareMeters){
        if (this.calculateTotalStock <= room.areaInSquareMeters){
            return true
        }
    }
    return false
}


module.exports = Decorator