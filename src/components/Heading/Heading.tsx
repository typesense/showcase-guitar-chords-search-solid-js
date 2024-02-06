import { GithubIcon, SolidJSIcon } from '../icons';
import s from './Heading.module.css';

export default function Heading() {
  return (
    <>
      <div class={s.Heading}>
        <h1>Search guitar chords</h1>
        <div>
          powered by{' '}
          <a
            href='https://typesense.org/'
            target='_blank'
            rel='noopener noreferrer'
            id={s.typesense}
          >
            type<b>sense</b>|
          </a>{' '}
          & <SolidJSIcon id={s.solidJSLogo} />
        </div>
      </div>
      <a
        href='https://github.com/typesense/showcase-guitar-chords-search-solid-js'
        target='_blank'
        rel='noopener noreferrer'
        id={s.githubLink}
        title='Github repo'
      >
        <GithubIcon />
      </a>
    </>
  );
}
