import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import {
  PhonebookContainer,
  MainHeader,
  SecondaryHeader,
  Section,
} from './App.styled';

export const App = () => {
  return (
    <PhonebookContainer>
      <Section>
        <MainHeader>Phonebook</MainHeader>
        <ContactForm />
        <SecondaryHeader>Contacts</SecondaryHeader>
        <Filter />
        <ContactList />
      </Section>
    </PhonebookContainer>
  );
};
