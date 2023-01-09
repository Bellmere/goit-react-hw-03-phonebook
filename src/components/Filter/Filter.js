import propTypes from 'prop-types';
import css from '../Filter/Filter.module.css';
import { nanoid } from 'nanoid';

const filterInputId = nanoid();

export const Filter = ({filter, handleChange}) => {
    return (
        <div className={css.filter__wrapper}>
            <label
            className={css.filter__label}
            htmlFor={filterInputId}
            >
                Find contacts by name
            </label>
            <input
            className={css.filter__input}
            id={filterInputId}
            type="text"
            name="filter"
            value={filter}
            onChange={handleChange}
            />
        </div>
    );
}

Filter.propTypes = {
    filter: propTypes.string.isRequired,
    handleChange: propTypes.func,
  };