<h1 align="center">Enrollment Form</h1>

<p align="center">
A multilingual enrollment form project focused on semantic HTML, modular CSS architecture, accessibility, and language switching using vanilla JavaScript
</p>

<p align="center">
  <a href="#live-preview">Live Preview</a>&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;
  <a href="#layout">Layout</a>&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;
  <a href="#technologies">Technologies</a>&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;
  <a href="#concepts-and-skills">Concepts and Skills</a>
</p>

<br/>

<p align="center">
  <img alt="Project cover" src="./.github/cover.png" width="80%" />
</p>

<br/>

<h3 id="live-preview">🌐 Live Preview</h3>
<hr style="opacity: 0.3;" />
<p>Access the deployed version of the project.</p>

[Enrollment Form](https://diegommagno.com/github/rocketseat/full-stack/stage-04/enrollment-form)

<br/>

<p align="center">
  <img alt="UI preview" src="./.github/preview-cover.png" width="80%" />
</p>

<br/>

<h3 id="layout">🎨 Layout</h3>
<hr style="opacity: 0.3;" />

- View the design layout [here](https://www.figma.com/community/file/1365016793556649696).

<br/>

<h3 id="technologies">⚙️ Technologies</h3>
<hr style="opacity: 0.3;" />

- HTML5
- CSS3 (modern CSS with native nesting)
- JavaScript (ES Modules)

<br/>

<h3 id="concepts-and-skills">📚 Concepts and Skills</h3>
<hr style="opacity: 0.3;" />

- Semantic and accessible HTML structure using `main`, `aside`, `form`, `fieldset`, `legend`, and proper label associations

- Complete enrollment form with multiple input types:
  - Text, email, phone, date
  - Select, textarea
  - Radio buttons with custom UI
  - Checkbox with custom SVG states
  - File upload (drag-and-drop area)

- Modular and scalable CSS architecture:
  - Global styles (`global.css`)
  - Page-level styles (`index.css`, `forms.css`)
  - Field-specific styles organized in `css/fields/` (input, radio, droparea, buttons, checkbox)

- Design system built with CSS Custom Properties (`:root`) for:
  - Colors
  - Typography
  - Spacing
  - Border radius and focus states

- Native CSS nesting for better readability and maintainability without preprocessors

- Custom form controls using SVG backgrounds and `appearance: none` techniques

- Flexbox-based layouts for responsive alignment and form grouping

- Accessible custom components:
  - Radio groups with keyboard navigation
  - Checkbox with focus and hover states
  - Error feedback with icons and text

- Multilingual-ready structure with separate language entry points (`/`, `/pt`, `/fr`)

- Language selector implemented in vanilla JavaScript:
  - Toggle menu behavior
  - Click outside to close
  - Accessible button semantics

- Separation of concerns between UI behavior (`lang-selector.js`) and application bootstrap (`main.js`)

- SVG-first approach for icons and illustrations for crisp rendering and easy theming