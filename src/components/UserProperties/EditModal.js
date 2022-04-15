import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { FiEdit, FiTrash2 } from "react-icons/fi";

function MyVerticallyCenteredModal(props) {
	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Modal heading
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<h4>Centered Modal</h4>
				<p>
					Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
					dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
					consectetur ac, vestibulum at eros.
				</p>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
}

function App({}) {
	const [modalShow, setModalShow] = useState(false);

	return (
		<>
			<Button
				variant="btn btn-secondary btn-outline w-100"
				style={{
					backgroundColor: "#00c194",
					textAlign: "center",
					border: 0,
					height: "30px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					fontSize: "16px",
					padding: "20px ",
					width:"100%"
				}}
				onClick={() => setModalShow(true)}
			>
				<FiEdit size={20} style={{ marginRight: "10px" }} />
				Edit
			</Button>

			<MyVerticallyCenteredModal
				show={modalShow}
				onHide={() => setModalShow(false)}
			/>
		</>
	);
}

export default App;
