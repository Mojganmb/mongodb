const MongoClient = require('mongodb').MongoClient;
const objectId = require('mongodb').objectId;

const learnersData = [
    {
        learner: "Parsa",
        subject:"Science", 
        score: 90
    },
    {
        learner: "Mojgan",
        subject:"Math", 
        score: 70
    },
    {
        learner: "Javad",
        subject:"Math", 
        score: 50
    },
];

const url = 
"mongodb+srv://mbeigi:mojmoj60@cluster0.nvunfmo.mongodb.net/?retryWrites=true&w=majority";

const dbName = "learners";
const collectionName = "grades";

//connect to database
async function run(){
    const client = new MongoClient(url);    
    
    try{
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
    
        // //Insertion
        // const insertLearner =await collection.insertOne({
        //     learner: "John Doe",
        //     subject:"Math", 
        //     score: 85
        // });
        //  const insertLearner =await collection.insertOne({
        //     learner: "Parmis",
        //     subject:"Math", 
        //     score: 95
        // });

        //Insertion
        // const insertLearner =await collection.insertMany(learnersData);
    
        // console.log("Insert successful!!");

        // //Updation
        // const updateLearner = await collection.updateOne(
        //     {learner: "John Doe"},
        //     {$set: {score:90}}
        //     );
        //     console.log("Update successful!!");

        // //Read
        // const fetchData = await collection.find({}).toArray();
        // console.log(fetchData);

        //Delete
        // const deleteData = await collection.deleteOne(
        //     {learner:"Parmis"}
        // );

        //Find score above 80
        // const learnerData = await collection.find({ score : { $gt: 80 } }).toArray();
        // console.log(learnerData);

        // //Find avarage score for all learners
        // const learnerData = await collection.aggregate([{
        //     $group: { _id: null, avarageScore:{ $avg: "$score"}}

        // }]).toArray();
        // console.log(learnerData);

        // //update multiple documents using a filter
        // const updateData = await collection.updateMany({score : 90},{ $inc : { score: 5}})
        // console.log(updateData);

        //Delete score below 70
        const deleteData = await collection.deleteMany({ score : { $lt: 70}});
        console.log(deleteData);


    }finally{
        client.close();
    }
}

run().catch(console.error);