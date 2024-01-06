import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Home.css';


const Home = () => {
  const [books, setBooks] = useState([]); // usestate == 값이 변경될 때 마다 렌더링됨

  async function getBooks() {
    const res = await axios.get('http://localhost:3001/books', { headers: { 'Content-Type': 'application/json' } });
    if (res.status === 200) {
      console.log(res.data[0]);
      setBooks(res.data);
    }
  }

  // useEffect는 페이지가 시작되자마자 실행되는 함수 ( )
  useEffect(() => {
    // console.log('Home'); // 프린트
    getBooks();
  }, [])

  return (
    <div>
      <h1>{books.map((book, index) => <img className="img" key={book.id} src={book.coverImg} alt={book.name} />)}
      </h1>
    </div>
  )
}

export default Home;