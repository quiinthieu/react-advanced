import React, {useState, useEffect} from 'react';

const ShowHide = () => {
    const [show, setShow] = useState(false);

    return (
        <React.Fragment>
            <h2>show/hide</h2>
            <button onClick={() => setShow(!show)} type={"button"} className={"btn"}>Show/Hide</button>
            {show && <Item />}
        </React.Fragment>
    );
};

const Item = () => {
    const [size, setSize] = useState(window.innerWidth);

    const checkSize = () => {
        setSize(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', checkSize);
        return () => {
            window.removeEventListener('resize', checkSize);
        }
    }, [])
    return (
        <div style={{marginTop: '2rem'}}>
            <h3>window</h3>
            <h4>size: {size} px</h4>
        </div>
    )
}

export default ShowHide;
