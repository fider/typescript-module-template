
describe('index', function() {

    describe('index.C', function() {

        it('Shoud be Buffer', async function(done: DoneFn) {
            const { C } = await import('../src');
            expect( C instanceof Buffer ).toBe( true );
            done();
        });
    });

});
