1. When a user enters an URL in the browser, how does the browser fetch the desired result ? Explain this with the below in mind and Demonstrate this by drawing a diagramfor the same.

a.What is the main functionality of the browser?
b.High Level Components of a browser.
c.Rendering engine and its use.
d.Parsers (HTML, CSS, etc)
e.Script Processors
f.Tree construction
g.Order of script processing
h.Layout and Painting

Answer:-
When a user enters an URL in the browser, how does the browser fetch the desired result ?

-When you type any URL you basically want to reach the server where the website is hosted.

- Client makes a request to DNS in order to obtain IP address.
  Same IP is used to locate server. Here comes a client server architecture, where server returns HTTP response.(Refer Diagram-2 client-server)
  Server would be having some pre-created HTML, CSS, JS and other files which will be send as response to clinet and loaded into browser.

-DNS checkes IP address at 4 different locations as below.
Browser Cache, OS Cache, Router Cache,ISP(Internet Service Provider) Cache.

-Once IP is found, browser initiates TCP connection with server. (Sync, sync+ack, ack)
-Browser sends HTTP request to server.
-The server handles the incoming request and sends an HTTP response.
-The browser displays the HTML content

The browser's main components are:

-The user interface: this includes the address bar, back/forward button, bookmarking menu, etc. Every part of the browser display except the window where you see the requested page.
-The browser engine: marshals actions between the UI and the rendering engine.
-The rendering engine: responsible for displaying requested content. For example if the requested content is HTML, the rendering engine parses HTML and CSS, and displays the parsed content on the screen.
-Networking: for network calls such as HTTP requests, using different implementations for different platform behind a platform-independent interface.
-UI backend: used for drawing basic widgets like combo boxes and windows. This backend exposes a generic interface that is not platform specific. Underneath it uses operating system user interface methods.
JavaScript interpreter. Used to parse and execute JavaScript code.
-Data storage. This is a persistence layer. The browser may need to save all sorts of data locally, such as cookies. Browsers also support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem.

RENDERING ENGINE AND Its USE:-
Rendering engines are the softwares that help browsers to load the response(HTML,CSS) onto browser.
Rendering steps include style, layout, paint and, in some cases, compositing.(Diagram-4-RenderingEngine) 
The CSSOM and DOM trees created in the parsing step are combined into a render tree which is then used to compute the layout of every visible element, which is then painted to the screen.
The browser also creates a render tree with HTML file, styling is done with css file and so on.
Every browser has its own unique rendering engine.
Rendering engines might also differ for different browser versions. The list below mentions browser engines used by a few common browsers:

Google Chrome and Opera v.15+: Blink
Internet Explorer: Trident
Mozilla Firefox: Gecko
Chrome for iOS and Safari: WebKit

Parsers and its importance:-

-Parsing means analyzing and converting a program into an internal format that a runtime environment can actually run, for example the JavaScript engine inside browsers.

-Parsing is the step the browser takes to turn the data it receives over the network into the DOM and CSSOM, which is used by the renderer to paint a page to the screen.(Diagram-3-Tree_construction)
-The browser parses HTML into a DOM tree. HTML parsing involves tokenization and tree construction.
-Parsing can continue when a CSS file is encountered, but <script> tags—particularly those without an async or defer attribute—blocks rendering, and pauses parsing of HTML.

SCRIPT PROCESSORS:-

The script processor executes Javascript code to process an event. The processor uses a pure Go implementation of ECMAScript 5.1 and has no external dependencies.

Tree construction:-

The input to the tree construction stage is a sequence of tokens from the tokenization stage. The tree construction stage is associated with a DOM
Document object when a parser is created.
The "output" of this stage consists of dynamically modifying or extending
that document's DOM tree.

Order of script processing:-

When the browser processes an HTML document, it does so from top to bottom.
The browser loads the html (DOM) at first.
If a <script> is met, the loading will be blocked and wait until the JS file is loaded and executed and then continue.(Async and differ may have different response)
Other resources (CSS/images) are loaded in parallel and executed if needed (like CSS).

LAYOUT AND PAINTING:-
Further, the render tree goes through the layout process. When a render tree is created, the position or size values are not assigned. The entire process of calculating values for evaluating the desired position is called a layout process. In this process, every node is assigned the exact coordinates. This ensures that every node appears at an accurate position on the screen.

The final step is to paint the screen, wherein the render tree is traversed, and the renderer’s paint() method is invoked, which paints each node on the screen using the UI backend layer.
