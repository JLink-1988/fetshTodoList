import React {useContext, useState} from "react";
import "../../styles/home.css";
import {Context} from "../store/appContext.js"


export const Home = () => {
	const {store, actions} = useContext(context)
	const [item, setItem] = useState("")

	return(
		<div>
			<div>
				<input
				    type="text"
					className="form-control"
					placeholder="New Task"
					onChange={(e)}
			</div>
		</div>
	)
}
);
