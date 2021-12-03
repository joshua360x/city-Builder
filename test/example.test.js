// IMPORT MODULES under test here:
import { createCountString } from '../utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'You have changed the city 1 times, the skyline 0 times, and the castle 0 times';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = createCountString(1, 0, 0);

    const expected1 = 'You have changed the city 1 times, the skyline 5 times, and the castle 10 times';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual1 = createCountString(1, 5, 10);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
    expect.equal(actual1, expected1);
});
