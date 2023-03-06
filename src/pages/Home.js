import { Carousel, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Quiz, BackgroundVideo } from '../components';
import imgArr from '../images';

function Home() {
   return (
    <div>
      <BackgroundVideo />
     <div className="container-lg text-center overlay">
       <div className='row'>
         <div className='col mt-3 text-white'>
           <h1>Acceuil</h1>
         </div>
       </div>
       <div className='row'>
         <div className='col'>
           <h2 className='text-secondary mb-5 text-light'>Agence professionelle pour vidéographie d'immeubles</h2>
         </div>
       </div>
       <div className='d-flex justify-content-evenly flex-wrap'>
           <Carousel fade>
             <Carousel.Item>
               <img
                 className="w-50"
                 src={imgArr.buildings1}
                 alt="First slide"
               />
               <Carousel.Caption>
                 <h3>First slide label</h3>
                 <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
               </Carousel.Caption>
             </Carousel.Item>
             <Carousel.Item>
               <img
                 className="w-50"
                 src={imgArr.buildings2}
                 alt="Second slide"
               />

               <Carousel.Caption>
                 <h3>Second slide label</h3>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
               </Carousel.Caption>
             </Carousel.Item>
             <Carousel.Item>
               <img
                 className="w-50"
                 src={imgArr.buildings3}
                 alt="Third slide"
               />

               <Carousel.Caption>
                 <h3>Third slide label</h3>
                 <p>
                   Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                 </p>
               </Carousel.Caption>
             </Carousel.Item>
           </Carousel> 
       </div>
       <Link to='/contact'>
         <Button className='btn-primary btn-lg my-5'>
           DISCUTEZ AVEC UN EXPERT!
         </Button>
       </Link>
       <Quiz isActive={true} count={2}/>
     </div>
    </div>
   );
 }
 export default Home;