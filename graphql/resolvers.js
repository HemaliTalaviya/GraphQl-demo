
const { Query } = require('mongoose')
const userModel = require('../model/usermodel')

module.exports = {

Query:{
    async user(_,{ID}){
        return await userModel.findById(ID);
    },
    async getUser(_,{age}){
        return await userModel.find();
    }
},
Mutation:{
    async createUser(_,{userinput:{name,email,age}}){
        const createdUser = await userModel({
            name:name,
            email:email,
            age:age
        })

        const res = await createdUser.save();
        return {
            id:res._id,
            name:res.name,
            email:res.email,
            age:res.age
            // ...res._doc
        }
    },
    async updateUser(_,{ID,userinput:{name,email,age}}){
        console.log(`update user ${ID} with ${name} and ${email} updated  ${age}`);
        try {
            const result = await userModel.updateOne({ _id: ID }, { name, email, age });
            // console.log('Update result:', result);
    
            const editedData = result.modifiedCount;
            // console.log('Modified count:', editedData);
    
            return editedData;
          } catch (error) {
            console.error('Error updating user:', error);
            throw new Error('Failed to update user');
          }
    }
}
}