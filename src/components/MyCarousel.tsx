"use client";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import stockGolf from "@/public/assets/stockGolf.webp";
import stockGolf2 from "@/public/assets/stockGolf2.webp";
import stockGolf3 from "@/public/assets/stockGolf3.webp";

const heroData = [
    {
        id: 1,
        image: stockGolf,
        title: "Take advantage of stupid people",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!",
        link: "https://www.google.com",
    },
    {
        id: 2,
        image: stockGolf2,
        title: "Tee, Eagle, Birdie, Par, Bogey, Double Bogey",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!",
        link: "https://www.facebook.com",
    },
    {
        id: 3,
        image: stockGolf3,
        title: "Pretend to have fun on instagram reels",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!",
        link: "https://www.twitter.com",
    },
];

export default function MyCarousel() {
    return (
        <section id="home" className="carousel-block">
            <Carousel>
                {heroData.map((hero) => {
                    return (
                        <Carousel.Item key={hero.id}>
                            <Image
                                className="d-block w-100"
                                src={hero.image}
                                alt={"slide " + hero.id}
                            />
                            <Carousel.Caption>
                                <h2>{hero.title}</h2>
                                <p>{hero.description}</p>
                                <a className="btn btn-primary" href={hero.link}>
                                    Se mer or smth
                                </a>
                            </Carousel.Caption>
                        </Carousel.Item>
                    );
                })}
            </Carousel>
        </section>
    );
}
