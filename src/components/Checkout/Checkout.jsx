import React, { useContext, useState } from 'react'
import styles from "./Checkout.module.css"
import { MyContext } from '../CartContext/CartContext'
import { collection, addDoc } from "firebase/firestore"
import {db} from "../../firebase/config"

const Checkout = () => {

    const  [formValues, setFormValues] = useState({
        nombre: "",
        email: "",
        telefono: "",
    });

    

    function handlerChange(e){
        setFormValues(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    function resetForm(){
        setFormValues({
            nombre: "",
            email: "",
            telefono: "",
        });
    }



    const { itemsCart, totalPrecio, clean } = useContext(MyContext)

    function enviarDatos(){
        const orden = {
            buyer: formValues,
            items: itemsCart,
            total: totalPrecio,
        }

        if(orden.buyer.nombre && orden.buyer.email && orden.buyer.telefono && itemsCart.length > 0){
                    const referencia = collection(db, "orders")

        addDoc(referencia, orden)
            .then((doc) => {
                clean();
                resetForm();
                const numeroOrden = doc.id;
                alert(`Gracias por comprar, su orden ha sido registrada con exito, su número de orden es:  "${numeroOrden}" ` )
            })



        }else{
            alert("complete sus datos o agregue productos a su carrito en caso que esté vacio");
        }
        
    }

    function handlerClick(e){
        e.preventDefault();
        enviarDatos();
    }

  return (
    <div>
        <h1 className={styles.finalizar}>Finalizar Compra</h1>

        <form className={styles.formulario} action="">
          <label className={styles.labelForm} htmlFor="">Nombre:</label>
          <input className={styles.inputForm} onChange={handlerChange} value={formValues.nombre} required name='nombre' type="text" placeholder='Nombre Apellido' />
          
          <label className={styles.labelForm} htmlFor="">Correo Electronico:</label>
          <input className={styles.inputForm} onChange={handlerChange} value={formValues.email} required name='email' type="email" placeholder='nombre@gmail.com'/>

          <label className={styles.labelForm} htmlFor="">Correo electronico:</label>
          <input className={styles.inputForm} onChange={handlerChange} value={formValues.telefono} required name='telefono' type="number" placeholder='Numero Telefonico'/>

        <button className={styles.buttonForm} type='submit'  onClick={handlerClick}>Comprar</button>
        </form>

    </div>
  )
}

export default Checkout