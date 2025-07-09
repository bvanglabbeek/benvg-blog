import { describe, it, expect } from 'vitest';
import {
  SITE_TITLE,
  SITE_DESCRIPTION,
  SITE_URL,
  LINKEDIN_HANDLE,
  NAV_ITEMS,
  SOCIAL_LINKS,
  POSTS_PER_PAGE,
  RECENT_POSTS_COUNT,
  DEFAULT_POST_IMAGE,
  DATE_FORMAT,
  DEFAULT_OG_IMAGE,
  SITE_LANGUAGE,
  SITE_LOCALE,
} from '../../src/consts';

describe('Site Constants', () => {
  describe('Site metadata', () => {
    it('should have valid site title', () => {
      expect(SITE_TITLE).toBe('Ben van Glabbeek');
      expect(typeof SITE_TITLE).toBe('string');
      expect(SITE_TITLE.length).toBeGreaterThan(0);
    });

    it('should have valid site description', () => {
      expect(SITE_DESCRIPTION).toBe(
        'Personal blog and portfolio of Ben van Glabbeek - Transformation, Software Engineering, adventurer, and lifelong learner.'
      );
      expect(typeof SITE_DESCRIPTION).toBe('string');
      expect(SITE_DESCRIPTION.length).toBeGreaterThan(0);
    });

    it('should have valid site URL', () => {
      expect(SITE_URL).toBe('https://benvglabbeek.com');
      expect(typeof SITE_URL).toBe('string');
      expect(SITE_URL).toMatch(/^https:\/\//);
    });
  });

  describe('Social media', () => {
    it('should have valid LinkedIn handle', () => {
      expect(LINKEDIN_HANDLE).toBe('ben-van-glabbeek/');
      expect(typeof LINKEDIN_HANDLE).toBe('string');
      expect(LINKEDIN_HANDLE.length).toBeGreaterThan(0);
    });

    it('should have valid social links', () => {
      expect(SOCIAL_LINKS).toEqual({
        linkedin: 'https://linkedin.com/in/ben-van-glabbeek/',
      });
      expect(SOCIAL_LINKS.linkedin).toMatch(/^https:\/\/linkedin\.com\/in\//);
    });
  });

  describe('Navigation', () => {
    it('should have valid navigation items', () => {
      expect(NAV_ITEMS).toHaveLength(4);
      expect(Array.isArray(NAV_ITEMS)).toBe(true);
    });

    it('should have correctly structured navigation items', () => {
      NAV_ITEMS.forEach((item) => {
        expect(item).toHaveProperty('title');
        expect(item).toHaveProperty('path');
        expect(typeof item.title).toBe('string');
        expect(typeof item.path).toBe('string');
        expect(item.title.length).toBeGreaterThan(0);
        expect(item.path).toMatch(/^\//);
      });
    });

    it('should have expected navigation items', () => {
      const expectedItems = [
        { title: 'Home', path: '/' },
        { title: 'Appalachian Trail', path: '/appalachian-trail' },
        { title: 'Transcen.Digital', path: '/transcen-digital' },
        { title: 'About', path: '/about' },
      ];
      expect(NAV_ITEMS).toEqual(expectedItems);
    });
  });

  describe('Blog settings', () => {
    it('should have valid posts per page setting', () => {
      expect(POSTS_PER_PAGE).toBe(10);
      expect(typeof POSTS_PER_PAGE).toBe('number');
      expect(POSTS_PER_PAGE).toBeGreaterThan(0);
    });

    it('should have valid recent posts count', () => {
      expect(RECENT_POSTS_COUNT).toBe(3);
      expect(typeof RECENT_POSTS_COUNT).toBe('number');
      expect(RECENT_POSTS_COUNT).toBeGreaterThan(0);
    });

    it('should have valid default post image', () => {
      expect(DEFAULT_POST_IMAGE).toBe('/images/default-post.jpg');
      expect(typeof DEFAULT_POST_IMAGE).toBe('string');
      expect(DEFAULT_POST_IMAGE).toMatch(/^\/images\//);
    });
  });

  describe('Date formatting', () => {
    it('should have valid date format', () => {
      expect(DATE_FORMAT).toBe('MMMM D, YYYY');
      expect(typeof DATE_FORMAT).toBe('string');
      expect(DATE_FORMAT.length).toBeGreaterThan(0);
    });
  });

  describe('SEO settings', () => {
    it('should have valid default OG image', () => {
      expect(DEFAULT_OG_IMAGE).toBe('/images/og-image.jpg');
      expect(typeof DEFAULT_OG_IMAGE).toBe('string');
      expect(DEFAULT_OG_IMAGE).toMatch(/^\/images\//);
    });

    it('should have valid site language', () => {
      expect(SITE_LANGUAGE).toBe('en');
      expect(typeof SITE_LANGUAGE).toBe('string');
      expect(SITE_LANGUAGE).toMatch(/^[a-z]{2}$/);
    });

    it('should have valid site locale', () => {
      expect(SITE_LOCALE).toBe('en_US');
      expect(typeof SITE_LOCALE).toBe('string');
      expect(SITE_LOCALE).toMatch(/^[a-z]{2}_[A-Z]{2}$/);
    });
  });
});