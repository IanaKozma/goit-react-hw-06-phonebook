import { Label, Text, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filter } from 'redux/filterSlice';

const Filter = () => {
    const dispatch = useDispatch();
    const filterValue = useSelector(state => state.filter.value);
    const onChangeFilterValue = e => {
        dispatch(filter(e.target.value));
    };

    return (
        <Label htmlFor="filter">
            <Text>Find contacts by name</Text>
            <Input
                type="input"
                name="filter"
                value={filterValue}
                onChange={onChangeFilterValue}
            />
        </Label>
    );
};

export default Filter;
