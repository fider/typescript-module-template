import { C } from "../../src";

export function a() {
    return 1;
}

describe("index", function() {

    describe("index.C", function() {

        it("Shoud be equal 1", function() {
            expect( C ).toBe( 1 );
        });
    });

});
