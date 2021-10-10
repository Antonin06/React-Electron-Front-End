import React from 'react';
import Login from "../pages/Login";
import img from '../assets/images/books.jpg';
import ModalRegister from "./Modal-Register";

function ModalLogin() {
	return (
		<>
		<div className="modal fade" id="modal-login" tabIndex="-1" aria-labelledby="login"
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
								<Login/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<ModalRegister/>
	</>
	);
}

export default ModalLogin;
