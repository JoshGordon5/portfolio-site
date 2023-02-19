import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo name="Josh Gordon Portfolio" />
      </a>

      <NavMenu>
        <NavMenuItem href="/about">About</NavMenuItem>
        <NavMenuItem href="/posts">Blogs</NavMenuItem>
        <NavMenuItem href="/https://github.com/JoshGordon5">GitHub</NavMenuItem>
        <NavMenuItem href="/https://www.linkedin.com/in/joshgordon96/">
          LinkedIn
        </NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
