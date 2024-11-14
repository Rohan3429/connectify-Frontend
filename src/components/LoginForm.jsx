const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const response = await loginUser(formData);
    
    if (response.token) {
      navigate('/student');
    } else {
      setError(response.message || 'Login failed');
    }
  } catch (err) {
    setError('Network error - please try again');
  }
};
