import React from 'react'
import Cover from '../component/cover/cover';
import Presentation from '../component/section/presentation';
import { apropos } from '../model/constant';

const Contact = () => {
    return (
        <div className="contact">
            <Cover />
            <Presentation entete="Contact" />
            <div class="info container row">
              {apropos.contact.map(item => (
                <div class="address col-lg-5">
                    <div className="icon">
                      <i className={item.icon} ></i>
                    </div>
                    <h4>{item.titre}</h4>
                    <p>{item.data}</p>
                </div>
              ))}
            </div>
        </div>
    )
}

export default Contact
