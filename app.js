const post=[
    {title: 'Post Başlık 1', detail: 'Post Detay 1'} ,
    {title: 'Post Başlık 2', detail: 'Post Detay 2'} ,
    {title: 'Post Başlık 3', detail: 'Post Detay 3'} ,
    {title: 'Post Başlık 4', detail: 'Post Detay 4'} 
];

const listPost = () => {
    post.map((postt)=>{
        console.log(postt.title+" "+postt.detail);
    })
}

const addPost=(newPost)=>{
    const promise=new Promise((resolve,reject)=>{
        post.push(newPost);
        resolve(post)
    })
    return promise;
}

function showPostPromise(){
    addPost({title: 'Post Başlık 5', detail: 'Post Detay 5'}).then(()=>
    {
        listPost();
    }).catch(error=>error)
}

async function showPostAsync(){
    try{
        await addPost({title: 'Post Başlık 5', detail: 'Post Detay 5'} );
        listPost();
    }catch(error){
        console.log(error);
    }
} 

showPost1();