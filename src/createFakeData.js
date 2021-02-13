import Post from './models/post';

export default function createFakeData(){
    const posts = [...Array(40).keys()].map(i => ({
        title: `포스트 #${i}`,
        body: 'Minim proident elit excepteur ipsum laborum. Non cillum magna non officia amet magna qui magna consectetur occaecat culpa duis tempor non. Ex fugiat laboris velit nisi quis in aliquip velit pariatur excepteur ut ex tempor ipsum. Nisi consectetur fugiat irure laborum ea proident anim sunt minim labore commodo nostrud. Proident cillum deserunt ullamco ullamco occaecat incididunt. Irure eu minim quis tempor ex adipisicing id.',
        tags:['fake', 'data']
    }));

    Post.insertMany(posts, (err, docs) => {
        console.log(docs);
    });
};

