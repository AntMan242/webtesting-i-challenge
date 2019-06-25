const enhancer = require('./enhancer.js');
// test away!

describe('enhancer.js', () => {


describe('the repair function', () => {
    it('should restore the durability to 100', () => {
        //arrange(mock data)
        const item = {
            name: 'Ant',
            durability: 24,
            enhancement: 15
        };
        const expected = {
            name: 'Ant',
            durability: 100,
            enhancement: 15
        };


        //act(pass into testing function)
        const repairedItem = enhancer.repair(item);



        //assert
        expect(repairedItem).toEqual(expected)
        
    });

    });

    describe('the succeed function', () => {
        it('should raise enhancement by 1', () => {
            const item = {
                name: "Ant",
                durability: 30,
                enhancement: 15
            };
            const expected = {
                name: 'Ant',
                durability: 45,
                enhancement: 16
            };
            
            const enhancedItem = succeed(item);
            expect(enhancedItem).toEqual(expected);
        });
    });

    describe('the fail function', () => {
        it('decreases durability by 5 if less than 15', () => {
            const item = {
                name: 'Ant',
                durability: 55,
                enhancement: 10
            };
            const expected = {
                name: 'Ant',
                durability: 50,
                enhancement: 10
            };

            const itemFail = fail(item);
            expect(itemFail).toEqual(expected)
        });

        it('decrease durability by 10 if greater than 14', () => {
            const item = {
                name: 'Ant',
                durability: 50,
                enhancement: 19
            };

            const expected = {
                name: 'Ant',
                durability: 40,
                enhancement: 19
            };

            const itemFail = fail(item);
            expect(itemFail).toEqual(expected);
        });

        it('decrease durability by 1 if greater than 16', () => {
            const item = {
                name: 'Ant',
                durability: 50,
                enhancement: 18
            };

            const expected = {
                name: 'Ant',
                durability: 40,
                enhancement: 17
            };

            const itemFail = fail(item);
            expect(itemFail).toEqual(expected);
        })
    })
})