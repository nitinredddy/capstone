import { Faculty } from "../model/faculty.model.js";

const getFacultyByDomain = async (req, res) => {
    try {
        const { domain } = req.query;  
        if (!domain) {
            return res.status(400).json({ message: "Domain query is required" });
        }

        console.log("API hit with domain:", domain);

        
        const facultyList = await Faculty.find({
            $or: [
                { Domain1: { $regex: domain, $options: 'i' } },
                { Domain2: { $regex: domain, $options: 'i' } },
                { Domain3: { $regex: domain, $options: 'i' } }
            ]
        });

        
        const sortedFaculty = facultyList.sort((a, b) => {
            if (a.Name === "Dr. Sandesh B J") return -1; 
            if (b.Name === "Dr. Sandesh B J") return 1;

            const rankOrder = {
                "Professor":1,
                "Associate Professor":2,
                "Assistant Professor":3
            };

            return (rankOrder[a.Designation] || 4) - (rankOrder[b.Designation] || 4);
        });

        if(!sortedFaculty){
            throw new Error("some error occured")
        }

        res.status(200).json(sortedFaculty);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

const getFaculty = async(req,res)=>{
    try {
        const mentors=await Faculty.find()
        console.log("Fetched mentors:", mentors);
        res.status(200).json(mentors)
    } catch (error) {
        res.status(500).json({message:'Error'})
    }
}

export {getFacultyByDomain,getFaculty}

