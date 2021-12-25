import React from 'react';
import type { NextPage } from 'next';
import Section from '../components/molecules/Section/Section';
import Link from 'next/link';
import { List } from 'components/atoms/List/List';
import { Quote } from 'components/atoms/Quote/Quote';
import { StyledTitle, Wrapper } from 'styles/Home.styles';

const Home: NextPage = () => {
  return (
    <Wrapper>
      <article>
        <header>
          <StyledTitle>
            Siemka! Z tej strony <strong>Kuba</strong>, a ty znajdujesz się w miejscu, gdzie znajdziesz wszystko!
          </StyledTitle>
          <Quote>
            Life is too short to worry about stupid things. Have fun. Fall in love. Regret nothing, and don&apos;t let people bring you down. Study,
            think, create, and grow. Teach yourself and teach others. - Prof. Feynman
          </Quote>
        </header>
        <Section title="Trochę o mnie! ✍🏻">
          <p>
            Jestem początkującym full-stack developerem, który ma 15 lat i widzi swoją przyszłość w IT. Zainteresowany w: programowanie,
            automatyzacje, security, biznes, marketing oraz rozwój osobisty. Wiedząc, że nauka jest najlepszym sposobem do samorozwoju założyłem
            bloga, kierując się digital garden. Programuję od (z przerwami) 13 roku życia, a w webdev siedzę od ok. 2021 roku. Fan ekosystemu JS i TS.
          </p>
          <Link href="/about">Więcej o mnie!</Link>
        </Section>
        <Section title="Co tutaj znajdziesz? 🤔">
          <List>
            <li>
              Mój blog oraz <Link href="/blog">regularne posty</Link>
            </li>
            <li>Nowości z mojej działalności</li>
            <li>
              Zapisy na <Link href="/newsletter">mój newsletter</Link>
            </li>
            <li>
              Rozpięty <Link href="/about">opis o mnie</Link>
            </li>
          </List>
        </Section>
        <Section title="Co potrafię? 👨‍💻">
          <p>
            Myślę, że mój profil na{' '}
            <a href="https://github.com/jakublog" target="_blank" rel="noreferrer noopener">
              GitHub&apos;ie
            </a>{' '}
            mówi sam za siebie.
          </p>
          <p>
            Ale warto wspomnieć, że byłem developerem aplikacji{' '}
            <a href="https://schoola.pl/" target="_blank" rel="noreferrer noopener">
              Schoola
            </a>
            , czy też innych moich{' '}
            <a href="https://github.com/JakubLog?tab=repositories" target="_blank" rel="noreferrer noopener">
              prywatnych projektów
            </a>{' '}
            :).
          </p>
        </Section>
        <Section title="Chcesz pogadać? 📧">
          <p>Napisz do mnie na social media, które znajdują się obok menu! Chętnie wymienię się poglądami, a nawet doradzę w jakimś problemie ;).</p>
          <p>
            Pssst! Najczęściej odpowiadam na{' '}
            <a href="mailto:kontakt.jakubfedoszczak@gmail.com" target="_blank" rel="noreferrer noopener">
              mail&apos;u
            </a>{' '}
            {''}i{' '}
            <a href="https://instagram.com/jakub_fedoszczak__" target="_blank" rel="noreferrer noopener">
              instagram&apos;ie!
            </a>
          </p>
        </Section>
      </article>
    </Wrapper>
  );
};
Home.title = 'Home';

export default Home;
