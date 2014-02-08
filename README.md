JZed.js -- The functional JQuery Alternative
====

JZed is my alternative to JQuery that's meant to be more functional and full of
$.  It's legit purpose is to do the 80% of things that you sometimes need to do
on a remote site that is punching through to yours and they might have a
different or no JQuery installed.  This is a tiny amount of code that has
enough of the functionality found in JQuery and packaged in a way that can't
possibly clash with it.

It's also functional so now LISP hackers can pretend they're both JavaScript
Oakland Living Node.js gangsters and high class San Franciscans with their
functionality snobbery.

How It Works
============

There's a bunch of functions that start with $ and do stuff that's super
useful and all start with $. This way they probably won't clash with anything that exists already (let me know if I made one that does, or just change it).

Example
=======

Here's an example of getting some stuff when a page loads and allowing
CORS credentials through:

    function getstuff() {
        var list = $id('mystuff');

        $http({
                'url': 'https://stuff.com/' + list.dataset.stuff_id + '/',
                'method': "GET",
                'good': function (req) {
                    list.innerHTML = req.responseText;
                },
                'credentials': true,
                'error': function (req) {
                    list.innerHTML = "<h1>ERROR: </h1>" + req.responseText;
                }
        });
    }

    $boot(paydiv)

Documentation
=============

The library is tiny. Seriously, just go read the code.  It's good education.  For the super lazy
here's a short listing of what's in it.

Getting
-------

Each of these takes an optional argument of inChildren at which point it
will scope the getting inside those children.

  * $get(name, inChildren) -- Get node by selector.
  * $all(name, inChildren) -- All nodes by selector.
  * $id(name, inChildren) -- Nodes with id.
  * $class(name) -- Nodes with that class.
  * $name(name, inChildren) -- Nodes with name.
  * $filter(nodes, fn) -- Filters by true/false function.

Looping
-------

  * $each(arr, cb) -- Call cb on each in arr.
  * $next(node) -- Get the next sibling.
  * $previous(node) -- Get the previous sibling.
  * $siblings(node) -- Get all the siblings.
  * $map(arr, fn) -- Map over an array.


Styling
-------

  * $style() -- Takes unlimited arguments of [nodes, className] and loops through them applying that CSS class to those elements.  Nodes can be single or lists.
  * $toggle(node, className) -- Turns a class on off.
  * $has\_class(node, className) -- Tells you if it has that class.
  * $style\_of(node, ruleName) -- Tells you the style of that node.


DOMing
------

  * $new(tag, id, html) -- Make a new tag with that id and html in it.
  * $after(node, html) -- Put that html after this node.
  * $before(node, html) -- Put that html before this node.
  * $append(parent, child) -- Append that child after this parent.
  * $prepend(parent, node) -- Prepend that node before this parent.
  * $remove(parent, child) -- Remove that child from this parent.
  * $clone(node) -- Clone that node.
  * $parent(node) -- Get the parent of this node.

Testing
-------

  * $matches(node, selector) -- Does node match this selector.
  * $contains(node, child) -- Does node contain that child.
  * $has(node, selector) -- Does node have this selector?
  * $empty(node) -- Is this node empty.
  * $attribute\_of(node, name) -- Get the attribute named from the node.
  * $attribute(node, name, value) -- Set the attribute name in node to value.

HTMLing
-------

  * $html\_of(node) -- Get the HTML of node.
  * $html(node, newhtml) -- Set the HTML of node to newhtml.
  * $outer\_html(node) -- Get the outer HTML of node.
  * $replace\_with(node, newhtml) -- Replace node with newhtml.
  * $text(node, newtext) -- Set the text of node to newtext.
  * $offset(node) -- Get node's offset.
  * $offset\_parent(node) -- Get the parent offset of node.

Eventing
--------

  * $boot(cb) -- Call cb function when the browser is ready.
  * $off(node, eventName,  eventHandler) -- Turn off/remove eventName and eventHandler.
  * $on(node, eventName, eventHandler) -- Turn on/add eventName and eventHandler.

HTTPing
-------

  * $http(settings) -- Send an http request using the attributes: credentials, good, error, method, url. Go read the code.
  * $parse(htmlString) -- Parse the given HTML into a new node.
  * $json(jsonString) -- Parse the JSON.

Miscing
-------

  * $now() -- Get the current time.


License
=======

MIT. I seriously do not care about this apart from releasing it in case someone
else could use it.


Status
======

I use some of these functions and know they work, but I've been a mega slacker
lately and need to test all the others.  I'm posting it now so people can laugh
at it and try it out if they feel brave.

This also only really works on IE9 and maybe IE8 or better, but honstly IE6
and IE7 users users can seriously go fuck themselves with a dirty brick.
I may add a function to detect these two bad browser so people can start
forcing them to use a real browser for a change.

Why?
====

I'm doing a bunch of work with CORS and requiring target sites to use jquery is
insane when I just need a few little things.  Originally the library was about
10 functions, but then I filled it out with more based on the list at
http://youmightnotneedjquery.com/ thanks to @zackbloom and @adamfschwartz.

I picked JZed both to annoy people and because it's got lots of $$$ in it
so I predict it'll have more problems, yet less code.

Thanks
======

As mentioned, thanks to @zackbloom and @adamfschwartz for their nice page
cataloging things people use in JQuery and providing little snippets
for me to borrow.

