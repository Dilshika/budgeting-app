import { Form } from 'react-router-dom';

const Intro = () => {
	return (
		<div className="intro">
			<div>
				<h1>
					Plan your Desires <span className="accent">Wisely</span>
				</h1>
				<p>
					Personal budgeting is the secret to financial freedom. Start your
					journey today.
				</p>
				<Form method="post">
					<input
						type="text"
						name="userName"
						required
						placeholder="What is your Name ?"
						aria-label="Your Name"
						autoComplete="given-name"
					/>
					<input
						type="text"
						name="gender"
						placeholder="Who Do You Like to Prefer as Male or Female?"
						aria-label="Your Gender"
					/>
					<input type="hidden" name="_action" value="newUser" />
					<button type="submit" className="btn btn-dark">
						<span>Create Account</span>
						{/* <img src="add.png" /> */}
					</button>
				</Form>
			</div>
			<img src="welcome.jpg" />
		</div>
	);
};

export default Intro;
