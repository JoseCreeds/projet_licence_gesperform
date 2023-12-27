import React, { useState } from 'react'
import Logo_one from '../img/document.png'
import { Link } from 'react-router-dom';

function Modifierprofil() {

    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [num_matricul , setNumMatricul] = useState(JSON.parse(localStorage.getItem('employee_detail')).num_matricul)
    const [changed, setDataChanged] = useState('');
    const update = () => {
        if (password === '') {
            setError('Aucun champs vide');
        } else if(password !== '') {
            setError('');
            fetch(`https://gesperform.online/public/api/modifydata`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    new_password: password,
                    num_matricul:num_matricul
                }),

            })
            .then(response => response.json())
            .then((data) => {

                if(data.statut === 'Data changed')
                 {setDataChanged(data.statut)}
                    //console.log(data)



                   



            })
        }
    }

    return (

        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}  className='contain_rapport'>
            <div style={{ width: '100%',}} className='contain_rapport_header'>
                <div   className='contain_nav_confirme'>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to='/acceuilemployee' className='retour' >
                        Retour
                    </Link>

                </div>

                <div className='contain_img_confirm'>
                    <img src={Logo_one} className='img_confirm' />
                </div>
            </div>


            <div className='contain_modifiy_data' >

                <input className='con_inpone_rapport' type='text' placeholder=" Nom "


                />

                <input className='con_inpone_rapport' type='text' placeholder=" Prenom "


                />


                <input  className='con_inpone_rapport' type='text' placeholder=" Password "


                    onChange={(e) => { setPassword(e.target.value) }}



                />


                <input className='con_inpone_rapport' type='text' placeholder=" Date de naissance"

                />


                <input className='con_inpone_rapport' type='text' placeholder=" Email"

                />




                <input className='con_inpone_rapport' type='text' placeholder=" Téléphone"


                />




                <input className='con_inpone_rapport' type='text' placeholder="Lieu de naissance"


                />


                <div style={{color:'red'}} >
                   {
                    error
                   }
                </div>

                <div style = {{color : "green"}} >{changed}</div>
                <button onClick={update} className='send_rapport' >
                    Modifier mes informations 
                </button>


            </div>
        </div>

    )
}

export default Modifierprofil