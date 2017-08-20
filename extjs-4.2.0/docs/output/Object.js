Ext.data.JsonP.Object({"statics":{"event":[],"css_mixin":[],"cfg":[],"method":[],"property":[],"css_var":[]},"superclasses":[],"tagname":"class","alternateClassNames":[],"override":null,"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/Object.html#Object' target='_blank'>Object.js</a></div></pre><div class='doc-contents'><p>Creates an object wrapper.</p>\n\n<p>The Object constructor creates an object wrapper for the given value. If the value is null or\nundefined, it will create and return an empty object, otherwise, it will return an object of a type\nthat corresponds to the given value.</p>\n\n<p>When called in a non-constructor context, Object behaves identically.</p>\n\n<h1>Using Object given undefined and null types</h1>\n\n<p>The following examples store an empty Object object in o:</p>\n\n<pre><code>var o = new Object();\n\nvar o = new Object(undefined);\n\nvar o = new Object(null);\n</code></pre>\n\n<h1>Using Object to create Boolean objects</h1>\n\n<p>The following examples store Boolean objects in o:</p>\n\n<pre><code>// equivalent to o = new Boolean(true);\nvar o = new Object(true);\n\n// equivalent to o = new Boolean(false);\nvar o = new Object(Boolean());\n</code></pre>\n\n<div class=\"notice\">\nDocumentation for this class comes from <a href=\"https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object\">MDN</a>\nand is available under <a href=\"http://creativecommons.org/licenses/by-sa/2.0/\">Creative Commons: Attribution-Sharealike license</a>.\n</div>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Object'>Object</span><br/><a href='source/Object.html#Object-property-constructor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Object-property-constructor' class='name expandable'>constructor</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span></div><div class='description'><div class='short'>Specifies the function that creates an object's prototype. ...</div><div class='long'><p>Specifies the function that creates an object's prototype.</p>\n\n<p>Returns a reference to the Object function that created the instance's prototype. Note that the\nvalue of this property is a reference to the function itself, not a string containing the\nfunction's name, but it isn't read only (except for primitive Boolean, Number or String values: 1,\ntrue, \"read-only\").</p>\n\n<p>All objects inherit a <code>constructor</code> property from their <code>prototype</code>:</p>\n\n<pre><code>o = new Object // or o = {} in JavaScript 1.2\no.constructor == Object\na = new Array // or a = [] in JavaScript 1.2\na.constructor == Array\nn = new Number(3)\nn.constructor == Number\n</code></pre>\n\n<p>Even though you cannot construct most HTML objects, you can do comparisons. For example,</p>\n\n<pre><code>document.constructor == Document\ndocument.form3.constructor == Form\n</code></pre>\n\n<p>The following example creates a prototype, <code>Tree</code>, and an object of that type, theTree. The example then displays the <code>constructor</code> property for the object <code>theTree</code>.</p>\n\n<pre><code>function Tree(name) {\n    this.name = name;\n}\ntheTree = new Tree(\"Redwood\");\nconsole.log(\"theTree.constructor is \" + theTree.constructor);\n</code></pre>\n\n<p>This example displays the following output:</p>\n\n<pre><code>theTree.constructor is function Tree(name) {\n    this.name = name;\n}\n</code></pre>\n\n<p>The following example shows how to modify constructor value of generic objects. Only true, 1 and\n\"test\" variable constructors will not be changed. This example explains that is not always so safe\nto believe in constructor function.</p>\n\n<pre><code>function Type(){};\nvar types = [\n    new Array,  [],\nnew Boolean,    true,\nnew Date,\nnew Error,\nnew Function,   function(){},\nMath,\nnew Number, 1,\nnew Object, {},\nnew RegExp, /(?:)/,\nnew String, \"test\"\n];\nfor(var i = 0; i &lt; types.length; i++){\n    types[i].constructor = Type;\n    types[i] = [types[i].constructor, types[i] instanceof Type, types[i].toString()];\n};\nalert(types.join(\"\\n\"));\n</code></pre>\n</div></div></div><div id='property-prototype' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Object'>Object</span><br/><a href='source/Object.html#Object-property-prototype' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Object-property-prototype' class='name not-expandable'>prototype</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span></div><div class='description'><div class='short'><p>Allows the addition of properties to all objects of type Object.</p>\n</div><div class='long'><p>Allows the addition of properties to all objects of type Object.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Object'>Object</span><br/><a href='source/Object.html#Object-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Object-method-constructor' class='name expandable'>Object</a>( <span class='pre'>[value]</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></div><div class='description'><div class='short'>Creates new Object. ...</div><div class='long'><p>Creates new Object.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'><p>The value to wrap.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-hasOwnProperty' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Object'>Object</span><br/><a href='source/Object.html#Object-method-hasOwnProperty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Object-method-hasOwnProperty' class='name expandable'>hasOwnProperty</a>( <span class='pre'>prop</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></div><div class='description'><div class='short'>Returns a boolean indicating whether an object contains the specified property as a direct property\nof that object an...</div><div class='long'><p>Returns a boolean indicating whether an object contains the specified property as a direct property\nof that object and not inherited through the prototype chain.</p>\n\n<p>Every object descended from <code>Object</code> inherits the <code>hasOwnProperty</code> method. This method can be used\nto determine whether an object has the specified property as a direct property of that object;\nunlike the <code>in</code> operator, this method does not check down the object's prototype chain.</p>\n\n<p>The following example determines whether the o object contains a property named prop:</p>\n\n<pre><code>o = new Object();\no.prop = 'exists';\n\nfunction changeO() {\n    o.newprop = o.prop;\n    delete o.prop;\n}\n\no.hasOwnProperty('prop');   //returns true\nchangeO();\no.hasOwnProperty('prop');   //returns false\n</code></pre>\n\n<p>The following example differentiates between direct properties and properties inherited through the\nprototype chain:</p>\n\n<pre><code>o = new Object();\no.prop = 'exists';\no.hasOwnProperty('prop');             // returns true\no.hasOwnProperty('toString');         // returns false\no.hasOwnProperty('hasOwnProperty');   // returns false\n</code></pre>\n\n<p>The following example shows how to iterate over the properties of an object without executing on\ninherit properties.</p>\n\n<pre><code>var buz = {\n    fog: 'stack'\n};\n\nfor (var name in buz) {\n    if (buz.hasOwnProperty(name)) {\n        alert(\"this is fog (\" + name + \") for sure. Value: \" + buz[name]);\n    }\n    else {\n        alert(name); // toString or something else\n    }\n}\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>prop</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The name of the property to test.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'><p>Returns true if object contains specified property; else\nreturns false.</p>\n</div></li></ul></div></div></div><div id='method-isPrototypeOf' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Object'>Object</span><br/><a href='source/Object.html#Object-method-isPrototypeOf' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Object-method-isPrototypeOf' class='name expandable'>isPrototypeOf</a>( <span class='pre'>prototype, object</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></div><div class='description'><div class='short'>Returns a boolean indication whether the specified object is in the prototype chain of the object\nthis method is call...</div><div class='long'><p>Returns a boolean indication whether the specified object is in the prototype chain of the object\nthis method is called upon.</p>\n\n<p><code>isPrototypeOf</code> allows you to check whether or not an object exists within another object's\nprototype chain.</p>\n\n<p>For example, consider the following prototype chain:</p>\n\n<pre><code>function Fee() {\n    // . . .\n}\n\nfunction Fi() {\n    // . . .\n}\nFi.prototype = new Fee();\n\nfunction Fo() {\n    // . . .\n}\nFo.prototype = new Fi();\n\nfunction Fum() {\n    // . . .\n}\nFum.prototype = new Fo();\n</code></pre>\n\n<p>Later on down the road, if you instantiate <code>Fum</code> and need to check if <code>Fi</code>'s prototype exists\nwithin the <code>Fum</code> prototype chain, you could do this:</p>\n\n<pre><code>var fum = new Fum();\n. . .\n\nif (Fi.prototype.isPrototypeOf(fum)) {\n// do something safe\n}\n</code></pre>\n\n<p>This, along with the <code>instanceof</code> operator particularly comes in handy if you have code that can\nonly function when dealing with objects descended from a specific prototype chain, e.g., to\nguarantee that certain methods or properties will be present on that object.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>prototype</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>an object to be tested against each link in the prototype chain of the\n<em>object</em> argument</p>\n</div></li><li><span class='pre'>object</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>the object whose prototype chain will be searched</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'><p>Returns true if object is a prototype and false if not.</p>\n</div></li></ul></div></div></div><div id='method-propertyIsEnumerable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Object'>Object</span><br/><a href='source/Object.html#Object-method-propertyIsEnumerable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Object-method-propertyIsEnumerable' class='name expandable'>propertyIsEnumerable</a>( <span class='pre'>prop</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></div><div class='description'><div class='short'>Returns a boolean indicating if the internal ECMAScript DontEnum attribute is set. ...</div><div class='long'><p>Returns a boolean indicating if the internal ECMAScript DontEnum attribute is set.</p>\n\n<p>Every object has a <code>propertyIsEnumerable</code> method. This method can determine whether the specified\nproperty in an object can be enumerated by a <code>for...in</code> loop, with the exception of properties\ninherited through the prototype chain. If the object does not have the specified property, this\nmethod returns false.</p>\n\n<p>The following example shows the use of <code>propertyIsEnumerable</code> on objects and arrays:</p>\n\n<pre><code>var o = {};\nvar a = [];\no.prop = 'is enumerable';\na[0] = 'is enumerable';\n\no.propertyIsEnumerable('prop');   // returns true\na.propertyIsEnumerable(0);        // returns true\n</code></pre>\n\n<p>The following example demonstrates the enumerability of user-defined versus built-in properties:</p>\n\n<pre><code>var a = ['is enumerable'];\n\na.propertyIsEnumerable(0);          // returns true\na.propertyIsEnumerable('length');   // returns false\n\nMath.propertyIsEnumerable('random');   // returns false\nthis.propertyIsEnumerable('Math');     // returns false\n</code></pre>\n\n<p>Direct versus inherited properties</p>\n\n<pre><code>var a = [];\na.propertyIsEnumerable('constructor');         // returns false\n\nfunction firstConstructor()\n{\n    this.property = 'is not enumerable';\n}\nfirstConstructor.prototype.firstMethod = function () {};\n\nfunction secondConstructor()\n{\n    this.method = function method() { return 'is enumerable'; };\n}\n\nsecondConstructor.prototype = new firstConstructor;\nsecondConstructor.prototype.constructor = secondConstructor;\n\nvar o = new secondConstructor();\no.arbitraryProperty = 'is enumerable';\n\no.propertyIsEnumerable('arbitraryProperty');   // returns true\no.propertyIsEnumerable('method');              // returns true\no.propertyIsEnumerable('property');            // returns false\n\no.property = 'is enumerable';\n\no.propertyIsEnumerable('property');            // returns true\n\n// These return false as they are on the prototype which\n// propertyIsEnumerable does not consider (even though the last two\n// are iteratable with for-in)\no.propertyIsEnumerable('prototype'); // returns false (as of JS 1.8.1/FF3.6)\no.propertyIsEnumerable('constructor'); // returns false\no.propertyIsEnumerable('firstMethod'); // returns false\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>prop</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The name of the property to test.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'><p>If the object does not have the specified property, this\nmethod returns false.</p>\n</div></li></ul></div></div></div><div id='method-toLocaleString' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Object'>Object</span><br/><a href='source/Object.html#Object-method-toLocaleString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Object-method-toLocaleString' class='name expandable'>toLocaleString</a>( <span class='pre'></span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Returns a string representing the object. ...</div><div class='long'><p>Returns a string representing the object. This method is meant to be overridden by derived objects\nfor locale-specific purposes.</p>\n\n<p><code>Object</code>'s <code>toLocaleString</code> returns the result of calling <code>toString</code>.</p>\n\n<p>This function is provided to give objects a generic <code>toLocaleString</code> method, even though not all\nmay use it. Currently, only <code>Array</code>, <code>Number</code>, and <code>Date</code> override <code>toLocaleString</code>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>Object represented as a string.</p>\n</div></li></ul></div></div></div><div id='method-toString' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Object'>Object</span><br/><a href='source/Object.html#Object-method-toString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Object-method-toString' class='name expandable'>toString</a>( <span class='pre'></span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Returns a string representation of the object. ...</div><div class='long'><p>Returns a string representation of the object.</p>\n\n<p>Every object has a <code>toString()</code> method that is automatically called when the object is to be\nrepresented as a text value or when an object is referred to in a manner in which a string is\nexpected. By default, the <code>toString()</code> method is inherited by every object descended from <code>Object</code>.\nIf this method is not overridden in a custom object, <code>toString()</code> returns \"[object type]\", where\n<code>type</code> is the object type. The following code illustrates this:</p>\n\n<pre><code>var o = new Object();\no.toString();           // returns [object Object]\n</code></pre>\n\n<p>You can create a function to be called in place of the default <code>toString()</code> method. The\n<code>toString()</code> method takes no arguments and should return a string. The <code>toString()</code> method you\ncreate can be any value you want, but it will be most useful if it carries information about the\nobject.</p>\n\n<p>The following code defines the <code>Dog</code> object type and creates <code>theDog</code>, an object of type <code>Dog</code>:</p>\n\n<pre><code>function Dog(name,breed,color,sex) {\n    this.name=name;\n    this.breed=breed;\n    this.color=color;\n    this.sex=sex;\n}\n\ntheDog = new Dog(\"Gabby\",\"Lab\",\"chocolate\",\"female\");\n</code></pre>\n\n<p>If you call the <code>toString()</code> method on this custom object, it returns the default value inherited\nfrom <code>Object</code>:</p>\n\n<pre><code>theDog.toString(); //returns [object Object]\n</code></pre>\n\n<p>The following code creates and assigns <code>dogToString()</code> to override the default <code>toString()</code> method.\nThis function generates a string containing the name, breed, color, and sex of the object, in the\nform <code>\"property = value;\"</code>.</p>\n\n<pre><code>Dog.prototype.toString = function dogToString() {\n    var ret = \"Dog \" + this.name + \" is a \" + this.sex + \" \" + this.color + \" \" + this.breed;\n    return ret;\n}\n</code></pre>\n\n<p>With the preceding code in place, any time theDog is used in a string context, JavaScript\nautomatically calls the <code>dogToString()</code> function, which returns the following string:</p>\n\n<pre><code>Dog Gabby is a female chocolate Lab\n</code></pre>\n\n<p><code>toString()</code> can be used with every object and allows you to get its class. To use the\n<code>Object.prototype.toString()</code> with every object, you need to call <code>Function.prototype.call()</code> or\n<code>Function.prototype.apply()</code> on it, passing the object you want to inspect as the first parameter\ncalled <code>thisArg</code>.</p>\n\n<pre><code>var toString = Object.prototype.toString;\n\ntoString.call(new Date); // [object Date]\ntoString.call(new String); // [object String]\ntoString.call(Math); // [object Math]\n</code></pre>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>Object represented as a string.</p>\n</div></li></ul></div></div></div><div id='method-valueOf' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Object'>Object</span><br/><a href='source/Object.html#Object-method-valueOf' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Object-method-valueOf' class='name expandable'>valueOf</a>( <span class='pre'></span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></div><div class='description'><div class='short'>Returns the primitive value of the specified object. ...</div><div class='long'><p>Returns the primitive value of the specified object.</p>\n\n<p>JavaScript calls the <code>valueOf</code> method to convert an object to a primitive value. You rarely need to\ninvoke the <code>valueOf</code> method yourself; JavaScript automatically invokes it when encountering an\nobject where a primitive value is expected.</p>\n\n<p>By default, the <code>valueOf</code> method is inherited by every object descended from <code>Object</code>. Every built-\nin core object overrides this method to return an appropriate value. If an object has no primitive\nvalue, <code>valueOf</code> returns the object itself, which is displayed as:</p>\n\n<pre><code>[object Object]\n</code></pre>\n\n<p>You can use <code>valueOf</code> within your own code to convert a built-in object into a primitive value.\nWhen you create a custom object, you can override <code><a href=\"#!/api/Object-method-valueOf\" rel=\"Object-method-valueOf\" class=\"docClass\">Object.valueOf</a></code> to call a custom method instead\nof the default <code>Object</code> method.</p>\n\n<p>You can create a function to be called in place of the default <code>valueOf</code> method. Your function must\ntake no arguments.</p>\n\n<p>Suppose you have an object type <code>myNumberType</code> and you want to create a <code>valueOf</code> method for it.\nThe following code assigns a user-defined function to the object's valueOf method:</p>\n\n<pre><code>myNumberType.prototype.valueOf = new Function(functionText)\n</code></pre>\n\n<p>With the preceding code in place, any time an object of type <code>myNumberType</code> is used in a context\nwhere it is to be represented as a primitive value, JavaScript automatically calls the function\ndefined in the preceding code.</p>\n\n<p>An object's <code>valueOf</code> method is usually invoked by JavaScript, but you can invoke it yourself as\nfollows:</p>\n\n<pre><code>myNumber.valueOf()\n</code></pre>\n\n<p>Note: Objects in string contexts convert via the <code>toString</code> method, which is different from\n<code>String</code> objects converting to string primitives using <code>valueOf</code>. All objects have a string\nconversion, if only <code>\"[object type]\"</code>. But many objects do not convert to number, boolean, or\nfunction.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>Returns value of the object or the object itself.</p>\n</div></li></ul></div></div></div></div></div></div></div>","subclasses":[],"component":false,"uses":[],"inheritdoc":null,"mixedInto":[],"files":[{"href":"Object.html#Object","filename":"Object.js"}],"linenr":1,"requires":[],"members":{"event":[],"css_mixin":[],"cfg":[],"method":[{"tagname":"method","owner":"Object","meta":{},"name":"constructor","id":"method-constructor"},{"tagname":"method","owner":"Object","meta":{},"name":"hasOwnProperty","id":"method-hasOwnProperty"},{"tagname":"method","owner":"Object","meta":{},"name":"isPrototypeOf","id":"method-isPrototypeOf"},{"tagname":"method","owner":"Object","meta":{},"name":"propertyIsEnumerable","id":"method-propertyIsEnumerable"},{"tagname":"method","owner":"Object","meta":{},"name":"toLocaleString","id":"method-toLocaleString"},{"tagname":"method","owner":"Object","meta":{},"name":"toString","id":"method-toString"},{"tagname":"method","owner":"Object","meta":{},"name":"valueOf","id":"method-valueOf"}],"property":[{"tagname":"property","owner":"Object","meta":{},"name":"constructor","id":"property-constructor"},{"tagname":"property","owner":"Object","meta":{},"name":"prototype","id":"property-prototype"}],"css_var":[]},"extends":null,"parentMixins":[],"enum":null,"meta":{},"private":null,"name":"Object","inheritable":null,"id":"class-Object","aliases":{},"singleton":false,"mixins":[],"html_meta":{}});