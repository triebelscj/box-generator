import React, { useState } from 'react';


const Form = (props) => {
    const [box, setBox] = useState("");

    const handleChange = (e) => {
        const { value } = e.target;
        setBox(value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addColor(box)
        setBox("")
    };

    return (
        <form onSubmit={handleSubmit} >
            <div className="form-group">
                <label style={{ marginRight: 20, fontSize: 22, fontWeight: 600 }}>Color:</label>
                <input
                    placeholder="Enter new box color"
                    name="color"
                    onChange={handleChange}
                    value={box}
                    style={{ marginRight: 20 }}
                />
                <button type="submit">Create!</button>
            </div>
        </form>
    );
}


export default Form;