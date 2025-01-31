# Dynamic HTML Structure with JavaScript

This project dynamically creates a structured HTML document using a JavaScript object representation of the DOM. The `createDom` function takes an object describing the HTML structure and converts it into actual DOM elements, appending them to the `document.body`.

## Features

- Converts a nested JavaScript object into real HTML elements.
- Supports attributes like `id` and `class`.
- Handles different HTML elements including headers, sections, lists, and paragraphs.
- Supports text content within elements.

## How It Works

1. The `obj` variable defines an article structure, including a header, sections, and a footer.
2. The `createDom` function recursively traverses this object to build corresponding HTML elements.
3. The `buildElement` function:
   - Creates an element based on `type`.
   - Sets attributes from `attributes`.
   - Recursively processes child elements or text content.
4. The final structure is appended to the `document.body`.

## Usage

Include the JavaScript code in an HTML file and call `createDom(obj)` with an object structured correctly. The function will generate the HTML structure dynamically.

## Example Output

When executed, the script will generate the following HTML structure:

```html
<article id="blog-post" class="post">
  <header>
    <h1>Understanding JavaScript</h1>
    <p>Posted on: January 1, 2024</p>
  </header>
  <section>
    <h2>Introduction</h2>
    <p>
      JavaScript is a versatile language widely used for web development. In
      this article, we will explore its core features and capabilities.
    </p>
  </section>
  <section>
    <h2>Features</h2>
    <ul>
      <li>Dynamic typing</li>
      <li>Prototype-based inheritance</li>
      <li>First-class functions</li>
      <li>Event-driven programming</li>
    </ul>
  </section>
  <footer>
    <p>Thank you for reading!</p>
  </footer>
</article>
```

## Possible Improvements

- Add error handling for invalid structures.

## Author

This project demonstrates the use of JavaScript to dynamically construct and manipulate the DOM, making it useful for generating structured HTML from data representations.
