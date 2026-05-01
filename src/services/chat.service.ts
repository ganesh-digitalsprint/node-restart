export const chatService=async (question:string)=>{
    if(!question){
        throw new Error("Question is required");
    }
    if(question.toLowerCase().includes("hello")){
        return "Hello! How can I assist you today?";
    }

    return "Sorry, I don't understand the question.";
}

