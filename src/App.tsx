import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post, PostType } from "./components/Post";


import styles from "./App.module.css";

import "./global.css";

const posts: PostType[] = [
  {
    id: 1,
    author:{
      avatarUrl: 'https://github.com/paulocesarrodrigues.png',
      name: 'Paulo Cesar Rodrigues',
      role: 'Desenvolvedor Web'
    },
    content:[
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-10-02 11:22:00') 
  },
  {
    id: 2,
    author:{
      avatarUrl: 'https://github.com/paulocesarrodrigues.png',
      name: 'Paulo Cesar',
      role: 'Desenvolvedor'
    },
    content:[
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-10-03 08:13:00') 
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post =>{
            return (
              <Post 
              key={post.id}
              post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  );
}
