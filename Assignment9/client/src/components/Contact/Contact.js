import React from 'react';
import Card from '../card/Card';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';

const data = [
    { title: "Contact 1", img: img1, subtitle: "contact subtitle", desc: "This is the first card component on contact", cardlink: "https://www.google.com", cardLinkText: "Read More" },
    { title: "Contact 2", img: img2, subtitle: "contact subtitle", desc: "This is the first card component on contact", cardlink: "https://www.google.com", cardLinkText: "Read More" },
    { title: "Contact 3", img: img3, subtitle: "contact subtitle", desc: "This is the first card component on contact", cardlink: "https://www.google.com", cardLinkText: "Read More" },
    { title: "Contact 4", img: img4, subtitle: "contact subtitle", desc: "This is the first card component on contact", cardlink: "https://www.google.com", cardLinkText: "Read More" },
]

const Contact = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/homepage">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="/homepage/about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="/homepage/jobs">Jobs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="/homepage/contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

            <div style={{ display: "flex", justifyContent: "space-around", marginTop: "40px" }}>
                {data.map((cardData) => {
                    return (
                        <div >
                            <Card img={cardData.img} title={cardData.title} subtitle={cardData.subtitle} desc={cardData.desc} cardlink={cardData.cardlink} cardLinkText={cardData.cardLinkText} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default Contact