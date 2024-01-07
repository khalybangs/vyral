var nodes = {
    all_posts: [],
    section: 'n',
    load: 'n',
    current: 'n',
    pass: 'e',
}


// extraction function
function one() {
    if (nodes.current == 'n') {
        fetch('/post/getPosts', { method: 'get'}).then((response)=>{
            return response.json();
        }).then((data)=>{
            for (let i = 0; i < data.length; i++) {
                if (data[i].content_type == 'journal' || data[i].content_type == 'author_journal' || data[i].content_type == 'admin_aut_journal') {
                    nodes.all_posts[nodes.all_posts.length] = {type: 'journal', content: data[i]};
                }
                if (data[i].content_type == 'string') {
                    nodes.all_posts[nodes.all_posts.length] = {type: 'string', content: data[i]};
                }
                if (data[i].content_type == 'thread') {
                    nodes.all_posts[nodes.all_posts.length] = {type: 'thread', content: data[i]};
                }
                if (data[i].content_type == 'usr_aut_book') {
                    nodes.all_posts[nodes.all_posts.length] = {type: 'book', content: data[i]};
                }
            }
            two();
        });
    }
}
// check  now
function two() {
    
}
one();

export {nodes};