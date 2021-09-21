import React from 'react';

export default function AddPotluck(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }

    return (
        <form className='potluck' onSubmit={onSubmit}>
            <div className='create-potluck'>
                <h1>Create a Potluck!</h1>
                <div className='errors'>
                    <div>{errors.potluck_name}</div>
                    <div>{errors.date}</div>
                    <div>{errors.time}</div>
                    <div>{errors.location}</div>
                </div>

                <h3>Type Your Potluck Name</h3>
                <label>
                    <input
                        value={values.potluck_name}
                        onChange={onChange}
                        name='potluck_name'
                        type='text'
                    />    
                </label>
                <h3>Name Your Event Date</h3>
                <label>
                    <input
                        value={values.date}
                        onChange={onChange}
                        name='date'
                        type='text'
                    />    
                </label>
                <h3>What Time Will Your Potluck Begin?</h3>
                <label>
                    <input
                        value={values.time}
                        onChange={onChange}
                        name='time'
                        type='text'
                    />    
                </label>
                <h3>Where Will Your Potluck Take Place?</h3>
                <label>
                    <input
                        value={values.location}
                        onChange={onChange}
                        name='location'
                        type='text'
                    />    
                </label>
                <button className='button' disabled={disabled}>Submit</button>
            </div>
        </form>
    )
}