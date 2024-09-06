import { Candidate } from "../models/Candidate.models.js";
import { User } from "../models/User.models.js";

const checkAdminRole = async(userID) => {
      try {
            const user = await User.findById(userID)
            if(user.role === 'admin'){
                  return true;
            }
      } catch (error) {
            return false
      }
}

const addCandidate = async (req,res) => {
      try {
            if(! await checkAdminRole(req.user.id))
                  return res.status(403).json({success:false,msg:"user has not admin role"})

            const data = req.body
            
            const newCandidate = new Candidate(data)

            const response = await newCandidate.save()

            res.status(200).json({success:true,response: response})
      } catch (error) {
            res.status(500).json({success:false,msg: "Internal Server Error"})
      }
}

const updateCandidate = async(req,res) => {
      try {
            if(! await checkAdminRole(req.user.id))
                return res.status(403).json({success:false,msg:"user has not admin role"})

            const candidateID = req.params.candidateID;
            const updatedCandidateData = req.body;

            const response = await Candidate.findByIdAndUpdate(candidateID,updatedCandidateData,{
                  new: true, 
                  runValidators: true 
            })

            if(!response){
                  return res.status(404).json({success:false,msg: " Candidate not found"})
            }
            res.status(200).json({response})
      } catch (error) {
            res.status(500).json({success:false,msg: "Internal Server Error"})
      }
}
const deleteCandidate = async(req,res) => {
      try {
            if(! await checkAdminRole(req.user.id))
                  return res.status(403).json({success:false,msg:"user does not have admin role"})

            const candidateID = req.params.candidateID; 
            const response = await Candidate.findByIdAndDelete(candidateID)

            if(!response){
                  return res.status(404).json({success:false,msg: "Candidate not found"})
            }
            res.status(200).json({success:true,response})
      } catch (error) {
            res.status(500).json({success:false,msg: "Internal Server Error"})
      }
}

const voteToCandidate = async(req,res) => {
      const candidateID = req.params.candidateID;
      const userId = req.user.id;

      try {
            const candidate = await Candidate.findById(candidateID)
            if(!candidate){
                  return res.status(404).json({success:false,msg:"Candidate not found"})
            }

            const user = await User.findById(userId)
            if(!user){
                  return res.status(404).json({success:false,msg:"User not found"})
            }

            if(user.isVoted){
                 return res.status(400).json({success:false,msg: "You have already voted"})
            }
            if(user.role == 'admin'){
                  res.status(400).json({success: false,msg: "admin is not allowed"})
            }

            candidate.votes.push({user: userId})
            candidate.voteCount++;
            await candidate.save()

            user.isVoted = true
            await user.save()

            res.status(200).json({success:true,msg: "Vote recorded successfully"})
      } catch (error) {
            res.status(500).json({success:false,msg: "Internal Server Error"})
      }
}

const voteCount = async(req,res) => {
      try {
            const candidate = await Candidate.find().sort({voteCount: 'desc'});

            const voteRecord = candidate.map((data) =>{
                  return {
                        party: data.party,
                        count: data.voteCount
                  }
            });

            return res.status(200).json(voteRecord)
      } catch (error) {
            res.status(500).json({success:false,msg: "Internal Server Error"})
      }
}


const fetchCandidates = async(req,res) =>{
      try{
            const candidates = await Candidate.find({});
            res.status(200).json(candidates)
      }catch(err){
            console.log(err)
      }

}
export { addCandidate, updateCandidate, deleteCandidate, voteToCandidate, voteCount, fetchCandidates }