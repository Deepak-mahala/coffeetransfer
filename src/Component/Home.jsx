import React from 'react'
import a from "../Assets/deep1.png"
import b from "../Assets/photo-1587080413959-06b859fb107d.avif"
import c from "../Assets/images (10).jpeg"
import d from "../Assets/images (10).jpeg"
import e from "../Assets/images (12).jpeg"
import f from "../Assets/images (10).jpeg"
import g from "../Assets/images (10).jpeg"
import h from "../Assets/images (10).jpeg"
import j from "../Assets/images (11).jpeg"
import k from "../Assets/chefs-1.jpg"
import l from "../Assets/chefs-2.jpg"
import m from "../Assets/chefs-3.jpg"
import n from "../Assets/reservation.jpg"

const Home = () => {
  return (
    <>
     <section style={{backgroundColor: "#eeeeee"}}>
    <div class="container">
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12">
                    <h1 style={{marginTop: "20%",opacity: "1"}}>Enjoy Your Healthy <br /> Delicious Coffee</h1>
                    <p>Sed autem laudantium dolores. Voluptatem itaque ea consequatur <br /> eveniet. Eum quas beatae cumque eum quaerat.</p>
                    <div >
                        <button type="button" className="btn btn-danger " style={{borderRadius:" 25px",padding: "10px 30px 10px 30px"}}>Book a Table</button>
                         <a type="button" style={{marginLeft: "3vh",fontSize: "20px"}} >
                           <span><i className="fa-regular fa-circle-play" style={{color:"red"}}></i></span> watch video</a>
                        </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 mt-5">
                    <img src={a} alt="hgh" style={{width: "100%",height:"100%",  marginLeft: "10%", paddingBottom:" 10%"}}/>
            </div>
        </div>
    </div>
  </section>

  <section className="about mt-5 pb-5">
    <div className="container">
        <div className="text-center">
            <div><h5>About Us</h5></div>
            <div><h3>Learn More <span style={{color: "rgb(218, 7, 7)"}}>About Us</span></h3></div>
        </div>
        <div className="row mt-5">
            <div className="col-lg-7">
                <div className='back'>
                    <div className="row">
                        <div className="col-10 m-auto mb-5">
                            <div style={{width:"100%",height: "80px",backgroundColor: "#fff",marginTop: "55%"}}>
                                <h3 style={{textAlign: "center"}}>Book a Table <br /><span style={{color: "rgb(182, 11, 11)"}}>+1 5589 55488 55</span></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12 ps-5">
              <p style={{fontStyle: "italic"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut labore et dolore.</p>
                <p><i className="fa fa-check-double me-2"></i>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p><i className="fa fa-check-double me-2"></i>Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                <p><i className="fa fa-check-double me-2"></i>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</p>
                <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
                <img src={b} alt="" style={{width: "100%"}}/>
            </div>
        </div>
    </div>
  </section>

  <section style={{backgroundColor: "#eeeeee"}}>
      <div className="container mt-5 " >
        <div className="row">
          <div className="col-md-4 mt-5 mb-5">
            <div className="bg-danger p-3">
              <h1>Why Choose </h1>
              <h1>Yummy?</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.</p>
              <button style={{borderRadius: "40px",padding: "0px 20px 0px 20px", marginLeft: "100px", border: "none"}}>Learn More</button>
            </div>
          </div>
          <div className="col-md-8" style={{display: "flex",justifyContent: "center",alignItems:" center"}}>
            <div className="container">
              <div className="row">
              <div className="col-md-4 mt-3"><div className="col-md-12 card">
              <div className="text-center" style={{paddingTop: "3vh"}}><i style={{backgroundColor: "rgb(210, 149, 159)",textAlign: "center",fontSize: "3vh",padding: "3vh 3vh 3vh 3vh",borderRadius:" 80px"}} className="fa-solid fa-calendar-days"></i></div>
                  <div>
                    <h5 className="text-center">Corporis voluptates officia eiusmod</h5>
                      <p className=" pt-3 pb-3 p-3">Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                  </div>
            </div></div>
            <div className="col-md-4 mt-3"><div className="col-md-12 card">
              <div className="text-center" style={{paddingTop: "3vh"}}><i style={{backgroundColor: "rgb(210, 149, 159)",textAlign: "center",fontSize: "3vh",padding: "3vh 3vh 3vh 3vh",borderRadius:" 80px"}} className="fa-solid fa-calendar-days"></i></div>
                  <div>
                    <h5 className="text-center">Corporis voluptates officia eiusmod</h5>
                      <p className=" pt-3 pb-3 p-3">Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                  </div>
            </div></div>
            <div className="col-md-4 mt-3">
            <div className="col-md-12 card">
              <div className="text-center" style={{paddingTop: "3vh"}}><i style={{backgroundColor: "rgb(210, 149, 159)",textAlign: "center",fontSize: "3vh",padding: "3vh 3vh 3vh 3vh",borderRadius: "80px"}} className="fa-solid fa-calendar-days"></i></div>
                  <div>
                    <h5 className="text-center">Corporis voluptates officia eiusmod</h5>
                      <p className=" pt-3 pb-3 p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, cum.</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
      </div>
    </section>

    <section className="BACKGROUND">
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-6 col-sm-12 ">
        <p className="text232">232</p>
        <p className="textclient">Clients</p>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 ">
        <p className="text232">232</p>
        <p className="textclient">Clients</p>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 ">
        <p className="text232">232</p>
        <p className="textclient">Clients</p>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 ">
        <p className="text232">232</p>
        <p className="textclient">Clients</p>
      </div>
    </div>
  </div>
</section>

    <section>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <p className="text-center">OUR MENU</p>
            <h3 className="text-center">Check Our <span style={{color:" brown"}}>Yummy Menu</span></h3>
            <h5 className="text-center mt-5"> Starters Breakfast Lunch Dinner</h5>
            <p className="text-center mt-3">MENU</p>
            <h2 className="text-center" style={{color: "brown"}}>Starters</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <img src={e} alt="" style={{width: "100%", paddingleft:"60px", paddingRight: "60px"}}/>
            <div style={{width: "100%", paddingLeft:"60px", paddingRight: "60px"}} className="text-center">
            <h4>Magnam Tiste</h4>
            <p>Lorem, deren, trataro, filede, nerada</p>
            <p><span style={{color: "brown"}}>$5.95</span></p>
          </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <img src={d} alt="" style={{width: "100%",paddingLeft:"60px", paddingRight: "60px"}}/>
            <div style={{width: "100%", paddingLeft:"60px", paddingLight:" 60px"}} class="text-center">
            <h4>Aut Luia</h4>
            <p>Lorem, deren, trataro, filede, nerada</p>
            <p><span style={{color: "brown"}}>$14.95</span></p>
          </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <img src={c} alt="" style={{width: "100%",paddingLeft:"60px", paddingRight: "60px"}}/>
            <div style={{width: "100%",paddingLeft:"60px", paddingRight: "60px"}} className="text-center">
            <h4>Est Eligendi</h4>
            <p>Lorem, deren, trataro, filede, nerada</p>
            <p><span style={{color: "brown"}}>$8.95</span></p>
          </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <img src={f} alt="" style={{width: "100%",paddingLeft:"60px", paddingRight: "60px"}}/>
            <div style={{width: "100%",paddingLeft:"60px", paddingRight: "60px"}} className="text-center">
            <h4>Est Eligendi</h4>
            <p>Lorem, deren, trataro, filede, nerada</p>
            <p><span style={{color: "brown"}}>$8.95</span></p>
          </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <img src={g} alt="" style={{width: "100%",paddingLeft:"60px", paddingRight: "60px"}}/>
            <div style={{width: "100%",paddingLeft:"60px", paddingRight: "60px"}} className="text-center">
            <h4>Est Eligendi</h4>
            <p>Lorem, deren, trataro, filede, nerada</p>
            <p><span style={{color: "brown"}}>$8.95</span></p>
          </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <img src={h} alt="" style={{width: "100%",paddingLeft:"60px", paddingRight: "60px"}}/>
            <div style={{width: "100%",paddingLeft:"60px", paddingRight: "60px"}} className="text-center">
            <h4>Est Eligendi</h4>
            <p>Lorem, deren, trataro, filede, nerada</p>
            <p><span style={{color: "brown"}}>$8.95</span></p>
          </div>
          </div>
        </div>
      </div>
    </section>

    {/* <section style={{backgroundColor: "#eeeeee"}}>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
           <p className="text-center">TESTIMONIALS</p>
           <h3 className="text-center">What Are They<span style={{color: "brown"}}>Saying About Us</span></h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2 col-md-4 col-sm-12">

          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <p><i className="fa-sharp fa-solid fa-quote-left"></i>
              Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.<i class="fa-sharp fa-solid fa-quote-right"></i>
              </p>
              <h3>SARA Wilsson</h3>
              <p>Designor</p>
              <i className="fa-solid fa-star" style={{color:" rgb(255, 251, 0)"}}></i>
              <i className="fa-solid fa-star" style={{color:" rgb(255, 251, 0)"}}></i>
              <i className="fa-solid fa-star" style={{color:" rgb(255, 251, 0)"}}></i>
              <i className="fa-solid fa-star" style={{color:" rgb(255, 251, 0)"}}></i>
              <i className="fa-solid fa-star" style={{color:" rgb(255, 251, 0)"}}></i>
              <h1 className="text-center"><span style={{color: "brown"}}>.</span>...</h1>
            </div>
            <div className="col-md-4">
              <img src={j} className="img-fluid testimonials-img" alt="..." style={{borderRadius: "100%",width: "100px", height: "50%", borderColor: "rgb(2, 6, 6)",margin:" auto"}}/>
            </div>
          <div className="col-lg-2 col-md-4 col-sm-12">

          </div>
        </div>
      </div>
    </section> */}

    <section>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="mt-5 text-center">
           <p className="text-center">EVENTS</p>
           <h3 >Share <span style={{color: "brown"}}>Your Moments </span>In Our Restaurant</h3>
          </div>
          <div className="col-lg-4 mt-5">
            <div className="back2">
              <div className="row">
                <div className="col-10 m-auto mb-5">
                    <div style={{width:"100%",height: "80px",marginTop: "120%", color: "#fff"}}>
                        <h3 style={{textAlign: "left"}}>Custom parties<br /><span>$499</span></h3>
                        <p>
                          Laborum aperiam atque omnis minus omnis est qui assumenda quos. Quis id sit quibusdam. Esse quisquam ducimus officia ipsum ut quibusdam maxime. Non enim perspiciatis.
                        </p>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div className="col-lg-4 mt-5">
            <div className="back3">
              <div className="row">
                <div className="col-10 m-auto mb-5">
                    <div style={{width:"100%",height: "80px",marginTop: "120%", color: "#fff"}}>
                        <h3 style={{textAlign: "left"}}>Custom parties<br /><span>$499</span></h3>
                        <p>
                          Laborum aperiam atque omnis minus omnis est qui assumenda quos. Quis id sit quibusdam. Esse quisquam ducimus officia ipsum ut quibusdam maxime. Non enim perspiciatis.
                        </p>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div className="col-lg-4 mt-5">
            <div className="back4">
              <div className="row">
                <div className="col-10 m-auto mb-5">
                    <div style={{width:"100%",height: "80px",marginTop: "120%", color: "#fff"}}>
                        <h3 style={{textAlign: "left"}}>Custom parties<br /><span>$499</span></h3>
                        <p>
                          Laborum aperiam atque omnis minus omnis est qui assumenda quos. Quis id sit quibusdam. Esse quisquam ducimus officia ipsum ut quibusdam maxime. Non enim perspiciatis.
                        </p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    <h1 className="text-center"><span style={{color: "brown"}}>.</span>...</h1>
        </div> 
      </div>
    </section>

    <section>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div style={{width: "100%"}}>
              <p className="text-center">CHEFS</p>
              <h4 className="text-center">Our <span style={{color: "brown"}}>Proffesional </span>Chefs</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card" style={{width: "100%"}}>
              <img src={k} alt="" className="card-img-top"/>
              <div className="card-body">
                <h5 className="text-center">Whelter White</h5>
                <p className="text-center">Master Chef</p>
                <p className="text-center">Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card" style={{width: "100%"}}>
              <img src={l} alt="" className="card-img-top"/>
              <div className="card-body">
                <h5 className="text-center">Sarah Jhonson</h5>
                <p className="text-center">Patissier</p>
                <p className="text-center">Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis. Voluptate sed quas reiciendis animi neque sapiente.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card" style={{width: "100%"}}>
              <img src={m} alt="" className="card-img-top"/>
              <div className="card-body">
                <h5 className="text-center">William Anderson</h5>
                <p className="text-center">Cook</p>
                <p className="text-center">Vero omnis enim consequatur. Voluptas consectetur unde qui molestiae deserunt. Voluptates enim aut architecto porro aspernatur molestiae modi.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container mt-5 mb-5 ">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 text-center">
            <div style={{width: "100%"}}>
              <p>BOOK A TABLE</p>
              <h3>Book<span style={{color: "brown"}}>Your Stay </span>With Us</h3>
            </div>
          </div>
        </div>
        <div className="row" style={{display: "flex",justifyContent:" center",alignItems: "center"}}>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div style={{width: "100%"}}>
              <img src={n} alt="" style={{width: "100%",height: "100%"}}/>
            </div>
          </div>
          <div className="col-lg-8 col-md-6 col-sm-12">
           <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <input className="form-control" type="text" placeholder="burger" aria-label="default input example"/>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <input className="form-control" type="text" placeholder="pizza" aria-label="default input example"/>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <input className="form-control" type="text" placeholder="ice-cream" aria-label="default input example"/>
            </div>
           </div>
           <div className="row mt-4">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <input className="form-control" type="text" placeholder="franches" aria-label="default input example"/>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <input className="form-control" type="text" placeholder="SAHI-PANEER" aria-label="default input example"/>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <input className="form-control" type="text" placeholder="CHAPATIS" aria-label="default input example"/>
            </div>
           </div>
     <div className="row">
      <div className="col-12">
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">BOOK-YOUR LONG-TABLE</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
      </div>
     </div>
     <div style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
      <button style={{borderRadius: "20px"}} className="btn btn-danger">book a table</button>
     </div>
          </div>
        </div>
      </div>
    </section>

    <section> 
      <div className="container mb-5" style={{backgroundColor: "rgb(255, 255, 255)", boxShadow: "rgba(0, 0, 0, 0.08) 0px 0px 30px"}}>
      <div className="col-lg-12 col-md-12 col-sm-12">
        <div className="row">
         <div className="col-lg-6 col-md-6 col-sm-12">
           <input className="form-control" type="text" placeholder="BOOK-YOUR ROOM" aria-label="default input example"/>
         </div>
         <div className="col-lg-6 col-md-6 col-sm-12">
           <input className="form-control" type="text" placeholder="AC/NON AC" aria-label="default input example"/>
         </div>
        </div>
        <div className="row mt-4">
         <div className="col-lg-12 col-md-12 col-sm-12">
           <input className="form-control" type="text" placeholder="LONG TIME BOOK/ONE DAY" aria-label="default input example"/>
         </div>
        </div>
  <div className="row">
   <div className="col-12">
     <div className="mb-3">
       <label for="exampleFormControlTextarea1" className="form-label">BOOK a party hall</label>
       <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
     </div>
   </div>
  </div>
  <div style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
   <button style={{borderRadius: "20px"}} class="btn btn-danger">book a table</button>
  </div>
       </div>
      </div>
      
    </section>
    <section style={{backgroundColor: "black",color:"white"}}>
      <div className="container" >
       <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12 mt-5 mb-5">
          <div style={{width: "100%"}}>
            <h5 style={{color: "#cec6c6"}}><i className="fa fa-location-dot"></i> Address</h5>
            <p>A108 Near akshar dham temple <br />RJ.14., NY 535022 - IND. </p> <p></p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 mt-5 mb-5 ">
          <div style={{width: "100%"}}>
            <h5 style={{color: "#cec6c6"}}> <i className="fa fa-phone"></i> Reservations</h5>
            <p>Phone: +1 5589 55488 55 <br />Email: info@example.com </p><p></p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 mt-5 mb-5 ">
          <div  style={{width: "100%"}}>
            <h5 style={{color: "#cec6c6"}}> <i className="fa fa-clock"></i> Opening Hours</h5>
            <p>Mon-Sat: 11AM - 23PM <br /> Sunday: Closed</p><p></p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 mt-5 mb-5 ">
          <div style={{width: "100%", color: "#cec6c6"}}>
            <h5>Follow Us</h5>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-linkedin"></i>
          </div>
        </div>
        </div>
       </div>
       <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div style={{width: "100%"}}>
              <p className="text-center">© Copyright 
               <strong><span>Yummy.</span></strong> All Rights Reserved <br />Designed by <strong> <span> Fusion_web_Development</span> </strong></p>
            </div>
          </div>
        </div>
       </div>
    </section>
    </>
  )
}

export default Home;