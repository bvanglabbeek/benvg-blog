# Test info

- Name: Footer >> should display LinkedIn social link with correct URL
- Location: /Users/bvanglabbeek/Code/benvg-blog/tests/footer.spec.ts:4:3

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toHaveAttribute(expected)

Locator: getByRole('link', { name: /linkedin/i })
Expected string: "https://linkedin.com/in/bvanglabbeek"
Received string: "https://linkedin.com/in/ben-van-glabbeek/"
Call log:
  - expect.toHaveAttribute with timeout 5000ms
  - waiting for getByRole('link', { name: /linkedin/i })
    9 × locator resolved to <a target="_blank" class="social-link" rel="noopener noreferrer" data-astro-source-loc="16:8" aria-label="Connect on LinkedIn" href="https://linkedin.com/in/ben-van-glabbeek/" data-astro-source-file="/Users/bvanglabbeek/Code/benvg-blog/src/components/Footer.astro">↵LinkedIn↵</a>
      - unexpected value "https://linkedin.com/in/ben-van-glabbeek/"

    at /Users/bvanglabbeek/Code/benvg-blog/tests/footer.spec.ts:8:28
```

# Page snapshot

```yaml
- banner:
  - heading "Ben van Glabbeek" [level=1]
  - paragraph: "'If you want to build a ship... teach them to yearn for the vast and endless sea' - Antoine de Saint-Exupéry"
  - navigation:
    - list:
      - listitem:
        - link "Home":
          - /url: /
      - listitem:
        - link "Appalachian Trail":
          - /url: /appalachian-trail
      - listitem:
        - link "Transcen.Digital":
          - /url: /transcen-digital
      - listitem:
        - link "About":
          - /url: /about
- main:
  - article:
    - 'link "Navigating Uncertainty: Harness the Power of Frequent Customer Feedback"':
      - /url: /blog/navigating-uncertainty
      - 'img "Navigating Uncertainty: Harness the Power of Frequent Customer Feedback"'
    - 'link "Navigating Uncertainty: Harness the Power of Frequent Customer Feedback Do you ever feel lost in the ever-changing business landscape? You’re not alone. Navigating this ever-changing world can feel like an impossible task. The untapped power of frequent customer feedback can help shine the path. As wonderful as feedback is, it’s overwhelming. How do you structure it, organize, and absorb it in an effective way?..."':
      - /url: /blog/navigating-uncertainty
      - 'heading "Navigating Uncertainty: Harness the Power of Frequent Customer Feedback" [level=2]'
      - paragraph: Do you ever feel lost in the ever-changing business landscape? You’re not alone. Navigating this ever-changing world can feel like an impossible task. The untapped power of frequent customer feedback can help shine the path. As wonderful as feedback is, it’s overwhelming. How do you structure it, organize, and absorb it in an effective way?...
    - link "Agile Methods":
      - /url: /category/agile-methods
    - link "Culture":
      - /url: /category/culture
    - link "Read More":
      - /url: /blog/navigating-uncertainty
  - article:
    - link "My New Cozy Blanket":
      - /url: /blog/my-new-cozy-blanket
      - img "My New Cozy Blanket"
    - link "My New Cozy Blanket IIt’s a tranquil evening, with a crackling fire in the background. You are comfortably nestled on the couch, free to choose your adventure, whether it’s diving into a book, enjoying a captivating movie, or simply dozing off. These moments of blissful relaxation and safety are rare gems in our fast-paced lives. But what if we...":
      - /url: /blog/my-new-cozy-blanket
      - heading "My New Cozy Blanket" [level=2]
      - paragraph: IIt’s a tranquil evening, with a crackling fire in the background. You are comfortably nestled on the couch, free to choose your adventure, whether it’s diving into a book, enjoying a captivating movie, or simply dozing off. These moments of blissful relaxation and safety are rare gems in our fast-paced lives. But what if we...
    - link "AI":
      - /url: /category/ai
    - link "Read More":
      - /url: /blog/my-new-cozy-blanket
  - article:
    - link "We All Want to Be Explorers and Dreamers":
      - /url: /blog/we-all-want-to-be-explorers-and-dreamers
      - img "We All Want to Be Explorers and Dreamers"
    - 'link "We All Want to Be Explorers and Dreamers One of my favorite quotes hails from Antoine de Saint-Exupéry author of The Little Prince: “If you want to build a ship, don’t drum up the people to gather wood, divide the work, and give orders. Instead, teach them to yearn for the vast and endless sea.” This not merely a set of words, but..."':
      - /url: /blog/we-all-want-to-be-explorers-and-dreamers
      - heading "We All Want to Be Explorers and Dreamers" [level=2]
      - paragraph: "One of my favorite quotes hails from Antoine de Saint-Exupéry author of The Little Prince: “If you want to build a ship, don’t drum up the people to gather wood, divide the work, and give orders. Instead, teach them to yearn for the vast and endless sea.” This not merely a set of words, but..."
    - link "Agile Methods":
      - /url: /category/agile-methods
    - link "Culture":
      - /url: /category/culture
    - link "Read More":
      - /url: /blog/we-all-want-to-be-explorers-and-dreamers
  - article:
    - link "How to Build Social Capital":
      - /url: /blog/how-to-build-social-capital
      - img "How to Build Social Capital"
    - link "How to Build Social Capital In my previous post, The Value of Social Capital, I introduced the concept and how it contributes to team success. Now, I want to delve deeper into this topic and share some actionable strategies to create and enhance social capital within your team. Building social capital is akin to creating a durable, unified structure out of...":
      - /url: /blog/how-to-build-social-capital
      - heading "How to Build Social Capital" [level=2]
      - paragraph: In my previous post, The Value of Social Capital, I introduced the concept and how it contributes to team success. Now, I want to delve deeper into this topic and share some actionable strategies to create and enhance social capital within your team. Building social capital is akin to creating a durable, unified structure out of...
    - link "Culture":
      - /url: /category/culture
    - link "Read More":
      - /url: /blog/how-to-build-social-capital
  - article:
    - link "The Value Social Capital":
      - /url: /blog/the-value-of-social-capital
      - img "The Value Social Capital"
    - link "The Value Social Capital Recently I have been exploring what makes great teams and I came across a compelling concept – social capital. This notion, gleaned from the book Beyond Measures, posits that it’s not merely individual abilities or unique skills that set exceptional teams apart. Indeed, the metaphor of a brick wall illustrates this perfectly. While the ...":
      - /url: /blog/the-value-of-social-capital
      - heading "The Value Social Capital" [level=2]
      - paragraph: Recently I have been exploring what makes great teams and I came across a compelling concept – social capital. This notion, gleaned from the book Beyond Measures, posits that it’s not merely individual abilities or unique skills that set exceptional teams apart. Indeed, the metaphor of a brick wall illustrates this perfectly. While the ...
    - link "Culture":
      - /url: /category/culture
    - link "Read More":
      - /url: /blog/the-value-of-social-capital
  - article:
    - link "220/221 Whatever it Takes – The Birth of the VG Kanban":
      - /url: /blog/the-birth-of-the-vg-kanban
      - img "220/221 Whatever it Takes – The Birth of the VG Kanban"
    - link "220/221 Whatever it Takes – The Birth of the VG Kanban Time for a new working agreement… As a father, working adult and someone that has way too many interests. My life can be a mess at times and all chaos has been managed because my spouse fills the cracks. She worried about dinner, going to the store, homework, karate practice and made our family operate like ...":
      - /url: /blog/the-birth-of-the-vg-kanban
      - heading "220/221 Whatever it Takes – The Birth of the VG Kanban" [level=2]
      - paragraph: Time for a new working agreement… As a father, working adult and someone that has way too many interests. My life can be a mess at times and all chaos has been managed because my spouse fills the cracks. She worried about dinner, going to the store, homework, karate practice and made our family operate like ...
    - link "Agile Methods":
      - /url: /category/agile-methods
    - link "Read More":
      - /url: /blog/the-birth-of-the-vg-kanban
  - complementary:
    - heading "Recent Posts" [level=3]
    - list:
      - listitem:
        - 'link "Navigating Uncertainty: Harness the Power of Frequent Customer Feedback"':
          - /url: /blog/navigating-uncertainty
      - listitem:
        - link "My New Cozy Blanket":
          - /url: /blog/my-new-cozy-blanket
      - listitem:
        - link "We All Want to Be Explorers and Dreamers":
          - /url: /blog/we-all-want-to-be-explorers-and-dreamers
      - listitem:
        - link "How to Build Social Capital":
          - /url: /blog/how-to-build-social-capital
      - listitem:
        - link "The Value Social Capital":
          - /url: /blog/the-value-of-social-capital
    - heading "Categories" [level=3]
    - list:
      - listitem:
        - link "Agile Methods (4)":
          - /url: /category/agile-methods
      - listitem:
        - link "Culture (4)":
          - /url: /category/culture
      - listitem:
        - link "AI (1)":
          - /url: /category/ai
- contentinfo:
  - paragraph:
    - text: © 2025 Ben van Glabbeek. All rights reserved. |
    - link "Connect on LinkedIn":
      - /url: https://linkedin.com/in/ben-van-glabbeek/
      - text: LinkedIn
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test.describe('Footer', () => {
   4 |   test('should display LinkedIn social link with correct URL', async ({ page }) => {
   5 |     await page.goto('/');
   6 |     const linkedin = await page.getByRole('link', { name: /linkedin/i });
   7 |     await expect(linkedin).toBeVisible();
>  8 |     await expect(linkedin).toHaveAttribute('href', 'https://linkedin.com/in/bvanglabbeek');
     |                            ^ Error: Timed out 5000ms waiting for expect(locator).toHaveAttribute(expected)
   9 |   });
  10 | }); 
```