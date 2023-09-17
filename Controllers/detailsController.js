import Details from '../Models/DetailModel.js';






export const AddDetails = async (req, res) => {
    try {
        const { firstname, lastname, email, dob, gender, mobile_number, city, state } = req.body;

        const users = await Details.findOne({email:email});
        console.log(users);

        // Calculate age based on the date of birth
        const dobDate = new Date(dob);
        const today = new Date();
        const age = today.getFullYear() - dobDate.getFullYear();

        if(!users){
            const details = new Details({
                firstname: firstname,
                lastname: lastname,
                email: email,
                dob: dob,
                age: age, // Set the calculated age
                gender: gender,
                mobile_number: mobile_number,
                city: city,
                state: state
            });
    
            details.save();
            console.log(details);
            res.json({ status: true, message: "Details added successfully", data: details });

        }
        else{
            res.json({ status: false, message: "Already Added. Please try new one"});

        }

      

    } catch (err) {
        console.log(err);
        res.json({ status: false, message: "Something went wrong." });
    }
}



export const EditDetails = async(req,res)=>{
    try{
        const {firstname,lastname,email,dob,gender,mobile_number,city,state} = req.body;
        const dobDate = new Date(dob);
        const today = new Date();
        const age = today.getFullYear() - dobDate.getFullYear();

        const details = await Details.findByIdAndUpdate({_id:req.params.id});
        if(details){
            details.firstname = firstname,
            details.lastname = lastname,
            details.email = email,
            details.dob = dob,
            details.age = age,
            details.gender = gender,
            details.mobile_number = mobile_number,
            details.city = city,
            details.state = state,
            details.updatedAt = Date.now();

            details.save();
            console.log(details);
            res.json({status:true,message:"Details has been Edited Successfully.",data:details})
        }
        else{
            res.json({status:false,message:"Details cannot be Edited."}) 
        }

    }
    catch(err){
        console.log(err);
        res.json({status:false,message:"Something wenrt wrong.please check the user details"});
    }
}

export const ViewDetails = async(req,res)=>{
    try{
      const users = await Details.findOne({_id:req.params.id});
      console.log(users);
      if(users){
        res.json({status:true,message:"Details Viewed Successfully",data:users});
      }
      else{
         res.json({status:false,message:"Details cannot be  Viewed "});
      }
    }
    catch(err){
        console.log(err);
        res.json({status:false,message:"Something wenrt wrong.please check the user details"});
    }
}

export const DeleteDetails = async(req,res)=>{
    try{
        const users = await Details.findByIdAndDelete({_id:req.params.id});
      console.log(users);
      if(users){
        res.json({status:true,message:"Details Deleted Successfully",data:users});
      }
      else{
         res.json({status:false,message:"Details cannot be  Deleted "});
      }
    }
    catch(err){
        console.log(err);
        res.json({status:false,message:"Something wenrt wrong.please check the user details"});
    }
}