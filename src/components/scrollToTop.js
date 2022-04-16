import React from "react";

function ScrollButton({ scrollState }) {
  
	return (
		<div>
			{scrollState && (
				<div
					id="back-to-top"
					style={{ display: "block", left: "30px", right: "0px" }}
					className="back-to-top"
					onClick={() => window.scrollTo(0, 0)}
				>
					<i class="fas fa-angle-double-up"></i>{" "}
				</div>
			)}
		</div>
	);
}

export default ScrollButton;
