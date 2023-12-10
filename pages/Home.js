import  Input from "../categore/Input"
import Image from "../categore/Image"
import n from "../categore/Designer(4).jpg"
import s from "../categore/WhatsApp Image 2023-11-27 at 14.38.37_f605b710.jpg"
import v from "../categore/WhatsApp Image 2023-11-25 at 21.18.59_5bfa4e95.jpg"
import { Link } from "react-router-dom"
import "./Home.css"
export const Home =() =>{
    return (
        <><div>
        <section className='one'>  
       <img  className='n' src={n} alt="jpg"/>
       <h1>welcome </h1>
      </section>
      <section className='two'>
        <div className="h">
       <img className='s' src={s} alt="jpg"/>
      <button><Link to="/Man">Man</Link></button>
      </div>
      <div className="h">
       <img className='v' src={v}  alt="jpg"/>
      <button> <Link to="/Woman">Woman</Link></button>
      </div>
      </section>
      <section className='three'>
        <h3>reviews</h3>
      </section>
      <section className='four'>
        <h3>about haveen gifts</h3>
        <p>Here you can find all your gifts
        essentials, we'ar very excited to have 
        you here to enjoy the best online
        shopping experience, offering the 
        most unique & customized gifts not 
        only for your beloved ones but also
        for you 🤍</p>
      </section>
<footer>
<h3>contact us</h3>
<Input/>
</footer>
</div>
</>
    )
};