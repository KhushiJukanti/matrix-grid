import React, { useState } from 'react';
import '../App.css';
import axios from 'axios';

const MatrixGrid = () => {
    const [selectedFields, setSelectedFields] = useState({});
    const [activeGrid, setActiveGrid] = useState(null);

    const handleFieldChange = (field, xValue, yValue) => {
        if (selectedFields[`${xValue}${yValue}`]) {
            setSelectedFields({
                ...selectedFields,
                [`${xValue}${yValue}`]: { ...selectedFields[`${xValue}${yValue}`], field }
            });
        } else {
            setSelectedFields({
                ...selectedFields,
                [`${xValue}${yValue}`]: { field, value: '' }
            });
        }
    };

    const handleChange = (e, xValue, yValue) => {
        const { value } = e.target;
        setSelectedFields({
            ...selectedFields,
            [`${xValue}${yValue}`]: { ...selectedFields[`${xValue}${yValue}`], value }
        });
    };

    const toggleGrid = (xValue, yValue) => {
        setActiveGrid(activeGrid === `${xValue}${yValue}` ? null : `${xValue}${yValue}`);
    };

    const saveToDatabase = async (field, value, grid) => {
        try {
            const response = await axios.post('http://localhost:5000/api/matrix', { [field]: value, Grid: grid });
            console.log(response.data); // Log the response from the backend
        } catch (error) {
            console.error('Error saving to database:', error);
        }
    };



    const handleSave = (xValue, yValue) => {
        const field = selectedFields[`${xValue}${yValue}`]?.field;
        const value = selectedFields[`${xValue}${yValue}`]?.value;
        if (field && value) {
            saveToDatabase(field, value, `${xValue}${yValue}`);
        }
    };


    return (
        <div className="container">
            <div className="matrix-grid mt-5">
                <div className="row-container">
                    <div
                        key={`cell-A1`}
                        className={`grid-cell cell-A1 ${activeGrid === 'A1' ? 'active' : ''}`}
                        onClick={() => toggleGrid('A', '1')}
                    >
                        A1
                        {activeGrid === 'A1' && (
                            <div className="field-selector">
                                {['Name', 'Impact', 'Resolution', 'How_to_fix'].map((field) => (
                                    <div key={field} className="selector-item">
                                        <label>
                                            <input
                                                type="radio"
                                                value={field}
                                                checked={selectedFields[`A1`]?.field === field}
                                                onChange={() => handleFieldChange(field, 'A', '1')}
                                            />
                                            {field}
                                        </label>
                                        {selectedFields[`A1`]?.field === field && (
                                            <div className="form-fields">
                                                <input
                                                    type="text"
                                                    value={selectedFields[`A1`]?.value || ''}
                                                    onChange={(e) => handleChange(e, 'A', '1')}
                                                />
                                                <button onClick={() => handleSave('A', '1')}>Save</button>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                        {selectedFields['A1'] && (
                            <div className="grid-content">
                                {selectedFields['A1'].field}: {selectedFields['A1'].value}
                            </div>
                        )}
                    </div>
                    <div
                        key={`cell-A2`}
                        className={`grid-cell cell-A2 ${activeGrid === 'A2' ? 'active' : ''}`}
                        onClick={() => toggleGrid('A', '2')}
                    >
                        A2
                        {activeGrid === 'A2' && (
                            <div className="field-selector">
                                {['Name', 'Impact', 'Resolution', 'How_to_fix'].map((field) => (
                                    <div key={field} className="selector-item">
                                        <label>
                                            <input
                                                type="radio"
                                                value={field}
                                                checked={selectedFields[`A2`]?.field === field}
                                                onChange={() => handleFieldChange(field, 'A', '2')}
                                            />

                                            {field}
                                        </label>
                                        {selectedFields[`A2`]?.field === field && (
                                            <div className="form-fields">
                                                <input
                                                    type="text"
                                                    value={selectedFields[`A2`]?.value || ''}
                                                    onChange={(e) => handleChange(e, 'A', '2')}
                                                />
                                                <button onClick={() => handleSave('A', '2')}>Save</button>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                        {selectedFields['A2'] && (
                            <div className="grid-content">
                                {selectedFields['A2'].field}: {selectedFields['A2'].value}
                            </div>
                        )}
                    </div>
                </div>
                <div className="row-container">
                    <div
                        key={`cell-A4`}
                        className={`grid-cell cell-A4 ${activeGrid === 'A4' ? 'active' : ''}`}
                        onClick={() => toggleGrid('A', '4')}
                    >
                        A4
                        {activeGrid === 'A4' && (
                            <div className="field-selector">
                                {['Name', 'Impact', 'Resolution', 'How_to_fix'].map((field) => (
                                    <div key={field} className="selector-item">
                                        <label>
                                            <input
                                                type="radio"
                                                value={field}
                                                checked={selectedFields[`A4`]?.field === field}
                                                onChange={() => handleFieldChange(field, 'A', '4')}
                                            />

                                            {field}
                                        </label>
                                        {selectedFields[`A4`]?.field === field && (
                                            <div className="form-fields">
                                                <input
                                                    type="text"
                                                    value={selectedFields[`A4`]?.value || ''}
                                                    onChange={(e) => handleChange(e, 'A', '4')}
                                                />
                                                <button onClick={() => handleSave('A', '4')}>Save</button>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                        {selectedFields['A4'] && (
                            <div className="grid-content">
                                {selectedFields['A4'].field}: {selectedFields['A4'].value}
                            </div>
                        )}
                    </div>
                    <div
                        key={`cell-A3`}
                        className={`grid-cell cell-A3 ${activeGrid === 'A3' ? 'active' : ''}`}
                        onClick={() => toggleGrid('A', '3')}
                    >
                        A3
                        {activeGrid === 'A3' && (
                            <div className="field-selector">
                                {['Name', 'Impact', 'Resolution', 'How_to_fix'].map((field) => (
                                    <div key={field} className="selector-item">
                                        <label>
                                            <input
                                                type="radio"
                                                value={field}
                                                checked={selectedFields[`A3`]?.field === field}
                                                onChange={() => handleFieldChange(field, 'A', '3')}
                                            />
                                            {field}
                                        </label>
                                        {selectedFields[`A3`]?.field === field && (
                                            <div className="form-fields">
                                                <input
                                                    type="text"
                                                    value={selectedFields[`A3`]?.value || ''}
                                                    onChange={(e) => handleChange(e, 'A', '3')}
                                                />
                                                <button onClick={() => handleSave('A', '3')}>Save</button>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                        {selectedFields['A3'] && (
                            <div className="grid-content">
                                {selectedFields['A3'].field}: {selectedFields['A3'].value}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MatrixGrid;
