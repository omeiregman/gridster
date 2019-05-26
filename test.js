const expect = require('chai').expect;
const shortestPath = require('./src/utils/shortestPath');


// describe('is shortest path', function () {
//     it('should return', function () {
//         expect(shortestPath([1, 1, 1, 1, 1, 1, 1, 1, 1], 4, 3, 3)).to.deep.equal(new Set([]));
//         expect(shortestPath([0, 0, 0, 1, 1, 1, 1, 1, 1], 4, 6, 3)).to.deep.equal(new Set([2, 1, 0, 3]));
//         expect(shortestPath([1, 1, 1, 1, 1, 1, 1, 0, 1], 7, 9, 3)).to.deep.equal(new Set([2, 3, 5, 6]));
//     });
// });


describe('is shortest path', function () {

    it('should return', () => {
        expect(shortestPath([1, 1, 1, 1, 1, 1, 1, 1, 1], 4, 3, 3)).to.deep.equal(new Set([]));
    });
    it('should return', () => {
        expect(shortestPath([0, 0, 0, 1, 1, 1, 1, 1, 1], 4, 6, 3)).to.deep.equal(new Set([2, 1, 0, 3]));
    });
    it('should return', function () {
        expect(shortestPath([0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1], 21, 5, 5)).to.deep.equal(new Set([3, 2, 1, 0, 5, 10, 15, 20]));
    });

    it('should return', function () {
        expect(shortestPath([0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1], 21, 5, 5)).to.deep.equal(new Set([3, 2, 1, 0, 5, 10, 15, 20]));
    });

    it('should return', function () {
        expect(shortestPath([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0], 6, 10, 5)).to.deep.equal(new Set([14, 19, 24, 23, 22, 21, 20, 15, 10, 5]));
    });

    it('should return', function () {
        expect(shortestPath([1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0], 6, 10, 5)).to.deep.equal(new Set([8, 7, 6, 5]));
    });


});
