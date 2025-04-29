# Background and Motivation

The user is experiencing issues with image display on a blog post detail page. The main hero image uses the `.blog-hero-image` class, while inline images in the post body are unstyled. There are conflicting CSS rules for `.blog-hero-image`, and no global `img` rule, leading to inconsistent image sizing and layout. The goal is to ensure all images are styled consistently and responsively, with clear separation between hero and inline images.

# Key Challenges and Analysis

- Two `.blog-hero-image` rules exist in the CSS, one with `height: 400px` and one with `height: auto`, which may cause specificity/order issues.
- Inline images in the post body do not have a special class and inherit only browser defaults.
- No global `img` rule exists, so inline images may not be styled as intended.
- Need to ensure mobile responsiveness for both hero and inline images.

# High-level Task Breakdown

1. **Document Current CSS Rules and Usage**
   - List all CSS rules for `.blog-hero-image` and `img`.
   - Identify which rule is applied last and its effect.
   - Success: Clear documentation of current state.

2. **Define Desired Image Behavior**
   - Specify how hero images and inline images should appear (size, aspect ratio, responsiveness).
   - Success: Written requirements for both image types.

3. **Propose and Implement CSS Refactor**
   - Remove or merge duplicate/conflicting `.blog-hero-image` rules.
   - Add a global `img` rule or utility class for inline images as needed.
   - Ensure mobile responsiveness for all images.
   - Success: CSS changes made and committed.

4. **Test on Blog Post and Other Pages**
   - Verify hero and inline images display as intended on the blog post page and other pages.
   - Check for unintended side effects.
   - Success: All images display correctly and responsively.

# Project Status Board

- [x] Document current CSS rules and usage
- [x] Define desired image behavior
- [x] Propose and implement CSS refactor
- [x] Test on blog post and other pages (issues found)
- [x] Implement fixes for hero image height and hero section width
- [x] Implement fix for .hero-section width and alignment

# Planner: New Issues Identified (Header Quote & Article Centering)

## Issues
1. The quote under the name (header-quote) is too large and wraps awkwardly on smaller screens.
2. The article is not centered on the page at certain viewport sizes.

## Selected Solutions
- **Header Quote:** Option 1 — Reduce the font size of `.header-quote` on smaller screens using a media query.
- **Article Centering:** Option 1 — Ensure the article container uses `margin: 0 auto` and a `max-width` that matches the design intent.

## Next Steps
- Switch to executor mode and implement the selected fixes.

# Executor's Feedback or Assistance Requests

- CSS refactor complete: unified .blog-hero-image and inline img styles for responsiveness and consistency. Removed duplicate/conflicting .blog-hero-image rule. Added global img rule.
- Testing revealed the following issues:
  1. The hero image on the home page is too tall.
  2. The hero image on the Appalachian Trail page is too tall.
  3. The hero image on the Transcen.Digital page is wider than the menu/sidebar (overflows the intended content area).
- Fixes implemented:
  - Added max-height: 350px to .blog-hero-image and .article-image.
  - Set .hero-section to max-width: var(--max-width), width: 100%, margin: 0 auto, box-sizing: border-box, and padding to match main content.
  - Added responsive padding for .hero-section at max-width: 768px.
- Next step: Test the Transcen.Digital page again to confirm the fix.

## Documentation of Current CSS Rules and Usage

### .blog-hero-image
- First occurrence (line ~137):
  ```css
  .blog-hero-image {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 12px;
    margin-bottom: 2rem;
  }
  ```
- Second occurrence (line ~782):
  ```css
  .blog-hero-image {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 12px;
    margin-bottom: 2rem;
  }
  ```
- The second rule (with `height: auto;`) is applied last and will override the first for most cases, making the hero image responsive in height but possibly not matching the intended fixed height on desktop.

### img
- There is **no global `img { ... }` rule** in the CSS. Inline images in blog content are unstyled except for browser defaults and any inherited styles.

### .article-image
- For reference, `.article-image` (used in blog cards) is defined as:
  ```css
  .article-image {
    width: 100%;
    height: 300px;
    object-fit: cover;
    display: block;
    margin: 0;
  }
  ```

#### Summary
- The `.blog-hero-image` class has conflicting rules; the last one (height: auto) wins.
- Inline images have no explicit styling.
- `.article-image` uses a fixed height (300px), which is not consistent with `.blog-hero-image` (auto or 400px).

**Next step:** Define desired image behavior for hero and inline images.

# Lessons
- Always check for duplicate/conflicting CSS rules.
- Inline images may need explicit styling for consistency.
- Test image display on multiple devices and pages.

## Desired Image Behavior
- **Hero images and inline images should not exceed the width of the article.**
- **Both types of images should be the same size and be responsive.**
- Images should scale down on smaller screens and always fit within the article content area.
- No fixed height; aspect ratio should be preserved.
- Images should not overflow or cause horizontal scrolling.

**Next step:** Propose and implement a CSS refactor to achieve this behavior.
