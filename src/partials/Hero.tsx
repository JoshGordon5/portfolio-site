import {
  GradientText,
  HeroAvatar,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Josh</GradientText> 👋
        </>
      }
      description={
        <>
          Thanks for stopping by my portfolio site! <br />
          This site will include an{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            about page
          </a>{' '}
          to learn more about me, a{' '}
          <a className="text-red-400 hover:underline" href="/posts">
            blog page
          </a>{' '}
          for personal writings, a list of some projects I have developed and
          ways to contact me. <br />
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
    />
  </Section>
);

export { Hero };
