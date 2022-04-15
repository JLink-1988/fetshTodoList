const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			list:[]

		},
		actions: {
			getData: () => {
				fetch("http://assets.breatheco.de/apis/fake/todos/user/janeiro", {
					method: 'GET',
					redirect: 'follow'
				})
				.then(response=> response.json())
				.then(result => setStore({list:result}))
				.catch(error => console.log('error', error));

			},
			addItem: (item) => {
				fetch("http://assets.breatheco.de/apis/fake/todos/user/janeiro",{
					method: 'PUT',
					redirect: 'follow',
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify([...getStore().list, {label: item, done: false}])
				})
				.then(response => response.status === 200 ? getActions().getData(): "")
				.catch(error => console.log("error", error))
			}
		}
	};
};

export default getState;
