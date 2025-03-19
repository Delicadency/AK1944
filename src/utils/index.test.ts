import { slugify } from ".";

describe("utils", () => {
  describe("slugify", () => {
    it.each([
      { text: undefined, slug: undefined },
      { text: "", slug: undefined },
      { text: " ", slug: undefined },
      { text: "   ", slug: undefined },
      { text: "\t\n", slug: undefined },
      { text: "abc", slug: "abc" },
      { text: "Abc", slug: "abc" },
      { text: "ABC", slug: "abc" },
      { text: "ABC123", slug: "abc123" },
      { text: "ABC123", slug: "abc123" },
      { text: "ABC 123", slug: "abc-123" },
      { text: "MixedCASE", slug: "mixedcase" },
      { text: "camelCase", slug: "camelcase" },
      { text: "PascalCase", slug: "pascalcase" },
      { text: "snake_case", slug: "snake-case" },
      { text: "version1.2.3", slug: "version123" },
      { text: "Hello World", slug: "hello-world" },
      { text: "Question? Mark!", slug: "question-mark" },
      { text: "Hello, world & everyone", slug: "hello-world-everyone" },
      { text: "Symbols: @#$%^&*()", slug: "symbols" },
      { text: "Multiple   spaces", slug: "multiple-spaces" },
      { text: "Hyphen - test", slug: "hyphen-test" },
      { text: "Multiple --- hyphens", slug: "multiple-hyphens" },
      { text: "   poland can into space   ", slug: "poland-can-into-space" },
      { text: "Dîáçrïtíçš", slug: "diacritics" },
      { text: "Café au lait", slug: "cafe-au-lait" },
      { text: "Crème brûlée", slug: "creme-brulee" },
      { text: "Résumé", slug: "resume" },
      { text: "Dziękujemy za wsparcie", slug: "dziekujemy-za-wsparcie" },
      { text: "Jak zostać partnerem?", slug: "jak-zostac-partnerem" },
    ])(`should create proper slug for: $text`, ({ text, slug }) => {
      expect(slugify(text)).toBe(slug);
    });
  });
});
