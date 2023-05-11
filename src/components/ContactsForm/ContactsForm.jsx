import PropTypes from 'prop-types';
import { useState } from 'react';
import { Form, Label, Title, Input, Button } from './ContactsForm.styled';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { useDispatch, useSelector } from 'react-redux';
import { add, getContacts } from 'redux/contactsSlice';
import { nanoid } from 'nanoid';

function ContactForm({ onClose }) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const onChangeName = e => setName(e.currentTarget.value);
    const onChangeNunber = e => setNumber(e.currentTarget.value);

    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();

    const onSubmitForm = e => {
        e.preventDefault();

        const newElement = { id: nanoid(), name, number };

        contacts.some(contact => contact.name === name)
        ? Report.warning(
            `${name}`,
            'This user is already in the contact list.',
            'OK',
            )
        : dispatch(add(newElement));

        reset();
        onClose();
    };

    const reset = () => {
        setName('');
        setNumber('');
    };

    return (
        <Form onSubmit={onSubmitForm}>
            <Label>
                <Title>Name</Title>
                <Input
                onChange={onChangeName}
                type="text"
                name="name"
                value={name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                />
            </Label>
            <Label>
                <Title>Number</Title>
                <Input
                onChange={onChangeNunber}
                type="tel"
                name="number"
                value={number}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                />
            </Label>
            <Button type="submit">Add contact</Button>
        </Form>
    );
}

export default ContactForm;

ContactForm.propType = {
    onSubmit: PropTypes.func.isRequired,
};
