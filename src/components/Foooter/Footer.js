import React from "react";

function Footer() {
  return <div>
            <section id="contact" class="contact">
            <div class="section-heading text-center">
                <h2>contact me</h2>
            </div>
            <div class="container">
                <div class="contact-content">
                    <div class="row">
                        <div class="col-md-offset-1 col-md-5 col-sm-6">
                            <div class="single-contact-box">
                                <div class="contact-form">
                                    <form>
                                        <div class="row">
                                            <div class="col-sm-6 col-xs-12">
                                                <div class="form-group">
                                                    <input type="text" class="form-control" id="name" placeholder="Name*" name="name" />
                                                </div>   
                                            </div>    
                                            <div class="col-sm-6 col-xs-12">
                                                <div class="form-group">
                                                    <input type="email" class="form-control" id="email" placeholder="Email*" name="email" />
                                                </div>   
                                            </div>    
                                        </div>  
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <div class="form-group">
                                                    <input type="text" class="form-control" id="subject" placeholder="Subject" name="subject" />
                                                </div>   
                                            </div>    
                                        </div>  
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <div class="form-group">
                                                    <textarea class="form-control" rows="8" id="comment" placeholder="Message" ></textarea>
                                                </div>   
                                            </div>    
                                        </div>  
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <div class="single-contact-btn">
                                                    <a class="contact-btn" href="#" role="button">submit</a>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-offset-1 col-md-5 col-sm-6">
                            <div class="single-contact-box">
                                <div class="contact-adress">
                                    <div class="contact-add-head">
                                        <h3>browny star</h3>
                                        <p>uI/uX designer</p>
                                    </div>
                                    <div class="contact-add-info">
                                        <div class="single-contact-add-info">
                                            <h3>phone</h3>
                                            <p>987-123-6547</p>
                                        </div>
                                        <div class="single-contact-add-info">
                                            <h3>email</h3>
                                            <p>browny@info.com</p>
                                        </div>
                                        <div class="single-contact-add-info">
                                            <h3>website</h3>
                                            <p>www.brownsine.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="hm-foot-icon">
                                    <ul>
                                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                        <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </section>

            <footer id="footer-copyright" class="footer-copyright">
            <div class="container">
                <div class="hm-footer-copyright text-center">
                    <p>
                        &copy; copyright yourname. design and developed by 
                    </p>
                </div>
            </div>

            <div id="scroll-Top">
                <div class="return-to-top">
                    <i class="fa fa-angle-up " id="scroll-top" ></i>
                </div>
                
            </div>
            </footer>
            </div>;
}

export default Footer;