import rapid from '../api/rapid'
import { useState, useEffect } from "react";


export default function HomeContent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await rapid.get(
          '/hiragana'
        );
        setData(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <h1>API Posts</h1>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <ul>
        {data &&
          data.map(({ japanese,romaji }) => (
            <li key={japanese}>
              <h3>{romaji}</h3>
            </li>
          ))}
      </ul>
    </div>
  );
}
