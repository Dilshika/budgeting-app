//Local storage
export const fetchData = (key) => {
	return JSON.parse(localStorage.getItem(key));
};


export const setData = (data) => {
    
}

export const getAllMatchingItems = () => {};

export const formatCurrency = (amount) => {
	return amount.toLocalString(undefined, {
		style: 'currency',
		currency: 'LKR',
	});
};

export const formatDateToLocalString = (date) => {};