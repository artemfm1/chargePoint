import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api-config';
import { getOneComment } from '../../services/comments';

export default function EditComment(props) {
  const [formData, setFormData] = useState({
		content: '',
	});
	const { content } = formData;
	const { comments, handleUpdate } = props;
	const { id, post_id } = useParams();
  
  useEffect(() => {
		const prefillFormData = async () => {
			const singleComment = await getOneComment(id)
			setFormData({
				content: singleComment.content,
			});
		};
		if (comments.length) {
			prefillFormData();
		}
  }, [comments]);
  
  const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

  
  return (
    <form
    onSubmit={(e) => {
      e.preventDefault();
      handleUpdate(id, formData, post_id);
    }}
  >
    <h3>edit</h3>
    <label>
      Content:
        <textarea type='text'
          name='content'
          value={content}
          onChange={handleChange} />
    </label>
    <button>Submit</button>
  </form>
  )
}
