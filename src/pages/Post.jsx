import axios from "axios";
import React, { useEffect, useState } from "react";

const Post = () => {
  const [post, setPost] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10); // default limit
  const [hasNext, setHasNext] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
      )
      .then((res) => {
        setPost(res.data);
        setHasNext(res.data.length === limit);
      });
  }, [page, limit]);

  const nextPage = () => setPage((prev) => prev + 1);
  const prevPage = () => setPage((prev) => prev - 1);

  const handleLimitChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0 && value <= 50) {
      setLimit(value);
      setPage(1);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="mb-4 flex items-center gap-4">
        <label htmlFor="limit" className="text-lg font-semibold">
          Limit:
        </label>
        <input
          type="number"
          id="limit"
          value={limit}
          onChange={handleLimitChange}
          placeholder="Limit"
          className="border px-3 py-1 rounded w-24"
          min={1}
          max={50}
        />
      </div>

      <div className="overflow-x-auto shadow rounded">
        <table className="w-full table-auto border border-gray-300">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Title</th>
              <th className="border px-4 py-2">Body</th>
            </tr>
          </thead>
          <tbody>
            {post.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{item.id}</td>
                <td className="border px-4 py-2">{item.title}</td>
                <td className="border px-4 py-2">{item.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          onClick={prevPage}
          disabled={page === 1}
          className="bg-gray-600 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span className="text-lg font-medium">{page}</span>
        <button
          onClick={nextPage}
          disabled={!hasNext}
          className="bg-gray-600 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Post;
