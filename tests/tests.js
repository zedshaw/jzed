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
    ok($attribute_of($id('testchild'), 'id') == 'testchild');
});


test( "$attribute tests", function() {
    $attribute($id('testchild'), 'class', 'pass');
    ok($attribute_of($id('testchild'), 'class') == 'pass');

});

test( "$html_of tests", function() {
    var html = $html_of($id('testchild'));
    ok(html == 'This is a child.');
});

test( "$html tests", function() {
    $html($id('testchild'), 'This is another child.');
    ok($html_of($id('testchild')) == 'This is another child.');
});

test( "$has_class tests", function() {
    ok($has_class($class('testclass')[0], 'testclass'));
});

test( "$outer_html tests", function() {
    var outer = $outer_html($id('testchild'));
    ok(outer == '<p id="testchild">This is a child.</p>');
});

test( "$replace_with tests", function() {
    var newhtml = '<p id="testchild">Testing again.</p>';
    $replace_with($id('testchild'), newhtml);
    var outer = $outer_html($id('testchild'));
    ok($outer_html($id('testchild')) == newhtml);
});

test( "$matches tests", function() {
    var node = $id('testchild');

    ok($matches(node, 'p'));
});

test( "$offset tests", function() {
    var offset = $offset($get('#qunit'));
    ok(offset != null);
    ok(offset.left > 0);
    ok(offset.top > 0);
});

test( "$offset_parent tests", function() {
    var offset = $offset_parent($get('#testchild'));
    ok(offset != null);
});

test( "$parent tests", function() {
    ok($matches($parent($id('testchild')), '.testclass'));
});

test( "$text and $text_of tests", function() {
    ok($text_of($id('testchild')) != null);

    $text($id('testchild'), 'The new text.');
    
    ok($text_of($id('testchild')) == 'The new text.');
});

test( "$now tests", function() {
    ok($now() != null);
});

test( "$parse tests", function() {
    var node = $parse('<div class="pass"><p>Howdy pardner</p></div>');
    ok($matches(node[0], '.pass'));
});

test( "$json tests", function() {
    var data = $json('{"left": 10, "top": 20}');
    ok(data.left == 10);
    ok(data.top == 20);
});

test( "$boot tests", function() {
    ok(document.bootRan == true);
});

test( "$on and $off tests", function() {
    var ev = Event('click')
    var node = $id('testchild');
    var handler = function () {
        document.eventFired = true;
    }

    $on(node, 'click', handler);

    node.dispatchEvent(ev);

    ok(document.eventFired == true);

    document.eventFired = false;

    $off(node, 'click', handler);

    node.dispatchEvent(ev);

    ok(document.eventFired == false);
});

test( "$http tests", function() {
    ok( document.httpError == true);
});

$boot(function () {
    document.bootRan = true; 
});


$http({
    credentials: true,
    error: function () {
        document.httpError = true;
    },
    good: function () {
        document.httpError = false;
    },
    method: 'GET',
    url: 'http://localhost/nowayinhellyouhavethisworking/'
});

