describe( "practice.js", () => {
	
	describe( "let", () => {
		describe( "inner", () => {
			it( "should be locally scoped", () => {
				expect( typeof inner ).toBe( "undefined" );
			} );
		} );
	} );

	describe( "const", () => {
		describe( "noChange", () => {
			it( "should not be re-assignable", () => {
				expect( () => noChange = 0 ).toThrow();
			} );
		} );

		describe( "vocab", () => {
			it( "allows modifications of data structures", () => {
				expect( vocab ).toEqual( [ "let", "const", "destructuring", "spread", "rest", "arrow function" ] );
			} );
		} );
	} );
});
