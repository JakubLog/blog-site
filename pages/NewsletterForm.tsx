import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '../components/atoms/Input/Input';
import { Form } from '../components/atoms/Form/Form';
import Button from '../components/atoms/Button/Button';

interface props {
  // eslint-disable-next-line
  subscribe: ({ email }: any) => void;
  status: string | null;
}

const NewsletterForm: React.FC<props> = ({ subscribe, status }) => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm();

  useEffect(() => {
    localStorage.getItem('isSubscribed') ? setIsSubscribed(true) : setIsSubscribed(false);
  }, []);

  useEffect(() => {
    if (status === 'success') {
      setIsSubscribed(true);
      localStorage.setItem('isSubscribed', 'true');
      reset();
    }
    // eslint-disable-next-line
  }, [status]);

  const handleNewsletter = ({ email }: { email: string }) => {
    subscribe({ EMAIL: email });
  };

  return (
    <Form inline onSubmit={handleSubmit(handleNewsletter)}>
      <Input
        type="email"
        placeholder="example@mail.com"
        {...register('email', {
          required: true,
          pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        })}
        disabled={isSubscribed}
      />
      <Button disabled={isSubscribed}>
        {status === 'sending'
          ? 'Wysyłanie...'
          : status === 'error' || errors.email
          ? 'Spróbuj ponownie!'
          : status === 'success' || isSubscribed
          ? 'Zapisano!'
          : 'Zapisz się!'}
      </Button>
    </Form>
  );
};

export default NewsletterForm;
