import React from 'react';

const FilterForm = (props) => {
    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <div>
                        <label>
                            Search
                        </label>
                        <input type="text" name="filterStr" 
                            value={props.filterStr}
                            onChange={(e) => props.onChange(e.target.value)} />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FilterForm;