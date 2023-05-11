import styled from '@emotion/styled';

export const ContactsContainer = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Icon = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: var(--accent-bg-color);
    color: var(--second-text-color);
    margin-right: 30px;
    padding: 15px;
`;

export const Button = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-left: 15px;
    width: 30px;
    height: 30px;
    padding: 10px;
    border: none;
    background-color: #2b2b2b;
    color: var(--second-text-color);
    cursor: pointer;
    transition: background-color var(--main-hover-animation);

    &:hover,
    &:focus {
        background-color: var(--accent-bg-color);
    }
`;
