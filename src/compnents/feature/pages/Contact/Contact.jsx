import "./Contact.css";
import React from "react";

function Contact() {
  return (
    <div className="contact w-75 d-flex justify-content-center card text-center">
     <section class="mb-4">

<h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
<p class="text-center w-responsive mx-auto mb-5">Do you have any questions?<br></br> Please do not hesitate to contact us directly. Our team will come back to you within
    a matter of hours to help you.</p>

<div class="row">

    <div class="col-md-7 mb-md-0 mb-5 contactInput">
        <form id="contact-form" name="contact-form" action="mail.php" method="POST">

            <div class="row">

                <div class="col-md-6">
                    <div class="md-form mb-0">
                        <input type="text" id="name" name="name" class="form-control" placeholder="Your name"></input>
                        <label for="name" class=""></label>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="md-form mb-0">
                        <input type="text" id="email" name="email" class="form-control" placeholder="Your email"></input>
                        <label for="email" class=""></label>
                    </div>
                </div>

            </div>

            <div class="row">
                <div class="col-md-12">
                    <div class="md-form mb-0">
                        <input type="text" id="subject" name="subject" class="form-control" placeholder=" Subject"></input>
                        <label for="subject" class=""></label>
                    </div>
                </div>
            </div>

            <div class="row">

                <div class="col-md-12">

                    <div class="md-form">
                        <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea" placeholder=" Your message"></textarea>
                        <label for="message"></label>
                    </div>

                </div>
            </div>

        </form>

        <div class="text-center text-md-left">
            <a class="btn btn-primary" onclick="
            ">Send</a>
        </div>
        <div class="status"></div>
    </div>

    {/* <div class="col-md-3 text-center">
        <ul class="list-unstyled mb-0">
            <li><i class="fas fa-map-marker-alt fa-2x"></i>
                <p>San Francisco, CA 94126, USA</p>
            </li>

            <li><i class="fas fa-phone mt-4 fa-2x"></i>
                <p>+ 01 234 567 89</p>
            </li>

            <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                <p>contact@daniel gedemo.com</p>
            </li>
        </ul>
    </div> */}

</div>

</section>
    </div>
  );
};

export default Contact;
