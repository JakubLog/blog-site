import React from 'react';
import Link from 'next/link';
import { List } from '../components/atoms/List/List';
import { Wrapper } from 'styles/About.styles';
import Section from '../components/molecules/Section/Section';

const about = () => {
  return (
    <Wrapper>
      <h1>Pogadajmy może? :)</h1>

      <Section title="Kim jesteś?">
        <p>
          Jestem Kuba, na stronie widnieje napis że jestem Full-stack developerem - i poniekąd tak jest, ale tylko głupcy przypisują sobie jakieś
          zawody. Nie przypisuję sobie dopisku "programista", ani żadnego innego. Po prostu jestem sobą, osobą zainteresowaną w wielu tematach, co tym
          bardziej wyklucza mnie jako programistę. Oczywiście programowanie to moja główna pasja i też to będzie mój temat przewodni w życiu, ale kim
          jest człowiek, jeżeli nazywa siebie zawodem który wykonuje? No ale na takie rozważania założyłem <Link href="/blog">bloga</Link>. :)
        </p>
        <p>Kontynuując, zainteresowany w:</p>
        <List>
          <li>Programowanie (głównie web dev)</li>
          <li>Machine learning (AI)</li>
          <li>Crypto (blockchain)</li>
          <li>Aumatyzacje</li>
          <li>IT Security (też web)</li>
          <li>Design (UI & UX)</li>
          <li>Marketing</li>
          <li>Biznes</li>
          <li>Self-development</li>
        </List>
      </Section>
      <Section title="Przygoda z programowaniem">
        <p>
          W wieku 12/13 lat napisałem swój pierwszy "Hello World" i to w... C++! Tak, to od tego zacząłem naukę programowania i wcale tego nie żałuję.
          C++ to - według mnie - najlepszy język na start. Po kilku tygodniach co prawda się poddałem ze względu na poziom trudności, ale w między
          czasie zostałem zmotywowany do dalszej pracy przez bliskich.
        </p>
        <p>
          We wrześniu (2020 rok) powiedziałem sobie, że muszę się zająć wreszcie programowaniem chociażbym musiał uczyć się jednej rzeczy tygodniami!
          Tak jak powiedział, tak się stało - "Slight Edge" - to, to mi pomogło i naprawdę zadziałało. Po przełamaniu bariery zacząłem chłonąć wiedzę
          jak głupi.
        </p>
        <p>
          Po skończonym kursie C++ (obiektowy + proceduralny), porzuciłem dalszą naukę języków kompilowanych na rzecz młodszego brata: JavaScript'a
          (omijam HTML'a i CSS'a bo to podstawy). Pomimo wielu dziwnych rzeczy, które do tej pory spotykam w kodzie, uważam ten język za naprawdę
          dobry i przemyślany. TypeScript jeszcze bardziej mi uświadomił jak JavaScript może być kochany i pomagać w pracy. Jak poznałem React'a,
          zdałem sobie sprawę, że zakochałem się w ekosystemie JS'a. To co można zrobić za pomocą przeglądarki przekracza ludzkie pojęcie.
        </p>
      </Section>
      <Section title="Czemu ta strona jest tak (nie)prymitywna?">
        <p>
          Jeżeli czytasz ten podpunkt to znaczy że tak pomyślałeś, ale nie martw się. Nie czuję się designer'em pomimo tego, że też nie tworzę
          okropnych wyglądowo stron. Co prawda to prawda, nie ma tutaj super animacji, sekcje się powtarzają, a wszystko się zlewa. Tak się składa, że
          jestem bardziej logicznie nastawioną osobą, więc stąd tutaj znajdziesz takie smaczki jak:
          <List>
            <li>Custom linki (w artykułach)</li>
            <li>SEO level 1000%</li>
            <li>CMS dla mnie (lol, od kiedy programista robi sobie CMS?)</li>
            <li>Friendly url</li>
            <li>Server Side Rendering</li>
          </List>
        </p>
      </Section>
    </Wrapper>
  );
};
about.title = 'About';

export default about;
