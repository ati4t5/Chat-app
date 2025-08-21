import chaticon from './chaticon.svg';
import p1 from './p1.jpeg';
import p2 from './p2.jpeg';
import p3 from './p3.JPG';


import dots from '/dots.png';
import search from './search.png'
const assets ={
    chaticon,
    dots,
    search,
    p1,
    p2,
    p3
}
export default assets;

export const imagedumydata=[p1,p2,p3,p2,p1,p3];
export const messagedummydata=[
    {
        '_id':"1",
        'senderid':'1',
        'recieverid':'2',
        'text':'Assalamoalikum how are you',
        'seen':true,
        'createdat':'2025-04-28t10:23:27.844Z'

    },
     {
        '_id':"2",
        'senderid':'2',
        'recieverid':'3',
        'text':'Assalamo alikum ,how are you',
        'seen':true,
        'createdat':'2025-04-28t10:23:27.844Z'

    },
     {
        '_id':"1",
        'senderid':'1',
        'recieverid':'2',
        'text':'Assalamoalikum how are ,what are u doing sss s s s s  sssss',
        'seen':true,
        'createdat':'111111'

    },
     {
        '_id':"2",
        'senderid':'2',
        'recieverid':'3',
        'text':'Assalamo alikum ,how are you, whats going on',
        'seen':true,
        'createdat':'212'

    },
     {
        '_id':"3",
        'senderid':'3',
        'recieverid':'4',
        'text':'Assalamoalikum g',
        'seen':true,
        'createdat':'2025-04-28t10:23:27.844Z'

    }
];
export const userdummydata =[
    {"_id":"1",
    "email":"abc@gmail.com",
    "fullname":"Jasim Ali",
    "profilepic":p1,
    "bio":"Hy There!"
},
  {"_id":"2",
    "email":"abc@gmail.com",
    "fullname":"Ahad Ali",
    "profilepic":p2,
    "bio":"Hy There!"
}, 
 {"_id":"3",
    "email":"abc@gmail.com",
    "fullname":"Zohran Ali",
    "profilepic":p3,
    "bio":"Hy There!"
}, 
 {"_id":"4",
    "email":"abc@gmail.com",
    "fullname":"Hanan Ali",
    "profilepic":"p4",
    "bio":"Hy There!"
},  
{"_id":"5",
    "email":"abc@gmail.com",
    "fullname":"Ayan Ali",
    "profilepic":"p5",
    "bio":"Hy There!"
}
]