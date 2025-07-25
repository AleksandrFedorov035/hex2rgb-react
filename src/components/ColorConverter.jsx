import React, { useState } from 'react';

export default function ColorConverter() {
    const [hexColor, setHexColor] = useState('');
    const [rgbColor, setRgbColor] = useState('');
    const [error, setError] = useState(false);

    const handleChange = (event) => {
        const value = event.target.value;
        setHexColor(value);

        if (value.length === 7) {
            if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(value)) {
                const r = parseInt(value.substring(1, 3), 16);
                const g = parseInt(value.substring(3, 5), 16);
                const b = parseInt(value.substring(5, 7), 16);
                setRgbColor(`RGB(${r}, ${g}, ${b})`);
                setError(false);
                document.body.style.backgroundColor = value;
            } else {
                setRgbColor('');
                setError(true);
            }
        } else {
            setRgbColor('');
            setError(false);
        }
    };

    return (
        <div className='content'>
            <input
                type="text"
                value={hexColor}
                onChange={handleChange}
                placeholder="#FFFFFF"
                id='1'
                name='color'
                maxLength='7'
            />
            <p className={error ? "error" : ""}>{error ? 'Ошибка!' : rgbColor == '' ? 'RGB(255, 255, 255)' : rgbColor}</p>
        </div>
    );
}
