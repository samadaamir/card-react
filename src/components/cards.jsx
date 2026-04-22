import React from 'react'

const cards = () => {
    const cardsData = [
    {
      id: 1,
      name: "Ayesha Khan",
      description: "Front-end React developer specializing in UI/UX and modern web apps.",
      image: "https://i.pinimg.com/1200x/1e/63/56/1e635633a29f8971e0e36d3e593f0cb7.jpg",
      rating: 4.8,
      earned: "$45K+",
      rate: "$50/h",
    },
    {
      id: 2,
      name: "Ali Raza",
      description: "Full Stack developer with expertise in MERN stack and scalable systems.",
      image: "https://i.pinimg.com/1200x/54/39/03/5439037dca9d225407a82a0ee4f77786.jpg",
      rating: 4.6,
      earned: "$60K+",
      rate: "$55/h",
    },
    {
      id: 3,
      name: "Sarah Ahmed",
      description: "UI/UX designer focused on clean, minimal and user-centered designs.",
      image: "https://i.pinimg.com/1200x/08/3e/7c/083e7c387a3e85b9e046cab0a54ce733.jpg",
      rating: 4.9,
      earned: "$70K+",
      rate: "$65/h",
    },
    {
      id: 4,
      name: "Usman Tariq",
      description: "Backend engineer working with Node.js, Express and databases.",
      image: "https://i.pinimg.com/736x/bb/09/7b/bb097b00a0467b8ef7c5fea40b9d0fd3.jpg",
      rating: 4.5,
      earned: "$40K+",
      rate: "$40/h",
    },
    {
      id: 5,
      name: "Fatima Noor",
      description: "Mobile app developer building cross-platform apps using React Native.",
      image: "https://i.pinimg.com/736x/59/bb/72/59bb729450221f694d70d32658f5b7c4.jpg",
      rating: 4.7,
      earned: "$55K+",
      rate: "$60/h",
    },
    {
      id: 6,
      name: "Hassan Ali",
      description: "DevOps engineer specializing in CI/CD pipelines and cloud deployment.",
      image: "https://i.pinimg.com/736x/8a/01/83/8a01833396540adfed10f743debc35b8.jpg",
      rating: 4.4,
      earned: "$75K+",
      rate: "$70/h",
    },
    {
      id: 7,
      name: "Zainab Malik",
      description: "Graphic designer creating modern branding and visual identities.",
      image: "https://i.pinimg.com/736x/cf/40/94/cf40942cf13b735c234476d9d2f61927.jpg",
      rating: 4.9,
      earned: "$50K+",
      rate: "$45/h",
    },
  ];
    return (
        <div className='container'>
            {cardsData.map((props)=>{
                return (
                    <div className="main" key={props.id}>
            <div className="top">
                <img src={props.image} alt="card-img" />
            </div>
            <div className="center">
                <h2>{props.name}</h2>
                <p>{props.description}</p>
            </div>
            <div className="box">
                <div className="rating">
                    <h6>{props.rating}</h6>
                    <p>Ratings</p>
                </div>
                <div className="earning">
                    <h6>{props.earned}</h6>
                    <p>Earned</p>
                </div>
                <div className="salary">
                    <h6>{props.rate}</h6>
                    <p>Rate</p>
                </div>
            </div>
            <div className="bottom">
                <button>Get In Touch</button>
            </div>
        </div>
                )
            })}
        </div>
    )
}

export default cards