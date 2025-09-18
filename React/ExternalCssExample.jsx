import React from 'react';
import './Mystyles.css';

/*--- Defining functional component ---*/
function ExternalCssExample()
{
	/*--- UI designing ----*/
	return(
			<div>
				<h1>External CSS Example</h1>
				<div className="computer">
					<h2> Computer</h2>
					Computer is an electronic device. <br/>
					It has high performance and high accuracy.
				</div>
				<div id="printer">
					<h2>Printer </h2>
					Printer is an Output device. <br/>
					It generates data as a hard copy.
				</div>
			</div>
		)
}
export default ExternalCssExample