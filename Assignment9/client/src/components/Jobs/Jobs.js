import React from 'react';
import Card from '../card/Card';

const data = [
    { title: "SDE", subtitle: "Microsoft", desc: "This is the first job description on jobs page", cardlink: "https://www.google.com", cardLinkText: "Read More" },
    { title: "Blockchain Developer", subtitle: "Fidelity", desc: "This is the second job description on jobs page", cardlink: "https://www.google.com", cardLinkText: "Read More" },
    { title: "Data Engineer", subtitle: "Amazon", desc: "This is the third job description on jobs page", cardlink: "https://www.google.com", cardLinkText: "Read More" },
    { title: "UX Developer", subtitle: "MathWorks", desc: "This is the fourth job description on jobs page", cardlink: "https://www.google.com", cardLinkText: "Read More" },
]

const Jobs = () => {
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
export default Jobs