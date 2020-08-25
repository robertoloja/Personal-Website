import React from 'react'

const BookInventory = () => {
    return (
        <div style={{padding: '40px'}}>
            <p>
                This as a piece of bespoke home software for an elderly friend beset by an overlarge book collection.
                It is demoed below in an iframe, hosted at <a href='http://rholoj.pythonanywhere.com/'>Python
                Anywhere</a>. As this was a very early project of mine, I'll present a critique rather than an
                explanation.
            </p>
            <div style={{
                background: 'rgba(30, 30, 30, 0.5)',
                padding: '20px',
                borderRadius: '5px',
                boxShadow: '2px 2px rgba(0.5, 0.5, 0.5, 0.2)',
            }}>
                <iframe src="https://rholoj.pythonanywhere.com/"
                        title="BookInventory"
                        style={{
                            width: '700px',
                            height: '300px',
                            margin: '0 auto',
                            marginTop: '30px',
                            background: 'white',
                            display: 'block',
                            boxShadow: '2px 2px rgba(0.5, 0.5, 0.5, 0.2)',
                        }}
                />
                <p>
                </p>
            </div>
        </div>
    )
}

export default BookInventory
