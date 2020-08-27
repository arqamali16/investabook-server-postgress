import jwt from 'jsonwebtoken'

const secretToken = '123@abcd'

const authorise = (req:any,res:any,next:any) =>{

    // token
    const token = req.header('x-auth-token')

    if(!token){
        res.stauts(400).json({ msg:"Authorization failed" })
    }

    try{
        const decoded = jwt.verify(token,secretToken) as any
        req.user = decoded.user
        next()
    }catch(err){
        res.status(401).json({msg:'token not valid'})
    }
}

export default { authorise }
