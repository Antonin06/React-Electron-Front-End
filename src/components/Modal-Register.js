import React from 'react';
import img from "../assets/images/books.jpg";
import Login from "../pages/Login";
import Register from "../pages/Register";


function ModalRegister() {
	return (
		<div className="modal fade" id="modal-register" tabIndex="-1" aria-labelledby="register"
			 aria-hidden="true">
			<div className="modal-dialog bg-primary">
				<div className="modal-content bg-primary">
					<div className="modal-body p-0">
						<div className="row">
							<div className="col-md-6 d-none d-lg-block">
								<img src={img}  className="img-fluid" alt=""/>
							</div>
							<div className="col-md-6 col-12 formulaire">
								<button type="button" className="btn-close" data-bs-dismiss="modal"
										aria-label="Close"></button>
								<Register/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ModalRegister;
