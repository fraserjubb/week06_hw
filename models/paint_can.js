const PaintCan = function (litresOfPaint) {
    this.litresOfPaint = litresOfPaint
}

PaintCan.prototype.paintCanIsEmpty = function () {
    return !this.litresOfPaint
}

PaintCan.prototype.reducePaint = function (paintUsed) {
    return this.litresOfPaint -= paintUsed
}

PaintCan.prototype.emptySelfOfPaint = function () {
    return this.litresOfPaint = 0
}

module.exports = PaintCan