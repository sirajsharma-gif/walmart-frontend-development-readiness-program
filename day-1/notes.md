# Phase 1: Web Foundations

## Day 1: HTML, Accessibility & CSS Fundamentals

## HTML

## Semantic HTML elements and document structure

Semantic tags are types of tags that convey meaning of the content they’re containing. Semantic tags are used to improve the readability, web accessibility and SEO.

- Common replacements for block level `<div>` tag are `<main>`, `<header>`, `<section>`, `<nav>`, `<article>`, `<aside>` and `<footer>`.
- For `<span>` tag `<b>`, `<i>`, `<em>`, `<strong>` can be used, but it is an inline tag which is only used for the visual changes only and doesn't impact the semantics.
- Example structure of document with semantics: -

```HTML
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Page Title</title>
    </head>
    <body>
        <header>
            <h1>Page Heading</h1>
            <nav>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                </ul>
            </nav>
        </header>
        <main>
            <article>
                <h2>Article Title</h2>
                <p>Article Content...</p>
            </article>
            <footer>
                <p>Copyright 2026</p>
            </footer>
        </main>
    </body>
</html>
```

## Accessibility fundamentals

ARIA roles, states, and properties

- ARIA stands for Accessibility Rich Internet Applications
- Its primary goal is to make the web content accessible to people who are using assistive technologies
- Semantic elements can help improve the accessibility of elements like `<button>`, `<nav>` or `<input>` are getting used so there is no need of doing ARIA manually.
- ARIA should only be used to build complex custom UI components like tabs, accordions, dropdowns, or modals.
- There are three pillars of ARIA: -
  - ARIA Roles
    - Roles act as nouns.
    - These are used for assistive technologies to tell them what exactly a generic element is meant to do.
    - role=”button” is used to change the generic element to button.
    - role=”dialog” is used to identify a container as modal or dialog that separates the content from the rest of the page.
    - role=”alert” is used to update the important information (like an error message or success message).
    - `role=”tablist”`, `role=”tab”`, `role=”tabpanel”` Used together to define a custom tabbed interface.
  - ARIA State
    - It acts as dynamic adjective
    - They describe the condition of element that changes based on user interactions
    - aria-expanded=”true/false” Used for dropdown menu or accordion to tell that its currently open or closed
    - aria-hidden=”true” used to hide the elements from screen readers for example a decorative icon.
    - aria-disabled=”true” makes the element interactive for the assistive technologies.
    - aria-checked=”true/false” indicates the current state of custom checkboxes or radio buttons.
  - ARIA Properties
    - It acts as static adjectives
    - It provides extra context, description, or relationship for an element.
    - Unlike states properties do not change on user interaction

- aria-label used for screen readers. Normally used on buttons with icons.
- aria-labelledby Associates a specific element with the unique identifier of another element that functions as its descriptive label.
- aria-describedby It is similar to labelledby but used to provide longer supplementary descriptions (like a helper text below a password input field).

```HTML
<div role="button" tabindex="0" aria-expanded="false" aria-controls="content-panel-1" aria-label="Toggle shipping details">
    Shipping Details
    <svg aria-hidden="true">...</svg>
</div>
<div id="content-panel-1" class="hidden">
    <p>Standard shipping takes 3-5 business days.</p>
</div>
```

## Keyboard navigation patterns

Keyboard navigation patterns dictate how users interact with a web page using only their keyboard.
When building web interfaces, users have standardized expectations for what certain keys will do.

## _Standard Keystroke Expectations_

| Key(s)     | Pattern/Action                                                          | Target Element(s)                                 |
| ---------- | ----------------------------------------------------------------------- | ------------------------------------------------- |
| Tab/Shift  | Moves focus to the<br>next/previous interactive<br>element.             | Links, buttons, form inputs,<br>tabindex=”0”      |
| Enter      | Activates the focused<br>element or submits a form.                     | Links, buttons, submit inputs.                    |
| Space      | Activates a button, selects a<br>checkbox, or scrolls the page<br>down. | Buttons, checkboxes, radio<br>buttons, page body. |
| Arrow Keys | Moves focus within a                                                    | Radio groups, dropdown                            |
|            | grouped, composite<br>component.                                        | options, tabs, sliders.                           |
| Escape     | Cancels a process or closes<br>the current context.                     | Modals, dropdowns, tooltips,<br>pop-ups.          |

## Focus Management

Focus management is the practice of programmatically controlling which element on a web page currently holds the browser's focus.

While native HTML handles focus automatically based on the order of elements in a document. Modern web applications constantly update the UI dynamically; opening modals, deleting list items, or fetching new pages without reloading. If not actively manage where the focus goes during these changes, keyboard and screen reader users can be abruptly thrown to the top of the page or left entirely disoriented.

Focus is managed using tabindex attribute control.

- `tabindex="0"`: Inserts an element into the natural keyboard flow. It is useful for custom components.
- `tabindex="-1"`: Removes an element from the natural keyboard flow (so a user cannot press Tab to reach it).
- `tabindex="1"` (or higher): Setting positive tab indexes forces the browser to jump around the page, breaking the natural, predictable reading order.

_**Note:**_ Within Single Page Applications (SPAs), it is essential to programmatically handle focus using the .focus() method. Since routing transitions do not trigger a full browser reload, the focus remains stagnant while the UI updates, failing to automatically transition to the newly rendered primary content.

## Screen reader considerations

Screen readers do not "read the screen" visually; instead, they interpret a simplified, data-rich version of the page called the Accessibility Tree. Combining Semantic HTML, ARIA, and focus management, helps to build this tree.

Considerations for implementations: -

## _1. Accessibility Tree vs. The Visual DOM_

The browser takes HTML (the DOM) and strips out anything that isn't semantically relevant to create the Accessibility Tree. If an element has no semantic value (like a generic <div> ) and no ARIA attributes, it is effectively invisible to the screen reader's structural navigation, even if it takes up half the visual screen.

## _2. Managing Visibility_

Sometimes content needs to be visible on the screen but hidden from screen readers, or vice-versa. There are few techniques to handle this.

| CSS / HTML<br>Technique               | Visual Result | Screen Reader<br>Result | Best Used For                                                                           |
| ------------------------------------- | ------------- | ----------------------- | --------------------------------------------------------------------------------------- |
| `display: none`                       | Hidden        | Hidden                  | Removing content<br>from the page<br>entirely (e.g.,<br>closed modals).                 |
| `aria-hidden=”true”`                  | Visible       | Hidden                  | Decorative icons<br>alongside text,<br>preventing<br>redundant<br>announcements.        |
| Visually Hidden<br>Class (`.sr-only`) | Hidden        | Read Aloud              | Providing extra<br>context to screen<br>readers without<br>cluttering the visual<br>UI. |

## WCAG 2.1 AA compliance basics

The Web Content Accessibility Guidelines (WCAG) are the internationally recognized standards for creating accessible digital experiences. The guidelines are broken down into three levels of conformance: **A** (minimum), **AA** (the standard legal and industry baseline), and **AAA** (the strictest standard).

## _The Four Pillars: POUR_

Every single WCAG rule maps back to one of four foundational principles. If a website fails any of these principles, users with disabilities will not be able to use it.

| Principle          | Definition                                                                                     | Practical Examples                                                                                               |
| ------------------ | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| **Perceivable**    | Information and UI<br>components must be<br>presentable to users in ways<br>they can perceive. | Providing alt text for images<br>so blind users can "hear" the<br>visuals, or closed captions for<br>deaf users. |
| **Operable**       | User interface components<br>and navigation must be<br>operable.                               | Ensuring the entire site can<br>be navigated using only a<br>keyboard, without relying on<br>a mouse.            |
| **Understandable** | Users must be able to                                                                          | Using clear, simple language                                                                                     |

|            | comprehend the information<br>and the operation of the user<br>interface.                                                      | and ensuring navigation<br>menus behave predictably<br>across the site.                                  |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| **Robust** | Content must be structured<br>properly so it can be<br>interpreted reliably by a wide<br>variety of assistive<br>technologies. | Writing valid, semantic HTML<br>and using ARIA appropriately<br>so screen readers can parse<br>the code. |

_Crucial WCAG 2.1 AA Requirements_

Common baselines for AA compliance: -

- **Color Contrast:** Regular text must have a contrast ratio of at least 4.5:1 against its background. Large text (usually 18pt (24px), or 14pt (18px) if bold) requires a 3:1 ratio.

- **Non-Text Contrast:** UI components (like the border of a text input or a custom checkbox) and meaningful graphics must also meet a 3:1 contrast ratio against adjacent colors.

- **Text Resizing:** Users must be able to zoom text up to 200% without breaking the layout, overlapping text, or losing functionality.

- **Reflow:** Content must be responsive. A user should be able to zoom in to 400% (or view the site on a mobile device) without needing to scroll horizontally to read a single block of text.

- **Keyboard Accessibility:** All interactive elements must be accessible via keyboard. Additionally, there must no "keyboard traps" where a user gets stuck in a component and cannot tab out.

- **Visible Focus:** The keyboard focus indicator must be highly visible and never hidden via CSS without a replacement.

- **Error Identification:** If a user makes an error filling out a form, the error must be clearly identified in text, and suggestions for correction should be provided (e.g., "Email is required" instead of just turning the input box red).

- **Pause, Stop, Hide:** Any moving, blinking, scrolling, or auto-updating information that starts automatically and lasts more than five seconds (like a carousel or background video) must have a mechanism for the user to pause, stop, or hide it.

## SEO fundamentals (meta tags, heading hierarchy, structured data)

Search Engine Optimization (SEO) is the practice of making websites more visible and understandable to search engines like Google or Bing. SEO ensures that search engine crawlers can actually read, categorize, and rank that content correctly.

The three foundational technical SEO pillars are: Meta Tags, Heading Hierarchy, and Structured Data.

## 1. Meta Tags

Meta tags live inside the `<head>` of HTML documents. They are generally invisible to users on the page itself, but they dictate how your page appears in search engine results and social media feeds.

- `<title>` Tag: It defines the clickable link that appears on the Search Engine Results Page (SERP) and the text in the browser tab.
  - **Best Practice:** Keep it under 60 characters so it doesn't get truncated. Include the primary keyword near the beginning, and ensure every page has a unique title.
  - _Example_ : `<title>Best Running Shoes for Flat Feet | ShoeStore</title>`

- **Meta Description:** The short paragraph of text that appears under the title in search results.
  - **Best Practice:** Keep it between 150-160 characters. Write it as a mini-advertisement for the page content, including a clear call to action or summary.

  - _Example:_ `<meta name="description" content="Shop our top-rated running shoes for flat feet. Get free shipping on orders over $50 and 30-day returns.">`

- **Robots Meta Tag:** Tells search engine crawlers what they are allowed to do with a specific page.
  - **Best Practice:** Use index , follow (which is usually the default) to allow crawling and indexing. Use noindex for pages to keep out of search results (like internal search result pages, admin portals pages).

  - _Example:_ `<meta name="robots" content="noindex, nofollow">`

- **Canonical Tag:** Resolves duplicate content issues. If there are the same product accessible via multiple URLs (e.g., with different tracking parameters), the canonical tag tells Google which version is the "master" copy to rank.
  - _Example:_ `<link rel="canonical" href="https://www.example.com/shoes/running">`

- **Open Graph Tags:** While standard SEO tags are designed to communicate with search engines like Google, Open Graph tags are designed to communicate with social media platforms and messaging apps.
  - `og:title`: The title of page as it should appear in the social graph. It is often similar to your SEO title but can be shorter.

  - `og:description`: A one to two-sentence summary of the content. Like the SEO meta description, this should be compelling and click-driven.

  - `og:image`: This specifies the image that will appear in the link preview.

- `og:url`: The canonical URL of the page. This ensures that even if tracking parameters are added to the link, the "likes" and "shares" are attributed to a single, master URL.

- `og:type`: Describes the type of content being shared. For most web pages, this is just a "website". For blog posts or news, use "article".

- ○ Code example: -

```HTML

<meta property="og:title" content="A Comprehensive Guide to Coffee Roasting">
<meta property="og:description" content="Learn the difference between light, medium, and dark roasts, and how to roast your own beans at home.">
<meta property="og:image" content="https://www.example.com/images/coffee-roasting-og.jpg">
<meta property="og:url" content="https://www.example.com/blog/coffee-roasting">
<meta property="og:type" content="article">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="A Comprehensive Guide to Coffee Roasting">
<meta name="twitter:description" content="Learn the difference between light, medium, and dark roasts, and how to roast your own beans at home.">
<meta name="twitter:image" content="https://www.example.com/images/coffee-roasting-og.jpg">
```

## 2. Heading Hierarchy

Search engines rely heavily on heading tags ( `<h1>` through `<h6>` ) to comprehend the structure and topical relevance of content.

- The `<h1>` Tag: This is the main title of content. It holds the most SEO weight among headings.
  - **Rule:** There should generally be only one `<h1>` per page, and it should clearly state the page's primary topic.

- The `<h2>` through `<h6>` Tags: These define subtopics and sub-subtopics. They must be nested logically, just like an outline for a term paper.
  - **Rule:** Never skip heading levels purely for styling purposes (e.g., jumping from an `<h1>` to an `<h4>` ). Use CSS to change the visual size, but keep the HTML structure sequential.

- Structure Example:

```HTML
<h1>Comprehensive Guide to Coffee Roasting</h1>
    <h2>Types of Coffee Beans</h2>
        <h3>Arabica</h3>
        <h3>Robusta</h3>
    <h2>The Roasting Process</h2>
        <h3>Light Roast</h3>
        <h3>Dark Roast</h3>
```

3. Structured Data (JSON-LD)

Structured data (often referred to as Schema Markup) is a standardized format for providing explicit information about a page and classifying the page content.

Most modern structured data is written in **JSON-LD** (JavaScript Object Notation for Linked Data) and placed inside a `<script>` tag in the `<head>` or `<body>`.

- This is used to make search **Rich Results** instead of link and description. For example star ratings, recipe cooking, event dates, product prices directly on search results.

- Common Schema Types:
  - **Product:** Displays price, availability, and review ratings.
  - **Article/NewsArticle:** Helps content appear in the "Top Stories" carousel.
  - **Recipe:** Displays cooking time, calories, and a thumbnail image.
  - **LocalBusiness:** Provides address, opening hours, and contact info.
  - **FAQPage:** Displays a dropdown list of questions and answers directly on the search results page.
- JSON-LD Example: -

```HTML
<script type="application/ld+json">
    {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "Super Fast Running Shoes",
        "image": "https://example.com/photos/1x1/photo.jpg",
        "description": "Lightweight running shoes for flat feet.",
        "brand": {
            "@type": "Brand",
            "name": "ShoeStore"
        },
        "offers": {
            "@type": "Offer",
            "url": "https://example.com/shoes/running",
            "priceCurrency": "USD",
            "price": "119.99",
            "availability": "https://schema.org/InStock"
        }
    }
</script>
```

## HTML Best Practices

Best practices ensure code is accessible, performant, and easy to read.

1. Document Setup and Boilerplate
   - The **DOCTYPE:** The very first line of your document must be `<!DOCTYPE html>`. This forces the browser to render the page in standards mode.

   - **Specify the document language:** Always include the lang attribute on the root `<html>` element (e.g., `<html lang="en">`). This is critical for screen readers and search engines.

   - **Set the character encoding:** Include `<meta charset="UTF-8">` as the very first tag inside `<head>`. This ensures the browser safely renders special characters and emojis.

   - **Include the viewport meta tag:** To ensure site scales correctly on mobile devices, include `<meta name="viewport" content="width=device-width, initial-scale=1.0">`.

2. Code Style and Syntax

HTML is flexible and there is no hard rule to write specific syntax but writing strict consistent syntax prevents unpredictable bugs.

- Using lowercase for all tags and attributes (`<main>`, href).
- Always wrap attribute values in double quotes (`class="btn"`).
- Consistently indent nested elements (usually 2 or 4 spaces) to show parent-child relationships.
- Omit the trailing slash in HTML5 (`<br>`, `<img src="...">`).
- Leave comments ( `<!-- Some comment -->` ) to explain complex sections or logical groupings.

3. Performance and Loading
   Structure of HTML directly impacts how fast the page loads for the user.

- **Load CSS in the <head> :** Always link stylesheets at the top of the document. This prevents the "Flash of Unstyled Content" (FOUC) where the user momentarily sees naked HTML before the styles kick in.
- **Load JavaScript carefully:** Scripts block the browser from rendering HTML until they finish downloading and executing. Either place `<script>` tags right before the closing `</body>` tag, or place them in the `<head>` using the defer or async attributes.

- **Preload critical assets:** Use `<link rel="preload">` in `<head>` to tell the browser to fetch high-priority resources (like main font or a hero image) immediately.

## CSS Fundamentals

Box model, positioning, specificity, cascade

### 1. Box Model

The box model consists of four layers, working from the inside out:

- **Content:** The actual text, image, or child elements inside the box.

- **Padding:** Transparent space inside the box, between the content and the border. Background colors will show through the padding.

- **Border:** The edge of the box. It wraps around the padding and content.

- **Margin:** Transparent space outside the box. It pushes other elements away. Background colors do not show in the margin.

If an element is set to width: 100px and add 20px of padding, the actual rendered width becomes 140px (100 + 20 left + 20 right). To force CSS to include the padding and border within the 100px width, always apply box-sizing: border-box; to elements.

### 2. Positioning

The position property dictates how an element behaves within the document's normal layout flow.

| Property | Behaviour                                                                                                                                                                         | Use Case                                                                                    |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| static   | The default. The element<br>sits in the normal<br>document flow.<br>Top/right/bottom/left<br>properties do nothing.                                                               | Standard text and layout<br>blocks.                                                         |
| relative | Sits in the normal flow, but<br>can use<br>top/right/bottom/left to<br>nudge it relative to where it<br>would have been. It leaves<br>a "ghost" space where it<br>originally was. | Nudging elements slightly,<br>or setting up a parent<br>container for absolute<br>children. |
| absolute | Removed from the normal<br>flow (other elements ignore<br>it). It positions itself relative<br>to its closest positioned<br>ancestor (any parent not<br>static).                  | Dropdown menus, tooltips,<br>or custom UI overlays.                                         |
| fixed    | Removed from normal<br>flow. Positions itself<br>relative to the browser<br>window (viewport). It stays<br>in place when the user<br>scrolls.                                     | Sticky navigation bars or<br>"back to top" buttons.                                         |
| sticky   | Acts like arelativeuntil<br>the user scrolls past a<br>specified point, at which<br>time it "sticks" to the<br>screen likefixed.                                                  | Table headers that stay<br>visible as users scroll down<br>a long list.                     |

### 3. Specificity

When two CSS rules that target the exact same element are getting applied, the browser uses a scoring system called Specificity to decide which rule wins. The rule with the highest score is applied.

Scoring is in four columns: (Inline, IDs, Classes, Elements)

1. **Inline Styles(`style=”...”`):** Score = 1, 0, 0, 0
2. **IDs (`#header`):** Score = 0, 1, 0, 0.

3. **Classes, Attributes, and Pseudo-classes (`.btn, [type="text"]`,**
   - **`:hover` ):** Score = 0, 0, 1, 0.

4. **Elements and Pseudo-elements (`div, h1, ::before` ):** Score = 0, 0, 0, 1.

_**Example:**_ A class selector `.my-text` (Score: 0, 0, 1, 0) will always overpower an element selector `p` (Score: 0, 0, 0, 1), even if the `p` rule is written lower down in the stylesheet.

### 4. Cascade

The Cascade determines how styles are applied when specificities are exactly equal, or when properties are left undeclared. It relies on two main factors:

- **Source Order:** If two rules have the exact same specificity score, the one written last (closest to the bottom of the stylesheet) wins. The browser reads top-to-bottom, so the last instruction overrides previous ones.

- **Inheritance:** Some CSS properties naturally flow down the DOM tree from parent to child, while others do not.
  - _Inherited:_ Typography properties (like color , font-family , font-size , line-height ). If set color: red; on the `<body>` , all text inside will be red unless overridden.

  - _Not Inherited:_ Layout properties (like margin , padding , border , width ). If there is a border on a `<div>`, the `<p>` inside it does not automatically get a border.

15

## Responsive Design Principles

Responsive Web Design (RWD) is the practice of building a website so that it automatically adapts its layout, content, and functionality to fit the screen size and capabilities of the device it is being viewed on.

Principles that for responsive design: -

## Viewport Meta Tag

By default, smartphones will try to render a desktop-width page (usually around 980px wide) and shrink it down.

Placing this meta tag in HTML `<head>` forces the browser to use the device's actual width and sets the initial zoom scale to 100%:

`<meta name="viewport" content="width=device-width, initial-scale=1.0">`

## Fluid Grids and Relative Units

In the past, developers used fixed absolute units, like setting a container to `width: 800px;`. In responsive design, relative units are used so elements can stretch and shrink dynamically.

- **Percentages (%):** Sizing an element relative to its parent container (e.g., width: 50% means it takes up half of the container, regardless of screen size).

- **Viewport Units (vw, vh):** Sizing an element relative to the browser window itself (e.g., height: 100vh makes a hero section exactly as tall as the user's screen).

- **Root Em (rem):** Sizing typography and spacing relative to the root document's font size, ensuring text scales cleanly for accessibility.

## Flexible Media

Images and videos are inherently rigid. If an image is 600px wide, but the user's screen is only 400px wide, the image will break out of its container and cause horizontal scrolling.

To make media fluid, a simple CSS rule. This tells the image to scale down if its container shrinks, but never to stretch larger than its original resolution:

```CSS
img,
video {
    max-width: 100%;
    height: auto;
}
```

## CSS Media Queries

Media queries act as conditional logic for CSS. Media queries allow to apply the specific styles only when the browser meets certain criteria, most commonly, the width of the screen. The points at which the layout changes are called **breakpoints** .

```CSS
/* Base styles for mobile devices go here */
.sidebar {
    display: none;
}

/* When the screen is 768px or wider, apply these styles */
@media (min-width: 768px) {
    .sidebar {
        display: block;
        width: 25%;
    }
}
```

## Mobile First Workflow

When writing responsive CSS, there are two choices: build the desktop version first and shrink it down, or build the mobile version first and expand it. The industry standard is **Mobile-First** .

- **Mobile-First (`min-width`):** Start with base styles for small screens, add complexity as the screen gets wider.

- **Desktop-First (`max-width`):** Start with complex desktop styles, write code to undo/hide them on small screens.

## Flexbox layout

CSS Flexbox (Flexible Box Layout Module) is a one-dimensional layout system designed to distribute space dynamically and align items within a container. There are two axes in Flexbox: -

- **The Main Axis:** Defined by the flex-direction property. If items are laid out in a row (left to right), the main axis is horizontal. If they are in a column (top to bottom), the main axis is vertical.

- **Cross Axis:** This line runs perpendicular to the main axis. If the main axis is a horizontal row, the cross axis is vertical.

## Grid Layout

CSS Grid is a two-dimensional layout system. It allows to dictate both rows and columns simultaneously, making it the most powerful architectural tool available in CSS.

## Grid Container

Grid relies on a parent-child relationship. Its parent property starts with display: grid; to the parent container. Once active, the rows and columns (tracks) can be defined that make up the grid.

## fr Unit

CSS Grid introduced a new responsive unit specifically for grid layouts: the Fractional Unit ( `fr` ). It represents a fraction of the available free space in the grid container.

```CSS
/* Creates 3 columns and 2 rows. The middle one is twice as wide as the outer two. */

grid-template-columns: 1fr 2fr 1fr;
grid-template-rows: 2fr 1fr;
```

## Media queries and mobile-first design

Media query acts like an if statement in programming. It allows you to apply a block of CSS rules only if the browser meets the specific conditions.

## Syntax: -

```CSS
@media (condition) {
    /* CSS rules go here and only apply if condition is ture */
}
```

Mobile-First Design

In the Mobile-First Design HTML structure is written with the perspective of desktop application and CSS is written with perspective of mobile application. All the CSS is written for the mobile first and then overridden with the `@media (min-width: ...)` media query wherever is necessary.

Mobile-First CSS example: -

```CSS
/** =========================================
**  1. BASE STYLES (Mobile First) Applied to ALL screens,
**  starting with phones.
**  =========================================
*/
.container {
    padding: 1rem;
}

.main-navigation {
    display: flex;
    flex-direction: column; /* Stack links vertically on phones */
    gap: 10px;
}

.sidebar {
    display: none; /* Hide the sidebar on small screens to save space */
}

/* =========================================
** 2. TABLET BREAKPOINT Triggers when the screen reaches 768px wide.
** =========================================
*/
@media (min-width: 768px) {
    .container {
        padding: 2rem;
    }

    .main-navigation {
        flex-direction: row; /* Un-stack the links to sit side-by-side */
        justify-content: space-between;
    }
}

/* =========================================
** 3. DESKTOP BREAKPOINT
** Triggers when the screen reaches 1024px wide.
** =========================================
*/
@media (min-width: 1024px) {
    .sidebar {
        display: block; /* Reveal the sidebar on large screens */
        width: 300px;
    }
}
```

CSS custom properties (variables)

CSS Custom Properties (commonly known as CSS variables) allows you to store specific values, like colors, font families, or spacing measurements in one central location and reuse them throughout the entire stylesheet.

```CSS
:root {
    --primary-brand: #2563eb;
    --text-main: #1f2937;
    --bg-color: #ffffff;
    --base-spacing: 1.5rem;
    --heading-font: 'Montserrat', sans-serif;
}

body {
    background-color: var(--bg-color);
    color: var(--text-main);
    padding: var(--base-spacing);
}

h1 {
    font-family: var(--heading-font);
    color: var(--primary-brand);
}

.danger-button {
    /* This variable only exists inside the .danger-button component */
    --btn-color: #dc2626;
    background-color: var(--btn-color);
    padding: var(--base-spacing); /* It can still access global variables from :root */
}
```
