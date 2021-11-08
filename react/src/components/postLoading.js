import React from 'react';

function PostLoading(Component) {
	const access_token = localStorage.getItem('access_token')
	return function PostLoadingComponent({ isLoading, ...props }) {
		if (!isLoading) return <Component {...props} />;
		return (
			access_token ? (
				<p style={{ fontSize: "20px" }}>We are loading</p>
			) : (
				<p style={{ fontSize: "20px" }}>Please login to view the users</p>
			)
		)
	};
}
export default PostLoading;
