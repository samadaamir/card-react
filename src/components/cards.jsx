import React from 'react'

const cards = () => {
    return (
        <div className='main'>
            <div className="top">
                <img src="https://i.pinimg.com/1200x/54/39/03/5439037dca9d225407a82a0ee4f77786.jpg" alt="card-img" />
            </div>
            <div className="center">
                <h2>Name</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <div className="box">
                <div className="rating">
                    <h6>4.8</h6>
                    <p>Ratings</p>
                </div>
                <div className="earning">
                    <h6>$45K+</h6>
                    <p>Earned</p>
                </div>
                <div className="salary">
                    <h6>$50/h</h6>
                    <p>Rate</p>
                </div>
            </div>
            <div className="bottom">
                <button>Get In Touch</button>
            </div>
        </div>
    )
}

export default cards