import { Container, Title, TitleСolor, Subtitle } from './App.styled';
import ContactList from './Contacts/Contacts';
import Filter from './Filter/Filter';
import ContactsForm from './ContactsForm/ContactsForm';

export default function App() {
  return (
    <Container>
      <Title>
        Phone<TitleСolor>book</TitleСolor>
      </Title>
      <ContactsForm />
      <Subtitle>Contacts</Subtitle>
      <Filter />
      <ContactList />
    </Container>
  );
}
