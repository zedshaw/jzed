test( "$all tests", function() {
    var children = $all('.testclass');
    ok( children.length == 2);
    
    var inchildren = $all('#testchild', children[0]);
    ok( inchildren.length == 1, "Passed!");
});


test( "$get tests", function() {
    ok( $get('#qunit') != null);
    ok( $get('.testclass') != null);

    var inchildren = $get('#testchild', $get('.testclass'));
    ok( $text_of(inchildren) == "This is a child.");
});


test( "$id tests", function() {
    ok( $id('qunit') === $get('#qunit'));

    var inchildren = $id('testchild', $get('.testclass'));
    ok( $text_of(inchildren) == "This is a child.");
});


test( "$class tests", function() {
    ok( $class('testclass')[0] === $all('.testclass')[0]);
});


test( "$name tests", function() {
    ok( 1 == "1");
});


test( "$filter tests", function() {
    ok( 1 == "1");
});


test( "$each tests", function() {
    ok( 1 == "1");
});


test( "$next tests", function() {
    ok( 1 == "1");
});


test( "$previous tests", function() {
    ok( 1 == "1");
});


test( "$siblings tests", function() {
    ok( 1 == "1");
});


test( "$tyle tests", function() {
    ok( 1 == "1");
});


test( "$toggle tests", function() {
    ok( 1 == "1");
});


test( "$new tests", function() {
    ok( 1 == "1");
});


test( "$after tests", function() {
    ok( 1 == "1");
});


test( "$before tests", function() {
    ok( 1 == "1");
});


test( "$append tests", function() {
    ok( 1 == "1");
});


test( "$prepend tests", function() {
    ok( 1 == "1");
});


test( "$remove tests", function() {
    ok( 1 == "1");
});


test( "$clone tests", function() {
    ok( 1 == "1");
});


test( "$contains tests", function() {
    ok( 1 == "1");
});


test( "$has tests", function() {
    ok( 1 == "1");
});


test( "$empty tests", function() {
    ok( 1 == "1");
});


test( "$style_of tests", function() {
    ok( 1 == "1");
});


test( "$attribute_of tests", function() {
    ok( 1 == "1");
});


test( "$attribute tests", function() {
    ok( 1 == "1");
});

test( "$html_of tests", function() {
    ok( 1 == "1");
});

test( "$ tests", function() {
    ok( 1 == "1");
});

test( "$html tests", function() {
    ok( 1 == "1");
});

test( "$has_class tests", function() {
    ok( 1 == "1");
});

test( "$outer_html tests", function() {
    ok( 1 == "1");
});

test( "$replace_with tests", function() {
    ok( 1 == "1");
});

test( "$matches tests", function() {
    ok( 1 == "1");
});

test( "$offset tests", function() {
    ok( 1 == "1");
});

test( "$offset_parent tests", function() {
    ok( 1 == "1");
});

test( "$parent tests", function() {
    ok( 1 == "1");
});

test( "$text tests", function() {
    ok( 1 == "1");
});

test( "$boot tests", function() {
    ok( 1 == "1");
});

test( "$off tests", function() {
    ok( 1 == "1");
}); 

test( "$on tests", function() {
    ok( 1 == "1");
});

test( "$http tests", function() {
    ok( 1 == "1");
});

test( "$map tests", function() {
    ok( 1 == "1");
});

test( "$now tests", function() {
    ok( 1 == "1");
});

test( "$parse tests", function() {
    ok( 1 == "1");
});

test( "$json tests", function() {
    ok( 1 == "1");
});
test( "$ tests", function() {
    ok( 1 == "1");
});
