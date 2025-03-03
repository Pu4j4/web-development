import jwt from 'jsonwebtoken'

const generateToken = (id) => {  
  return jwt.sign({ id }, "SUPER_KEY", {
    expiresIn: '30d',
  })
}

export default generateToken
