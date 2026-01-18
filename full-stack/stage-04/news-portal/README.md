<h1 align="center">News Portal</h1>

<p align="center">
A responsive news portal project focused on semantic HTML, CSS Grid layouts, and scalable utility-first styling using modern CSS architecture.
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

[News Portal](https://diegommagno.com/github/rocketseat/full-stack/stage-04/news-portal)

<br/>

<p align="center">
  <img alt="UI preview" src="./.github/preview-cover.png" width="80%" />
</p>

<br/>

<h3 id="layout">🎨 Layout</h3>
<hr style="opacity: 0.3;" />

- View the design layout [here](https://www.figma.com/community/file/1362166020452569562).

<br/>

<h3 id="technologies">⚙️ Technologies</h3>
<hr style="opacity: 0.3;" />

- HTML5
- CSS3

<br/>

<h3 id="concepts-and-skills">📚 Concepts and Skills</h3>
<hr style="opacity: 0.3;" />

- Semantic HTML structure using meaningful elements such as `header`, `nav`, `main`, `section`, `article`, `figure`, `figcaption`, and `aside`, improving content hierarchy, accessibility, and SEO

- Grid-first layout architecture, leveraging CSS Grid as the primary layout system for page composition, section alignment, and responsive content distribution

- Advanced Grid techniques, including:
  - `grid-auto-flow: column` for horizontal content flow
  - Explicit column definitions with `grid-template-columns`
  - Section-based grid areas to organize main content and sidebar (`featured`, `weekly`, `ai`, `aside`)

- Utility-first CSS approach for layout and typography, enabling fast composition and consistent spacing using reusable classes such as:
  - `.grid`, `.grid-flow-col`, `.grid-cols-2`
  - `.gap-16`, `.gap-32`
  - `.text-sm`, `.text-lg`, `.text-xl`, `.text-2xl` 

- Modular CSS architecture using `@import` to separate responsibilities across multiple files, improving maintainability and scalability:
  - Global resets and design tokens (`global.css`)
  - Layout and typography utilities (`utility.css`)
  - Section-specific styling (`sections.css`, `header.css`)

- Design system built with CSS Custom Properties (`:root`) to centralize typography, color palette, spacing, and visual consistency across the entire application

- Consistent typographic system using variable-based font definitions (`--h1`, `--h2`, `--h3`, `--text-sm`), allowing scalable and predictable text styling

- Responsive container strategy using `max-width`, `padding-inline`, and centered layouts to ensure readability across large and wide screens

- Component-based styling patterns, including reusable content blocks such as news cards, content tags, and repeated article layouts

- Image handling best practices with fluid images (`max-width: 100%`) to prevent overflow and preserve layout integrity

- Clear separation between structure (HTML) and presentation (CSS), reinforcing clean, maintainable front-end architecture
