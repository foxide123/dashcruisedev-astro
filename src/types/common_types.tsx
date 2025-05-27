export type ContactFormDataProps = {
  name: 'Name';
  email: 'E-Mail';
  message: 'Nachricht';
  send: 'Nachricht senden';
  sending: 'Nachricht wird gesendet...';
};

export type NewsletterDataProps = {
  header: string;
  placeholder: string;
  invalidEmailError: string;
  cta: string;
  emailExistsError: string;
  unknownError: string;
};

export type FooterDataProps = {
  header: string;
  contactHeader: string;
  quicklinksHeader: string;
  resourcesHeader: string;
  copyright: string;
};
