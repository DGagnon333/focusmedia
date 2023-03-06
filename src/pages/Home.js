import { Card, Button} from 'react-bootstrap';
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
         
         <Card style={{ width: '12rem', border: 'none' }}>
           <Card.Body>
          <Card.Img src={imgArr['buildings1']}/>
             <Card.Title>Compétence et expertise</Card.Title>
             <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
             <Card.Text>
              Info
             </Card.Text>
           </Card.Body>
         </Card>

         <Card style={{ width: '12rem', border: 'none' }}>
           <Card.Body>
          <Card.Img src={imgArr['buildings2']}/>
             <Card.Title>Accès au réseau de contact</Card.Title>
             <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
             <Card.Text>
              Info
             </Card.Text>
           </Card.Body>
         </Card>

         <Card style={{ width: '12rem', border: 'none' }}>
           <Card.Body>
          <Card.Img src={imgArr['buildings3']}/>
             <Card.Title>Maximiser votre portefeuille immobilier</Card.Title>
             <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
             <Card.Text>
               Info
             </Card.Text>
           </Card.Body>
         </Card>

         <Card style={{ width: '12rem', border: 'none' }}>
          <Card.Img src={imgArr['buildings4']}/>
           <Card.Body>
             <Card.Title>Rencontre trimestrielles stratégiques</Card.Title>
             <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
             <Card.Text>
               Info
             </Card.Text>
           </Card.Body>
         </Card>

         <Card style={{ width: '12rem', border: 'none' }}>
           <Card.Body>
          <Card.Img src={imgArr['buildings5']}/>
             <Card.Title>Compétence et expertise</Card.Title>
             <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
             <Card.Text>
              Info
             </Card.Text>
           </Card.Body>
         </Card>
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