// maths.js - Simple module to test basic arithmetic
import assert from "assert";
import { add, subtract } from "../math.js";

describe('Maths operations', () => {
    // Test add
    it('Should add two numbers correctly', () => {
        assert.strictEqual(add(2, 3), 5);
    });

    // Test subtraction
    it('Should subtract two numbers correctly', () => {
        assert.strictEqual(subtract(5, 2), 3);
    })
})
