import React from "react";

const AboutComponent = () => {
 
    return(

        <>
            <main className="about">
                <div className="about-box">
                    <div className="box-name">
                        <h2>BOUDJENANE Rachid</h2>
                    </div>
                    <div className="row">
                       <div className="col-3 d-sm-block ">
                           <img src="img/rch.jpeg" alt="" width="150" className="avatar"/>
                           <div className="row mt-4 mb-3">
                               <img src="img/logo/house.png" alt="logo maison" width="30" className="col-3"/>
                               <h5 className="col-6">Toulouse</h5>
                           </div>
                           <div className="row mb-3">
                               <img src="img/logo/birthday-cake.png" alt="logo maison" className="col-3"/>
                              <h5 className="col-6">09/07/1997</h5>
                           </div>
                           <div className="row mb-3">
                               <img src="img/logo/car.png" alt="logo maison" className="col-3"/>
                              <h5 className="col-6">Permis</h5>
                           </div>
                       </div>
                       <div className="col-9">
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequatur deleniti deserunt dignissimos esse excepturi hic incidunt itaque labore, laborum, libero magnam magni nesciunt nisi perspiciatis recusandae saepe totam voluptatum.</p>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequatur deleniti deserunt dignissimos esse excepturi hic incidunt itaque labore, laborum, libero magnam magni nesciunt nisi perspiciatis recusandae saepe totam voluptatum.</p>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequatur deleniti deserunt dignissimos esse excepturi hic incidunt itaque labore, laborum, libero magnam magni nesciunt nisi perspiciatis recusandae saepe totam voluptatum.</p>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequatur deleniti deserunt dignissimos esse excepturi hic incidunt itaque labore, laborum, libero magnam magni nesciunt nisi perspiciatis recusandae saepe totam voluptatum.</p>
                       </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default AboutComponent;