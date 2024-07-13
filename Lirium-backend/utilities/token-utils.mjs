const createAndSendToken = (user, statusCode, res) => {
    const token = user.generateToken();
    res.status(statusCode).json({ success: true, statusCode, token });
  };
  
  export default createAndSendToken;
  