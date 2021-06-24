import api from './api-config';

export const getAllComments = async () => {
	const resp = await api.get('/comment');
	return resp.data;
};

export const getOneComment = async (id) => {
	const resp = await api.get(`/comment/${id}`);
	return resp.data;
};

export const postComment = async (commentData) => {
	const resp = await api.post('/comments', { comment: commentData });
	return resp.data;
};

export const putComment = async (id, commentData) => {
	const resp = await api.put(`/comment/${id}`, { comment: commentData });
	return resp.data;
};

export const deleteComment = async (id) => {
	const resp = await api.delete(`/comment/${id}`);
	return resp;
};

