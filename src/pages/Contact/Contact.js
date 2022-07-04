import React from 'react'

const Contact = () => {

	return(

			<div className="container-fluid">

			<h1 className="text-center" style={{paddingTop: "5%"}}>
				Contact Me
			</h1>

			
<section class="mb-4">

  
   
    <p class="text-center w-responsive mx-auto mb-5" style={{paddingTop: "13%"}}>Do you have any questions? Please do not hesitate to contact me directly.
	 I'll get back to you in no time.</p>

    <div class="row">

        <div class="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

               
                <div class="row cup-space">

                 
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="name" name="name" class="form-control"/>
                            <label for="name" class="">Your name</label>
                        </div>
                    </div>
                  
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="email" name="email" class="form-control"/>
                            <label for="email" class="">Your email</label>
                        </div>
                    </div>
                  

                </div>
              
                <div class="row cup-space">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <input type="text" id="subject" name="subject" class="form-control"/>
                            <label for="subject" class="">Subject</label>
                        </div>
                    </div>
                </div>
              
                <div class="row cup-space">

                 
                    <div class="col-md-12">

                        <div class="md-form">
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                            <label for="message">Your message</label>
                        </div>

                    </div>
                </div>
              

            </form>

            <div class="text-center text-md-left">
                <a class="btn btn-dark" onclick="document.getElementById('contact-form').submit();">Send</a>
            </div>
            <div class="status"></div>
        </div>
       

        <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">

                <li><i class="fas fa-phone mt-4 fa-2x"></i>
                    <p>+ 52 562 499 00 11</p>
                </li>

                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                    <p>alfredohernandes4@gmail.com</p>
                </li>
            </ul>
        </div>
     

    </div>

</section>

			<footer class="mt-5 pt-5 text-black bg-dark force-to-bottom">
				<div class="container d-flex justify-content-center">
					<div class="align-items-center">
						
							<div class="row">
								<p class="text-white">© Alfredo 2022 </p>
								
							</div>

					</div>
				</div>
			</footer>

			</div>
		)

}

export default Contact;
