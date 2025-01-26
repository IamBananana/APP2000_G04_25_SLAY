import Carousel from 'react-bootstrap/Carousel';
var heroData = [
    {
      id: 1,
      image: 'src/assets/stockGolf.jfif',
      title: 'Take advantage of stupid people',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
      link: 'https://www.google.com'
    },
    {
      id: 2,
      image: 'src/assets/stockGolf2.jfif',
      title: 'Tee, Eagle, Birdie, Par, Bogey, Double Bogey',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
      link: 'https://www.facebook.com'
    },
    {
      id: 3,
      image: 'src/assets/stockGolf3.jfif',
      title: 'Pretend to have fun on instagram reels',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
      link: 'https://www.twitter.com'
    }
  ]
  
export default function MyCarousel() {
    return( 
    <section id="home" className='carousel-block'>
    <Carousel>
          {
            heroData.map(hero => {
              return (
                <Carousel.Item key={hero.id}>
                  <img
                    className="d-block w-100"
                    src={hero.image}
                    alt={"slide " + hero.id}
                  />
                  <Carousel.Caption>
                    <h2>{hero.title}</h2>
                    <p>{hero.description}</p>
                    <a className="btn btn-primary" href={hero.link}>Se mer or smth</a>
                  </Carousel.Caption>             
                </Carousel.Item>
              );
            })
          }
      </Carousel>
    </section>
    );
}
