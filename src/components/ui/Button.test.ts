// Feature: vitest-setup, Requirements: 6.1, 6.2, 6.3
import { describe, it, expect } from "vitest";
import { experimental_AstroContainer as AstroContainer } from "astro/container";
import Button from "./Button.astro";

describe("Button", () => {
  it("renders as <a> when href is provided", async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Button, {
      props: { href: "https://example.com" },
    });
    expect(html).toContain("<a");
  });

  it("renders as <button> when href is omitted", async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Button, {
      props: {},
    });
    expect(html).not.toContain("<a");
    expect(html).toContain("<button");
  });

  it("snapshot: primary variant, md size, no href (default button)", async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Button, {
      props: { variant: "primary", size: "md" },
    });
    expect(html).toMatchSnapshot();
  });

  it("snapshot: secondary variant, lg size, with href (link)", async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Button, {
      props: { variant: "secondary", size: "lg", href: "https://example.com" },
    });
    expect(html).toMatchSnapshot();
  });

  it("snapshot: outline variant, sm size, no href", async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Button, {
      props: { variant: "outline", size: "sm" },
    });
    expect(html).toMatchSnapshot();
  });
});
