import { useNavigate, useRouteError } from 'react-router-dom';

const Error = () => {
	const error = useRouteError();
	const navigate = useNavigate();

	return (
        <div className="error">
            <img className='main-image' src='sorry.png'></img>
			<h1>Sorry, We've got a problem</h1>
			 {<p>{error.message || error.statusText}</p>} 
			<div className="flex-md">
				<button className="btn btn-left" onClick={() => navigate(-1)}>
					<img src="left.png" width={50} />
					<span>Go Back</span>
				</button>
				<button className="btn btn-right" onClick={() => navigate(-1)}>
					<img src="right.png" width={50} />
					<span>Go Home</span>
				</button>
			</div>
		</div>
	);
};

export default Error;
