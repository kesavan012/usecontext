import React,{useContext} from 'react'
import './Content.css';
import {CreContext} from '../Context/CreContext';

const Content = () => {
  const {color1,fontColorbody} = useContext(CreContext)
  return (
    <div id="bodyy" style={{backgroundColor:color1}}>
      <img src='download.jpeg' alt='img' />
      <p id='para' style={{color:fontColorbody}}>Anime differs from other forms of animation by its art styles, methods of animation, its production, and its process. Visually, anime works exhibit a wide variety of art styles, differing between creators, artists, and studios.[49] While no single art style predominates anime as a whole, they do share some similar attributes in terms of animation technique and character design.Anime is fundamentally characterized by the use of limited animation, flat expression, the suspension of time, its thematic range, the presence of historical figures, its complex narrative line and, above all, a peculiar drawing style, with characters characterized by large and oval eyes, with very defined lines, bright colors and reduced movement of the lips.[50][51]</p>
    </div>
  )
}

export default Content
