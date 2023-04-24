// import {mathOperations} from './Q4';
const mathOperations = require('./Q4');

const{sum, diff, product} = mathOperations


describe('Test cases for mini-calculator', () => {

    test('adds 1 + 2 to equal 3', () => {
      expect(sum(1, 2)).toBe(3);
    });

    test('subtraction test 5-1 to equal 4',()=>{
        expect(diff(5,1)).toEqual(4);
    });

    test('multiplication of 5 and 3 to equal 15', ()=>{
        expect(product(5,3)).toBe(15);
    });

    test('multiplication of floating numbers 0.5 and 0.2', ()=>{
        expect(product(0.5, 0.2)).toBeCloseTo(0.1);
    });
  });