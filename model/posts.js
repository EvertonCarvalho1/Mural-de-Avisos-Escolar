function generateID(){
    return Math.random().toString(36).substr(2, 9); 
   
}

module.exports = {
    //array com objetos
     posts: [
        {
            id: '1',
            title: 'title',
            description: 'description'
         }, 
    ],
    getAll(){
        return this.posts;
    },

    newPost(title, description){
        //.push insere novo elemento dentro do array 
        this.posts.push({ id: generateID(), title, description});
    },

    
}

