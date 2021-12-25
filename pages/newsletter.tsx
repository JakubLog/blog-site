import React from 'react';
import { List } from '../components/atoms/List/List';
import { Wrapper } from 'styles/Newsletter.styles';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import NewsletterForm from '../components/molecules/NewsletterForm/NewsletterForm';
import { ExtendedNextPage } from '../types/NextPage';

const url = 'https://ovh.us20.list-manage.com/subscribe/post?u=ceb122a317c9f872c9e9cf951&amp;id=803f979c62';

const newsletter: ExtendedNextPage = () => {
  return (
    <Wrapper className="fade-in-animation">
      <div>
        <h2>
          <span>News</span>letter ✉️
        </h2>
        <p>Jeżeli interesuje ciebie to co robię i chcesz na bieżąco dostawać informacje o moich wydarzeniach, to zapisz się na mój newsletter.</p>
        <MailchimpSubscribe url={url} render={({ subscribe, status }) => <NewsletterForm subscribe={subscribe} status={status} />} />
      </div>
      <div>
        <h2>
          <span>Zobacz</span> co tam znajdziesz! 📪
        </h2>
        <List>
          <li>Powiadomienia o projektach</li>
          <li>
            Podsumowanie tygodnia, a w nim:
            <ul>
              <li>Ciekawe promocje IT</li>
              <li>Książkę tygodnia</li>
              <li>Informacje o wpisach</li>
              <li>I wiele więcej!</li>
            </ul>
          </li>
        </List>
      </div>
    </Wrapper>
  );
};

newsletter.title = 'Newsletter';

export default newsletter;
