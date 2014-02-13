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
    ok( $name('div')[0].id == 'qunit');
});


test( "$filter tests", function() {
    var found = $filter($name('div'), function (el) {
        return el.id == 'qunit';
    });

    ok( found.length == 1);
});


test( "$each tests", function() {
    var count = 0;

    $each($name('div'), function (el) {
        count ++;
    });

    ok( count > 2);
});


test( "$next tests", function() {
    var first = $next($name('div')[0].children[0]);
    ok( first.id == 'qunit-banner');
});


test( "$previous tests", function() {
    var children = $name('div')[0].children;
    var last = $previous(children[children.length - 1]);
    ok( last.id == 'qunit-testresult');
});


test( "$siblings tests", function() {
    var child = $name('div')[0].children[0];
    var siblings = $siblings(child);
    ok( child !== siblings[0]);
    ok( siblings.length == 5);
});


test( "$style tests", function() {
    var tests = $id('testchild');

    $style(
        [tests, 'fail']
        );

    ok($has_class(tests, 'fail') == true);

    $style(
        [tests, '']
        );

    ok($has_class(tests, 'fail') == false);
});


test( "$toggle tests", function() {
    var test = $id('testchild')

    $toggle(test, 'pass');

    ok($has_class(test, 'pass') == true);

    $toggle(test, 'pass');

    ok($has_class(test, 'pass') == false);
});


test( "$new tests", function() {
    var test = $new('div', 'pass', '<p>This has a tag in it.</p>');
    ok(test.id == 'pass');
    ok(test.children.length == 1);
});


test( "$after tests", function() {
    $after($id('testchild'), '<p>This is some more after.</p>')
    ok( $class('testclass')[0].children.length == 2);
});


test( "$before tests", function() {
    $after($id('testchild'), '<p>This is some more before.</p>')
    ok( $class('testclass')[0].children.length == 3);
});


test( "$append tests", function() {
    var test = $new('div', 'appended', '<p>I was appended.</p>');

    $append($class('testclass')[0], test);

    ok( $class('testclass')[0].children.length == 4);
});


test( "$prepend tests", function() {
    var test = $new('div', 'prepended', '<p>I was prepended.</p>');

    $prepend($class('testclass')[0], test);

    ok( $class('testclass')[0].children.length == 5);
});


test( "$remove tests", function() {
    $remove($class('testclass')[0], $id('testchild'));

    ok( $class('testclass')[0].children.length == 4);
});


test( "$clone tests", function() {
    var test = $clone($class('testclass')[0]);
    ok($has_class(test, 'testclass'));
});


test( "$contains tests", function() {
    var test = $class('testclass')[0];

    ok($contains(test, test.children[0]));
    ok($contains(test, test) == false);
});


test( "$has tests", function() {
    ok($has($get('.testclass'), '#testchild'));
});


test( "$empty tests", function() {
    ok($empty($id('qunit-fixture')));
    ok($empty($id('testchild')) == false);
});


test( "$style_of tests", function() {
    var test = $style_of($class('pass')[0], 'color');

    ok(test == 'rgb(82, 140, 224)');
});


test( "$attribute_of tests", function() {
    ok( 1 == false);
});


test( "$attribute tests", function() {
    ok( 1 == false);
});

test( "$html_of tests", function() {
    ok( 1 == false);
});

test( "$ tests", function() {
    ok( 1 == false);
});

test( "$html tests", function() {
    ok( 1 == false);
});

test( "$has_class tests", function() {
    ok( 1 == false);
});

test( "$outer_html tests", function() {
    ok( 1 == false);
});

test( "$replace_with tests", function() {
    ok( 1 == false);
});

test( "$matches tests", function() {
    ok( 1 == false);
});

test( "$offset tests", function() {
    ok( 1 == false);
});

test( "$offset_parent tests", function() {
    ok( 1 == false);
});

test( "$parent tests", function() {
    ok( 1 == false);
});

test( "$text tests", function() {
    ok( 1 == false);
});

test( "$boot tests", function() {
    ok( 1 == false);
});

test( "$off tests", function() {
    ok( 1 == false);
}); 

test( "$on tests", function() {
    ok( 1 == false);
});

test( "$http tests", function() {
    ok( 1 == false);
});

test( "$map tests", function() {
    ok( 1 == false);
});

test( "$now tests", function() {
    ok( 1 == false);
});

test( "$parse tests", function() {
    ok( 1 == false);
});

test( "$json tests", function() {
    ok( 1 == false);
});
